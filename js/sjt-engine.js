/* Ossify SJT engine — validation, scoring and session selection.
 * Pure functions, no DOM. Loaded by sjt.html and by tests/sjt-engine.test.js.
 *
 * SCORING: "Ossify practice scoring model v1". This is NOT the official MSRA
 * marking algorithm, which is not published in full. What is verified (see
 * docs/SJT-SPEC.md): ranking items carry up to 4 marks per response and 20 per
 * scenario with marks for near misses; multiple-choice items carry 4 marks per
 * response, 12 per scenario; no negative marking. The near-miss values below
 * are Ossify's provisional choice and are configurable.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.OssifySJT = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var MODEL_NAME = "Ossify practice scoring model v1";

  // Linear near-miss: 4 for the keyed position, minus 1 per place away, floor 0.
  function linearMatrix(n, maxPerOption) {
    var m = [];
    for (var ideal = 1; ideal <= n; ideal++) {
      var row = [];
      for (var given = 1; given <= n; given++) row.push(Math.max(0, maxPerOption - Math.abs(given - ideal)));
      m.push(row);
    }
    return m;
  }

  var DEFAULT_CONFIG = Object.freeze({
    modelName: MODEL_NAME,
    ranking: Object.freeze({
      maxPerOption: 4,
      // Optional explicit matrices keyed by option count: matrices[n][idealRank-1][givenRank-1].
      // When absent, linearMatrix(n, maxPerOption) is used.
      matrices: null
    }),
    multipleChoice: Object.freeze({ marksPerCorrect: 4, required: 3 })
  });

  var COUNT_PRESETS = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var CUSTOM_MIN = 1, CUSTOM_MAX = 100;

  function isNonEmptyString(s) { return typeof s === "string" && s.trim().length > 0; }

  // ── Question schema validation ────────────────────────────────────────────
  function validateQuestion(q) {
    var errs = [];
    if (!q || typeof q !== "object") return ["question is not an object"];
    var id = q.id || "(no id)";
    function e(msg) { errs.push(id + ": " + msg); }

    if (!/^sjt-\d{3,}$/.test(q.id || "")) e("id must look like sjt-001");
    ["title", "setting", "attribute", "stem", "instruction"].forEach(function (k) { if (!isNonEmptyString(q[k])) e(k + " is required"); });
    if (["Professional integrity", "Coping with pressure", "Empathy and sensitivity"].indexOf(q.attribute) < 0)
      e("attribute must be one of the three official PD attributes");
    if (q.format !== "ranking" && q.format !== "multiple_choice") e("format must be ranking or multiple_choice");
    if (!Array.isArray(q.options)) { e("options must be an array"); return errs; }

    var ids = q.options.map(function (o) { return o && o.id; });
    q.options.forEach(function (o, i) {
      if (!o || !isNonEmptyString(o.id)) e("option " + i + " needs an id");
      if (!o || !isNonEmptyString(o.text)) e("option " + (o && o.id) + " needs text");
      if (!o || !isNonEmptyString(o.brief)) e("option " + (o && o.id) + " needs a brief explanation");
      if (!o || !isNonEmptyString(o.detailed)) e("option " + (o && o.id) + " needs a detailed explanation");
    });
    if (new Set(ids).size !== ids.length) e("option ids must be unique");

    if (q.format === "ranking") {
      if (q.options.length < 4 || q.options.length > 5) e("ranking items have 4 or 5 options");
      var order = q.key && q.key.order;
      if (!Array.isArray(order) || order.length !== q.options.length) e("key.order must rank every option");
      else if (new Set(order).size !== order.length || order.some(function (x) { return ids.indexOf(x) < 0; }))
        e("key.order must be a permutation of the option ids");
      var n = q.options.length;
      if (!new RegExp("1 = Most appropriate; " + n + " = Least appropriate").test(q.instruction))
        e("instruction should state 1 = Most appropriate; " + n + " = Least appropriate");
    } else if (q.format === "multiple_choice") {
      if (q.options.length !== 8) e("multiple-choice items have 8 options");
      var req = q.selectCount || 3;
      if (req !== 3) e("multiple-choice items require exactly 3 selections");
      var c = q.key && q.key.correct;
      if (!Array.isArray(c) || c.length !== req) e("key.correct must list exactly " + req + " options");
      else if (new Set(c).size !== c.length || c.some(function (x) { return ids.indexOf(x) < 0; }))
        e("key.correct must contain distinct option ids");
      if (!/Choose the 3 most appropriate/.test(q.instruction)) e("instruction should say 'Choose the 3 most appropriate…'");
    }

    if (q.pool != null && !/^(practice|mock-[1-4])$/.test(q.pool)) e("pool must be practice or mock-1..mock-4");

    // Option references in explanations are written as [A]; each must exist, and bare B–H letters are not allowed.
    var texts = [];
    q.options.forEach(function (o) { if (o) texts.push(o.brief, o.detailed); });
    var exo = q.explanation || {};
    Object.keys(exo).forEach(function (k) { texts.push(exo[k]); });
    texts.forEach(function (t) {
      if (typeof t !== "string") return;
      var m, re = /\[([A-Z])\]/g;
      while ((m = re.exec(t))) if (ids.indexOf(m[1]) < 0) e("explanation refers to [" + m[1] + "], which is not an option");
      var bare = t.replace(/\[[A-Z]\]/g, "").match(/(^|[^\w'’])([B-H])(?=$|[^\w'’])/);
      if (bare) e("bare option letter '" + bare[2] + "' — write option references as [" + bare[2] + "]");
    });
    q.options.forEach(function (o) { if (o && /\[[A-Z]\]/.test(o.text || "")) e("option " + o.id + " text must not contain [X] references"); });

    var ex = q.explanation || {};
    ["issue", "keyDetails", "reasoning"].forEach(function (k) { if (!isNonEmptyString(ex[k])) e("explanation." + k + " is required"); });
    if (!Array.isArray(q.references) || !q.references.length) e("at least one reference is required");
    else q.references.forEach(function (r, i) {
      if (!r || !isNonEmptyString(r.title) || !/^https:\/\//.test(r.url || "")) e("reference " + i + " needs a title and https url");
    });
    return errs;
  }

  function validateBank(bank) {
    var errs = [];
    if (!Array.isArray(bank)) return ["bank must be an array"];
    var seen = {};
    bank.forEach(function (q) {
      errs = errs.concat(validateQuestion(q));
      if (q && q.id) { if (seen[q.id]) errs.push(q.id + ": duplicate id"); seen[q.id] = true; }
    });
    return errs;
  }

  // ── Bank-level quality report (warnings, not errors) ─────────────────────
  function words(t) { return String(t || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean); }
  function shingles(t, n) { var w = words(t), out = {}; for (var i = 0; i + n <= w.length; i++) out[w.slice(i, i + n).join(" ")] = 1; return out; }
  function jaccard(a, b) {
    var ka = Object.keys(a), inter = 0, nb = Object.keys(b).length;
    ka.forEach(function (k) { if (b[k]) inter++; });
    var uni = ka.length + nb - inter; return uni ? inter / uni : 0;
  }
  function bankReport(bank, opts) {
    opts = opts || {};
    var simThreshold = opts.similarity || 0.18;
    var r = { byFormat: {}, byPool: {}, byAttribute: {}, rankFirstLetter: {}, mcKeyedLetter: {}, warnings: [] };
    function inc(o, k) { o[k] = (o[k] || 0) + 1; }
    bank.forEach(function (q) {
      inc(r.byFormat, q.format); inc(r.byPool, q.pool || "practice"); inc(r.byAttribute, q.attribute);
      var len = {}; q.options.forEach(function (o) { len[o.id] = (o.text || "").length; });
      var lens = q.options.map(function (o) { return len[o.id]; }).sort(function (a, b) { return b - a; });
      if (q.format === "ranking" && q.key && q.key.order) {
        inc(r.rankFirstLetter, q.key.order[0]);
        var top = q.key.order[0];
        if (len[top] === lens[0] && lens[0] > 1.25 * lens[1]) r.warnings.push(q.id + ": the top-ranked option is clearly the longest (length cue)");
        if (q.key.order.join("") === q.options.map(function (o) { return o.id; }).join("")) r.warnings.push(q.id + ": key order is alphabetical");
      }
      if (q.format === "multiple_choice" && q.key && q.key.correct) {
        q.key.correct.forEach(function (k) { inc(r.mcKeyedLetter, k); });
        var keyedLens = q.key.correct.map(function (k) { return len[k]; }).sort(function (a, b) { return b - a; });
        if (keyedLens.join() === lens.slice(0, 3).join()) r.warnings.push(q.id + ": the three keyed options are the three longest (length cue)");
      }
    });
    // Across the bank, the best option should not usually be the longest one.
    var longestBest = 0, judged = 0;
    bank.forEach(function (q) {
      if (!q.key) return;
      var best = q.format === "ranking" ? (q.key.order || [])[0] : null;
      var keyed = q.format === "ranking" ? [best] : (q.key.correct || []);
      var maxLen = Math.max.apply(null, q.options.map(function (o) { return (o.text || "").length; }));
      judged++;
      if (q.options.some(function (o) { return keyed.indexOf(o.id) >= 0 && (o.text || "").length === maxLen; })) longestBest++;
    });
    r.longestIsKeyed = { count: longestBest, of: judged };
    var limit = function (n) { return Math.max(2, Math.ceil(n * 0.4)); };
    if (judged >= 10 && longestBest > limit(judged)) r.warnings.push("the longest option is keyed in " + longestBest + " of " + judged + " questions (aim for at most " + limit(judged) + ")");

    // Letter balance once the bank is big enough to judge
    var nRank = r.byFormat.ranking || 0;
    if (nRank >= 15) Object.keys(r.rankFirstLetter).forEach(function (L) {
      if (r.rankFirstLetter[L] / nRank > 0.35) r.warnings.push("letter " + L + " is ranked first in " + r.rankFirstLetter[L] + " of " + nRank + " ranking questions");
    });
    var nMc = (r.byFormat.multiple_choice || 0) * 3;
    if (nMc >= 45) Object.keys(r.mcKeyedLetter).forEach(function (L) {
      if (r.mcKeyedLetter[L] / nMc > 0.2) r.warnings.push("letter " + L + " is keyed in " + r.mcKeyedLetter[L] + " of " + nMc + " multiple-choice keys");
    });
    // Near-duplicate scenarios (3-word shingles on the stem)
    var sh = bank.map(function (q) { return shingles(q.stem, 3); });
    for (var i = 0; i < bank.length; i++) for (var j = i + 1; j < bank.length; j++) {
      var s = jaccard(sh[i], sh[j]);
      if (s >= simThreshold) r.warnings.push(bank[i].id + " and " + bank[j].id + " have similar stems (" + Math.round(s * 100) + "% overlap)");
    }
    return r;
  }

  // ── Response validation ───────────────────────────────────────────────────
  // ranking response: array of option ids, most → least appropriate
  // multiple_choice response: array of selected option ids
  function validateResponse(q, response, config) {
    config = config || DEFAULT_CONFIG;
    var ids = q.options.map(function (o) { return o.id; });
    if (!Array.isArray(response)) return { ok: false, error: "No answer given." };
    var unknown = response.filter(function (x) { return ids.indexOf(x) < 0; });
    if (unknown.length) return { ok: false, error: "Unknown option: " + unknown.join(", ") };
    if (new Set(response).size !== response.length) {
      return { ok: false, error: q.format === "ranking" ? "Each option must have a different rank (no ties)." : "Each option can only be selected once." };
    }
    if (q.format === "ranking") {
      if (response.length !== ids.length) return { ok: false, error: "Rank all " + ids.length + " options before submitting (" + response.length + " ranked)." };
      return { ok: true };
    }
    var req = q.selectCount || config.multipleChoice.required;
    if (response.length !== req) return { ok: false, error: "Select exactly " + req + " options (" + response.length + " selected)." };
    return { ok: true };
  }

  function rankingMatrix(n, config) {
    var rc = config.ranking;
    return (rc.matrices && rc.matrices[n]) || linearMatrix(n, rc.maxPerOption);
  }

  // ── Scoring ───────────────────────────────────────────────────────────────
  function scoreResponse(q, response, config) {
    config = config || DEFAULT_CONFIG;
    var v = validateResponse(q, response, config);
    if (!v.ok) throw new Error(v.error);

    if (q.format === "ranking") {
      var n = q.options.length, matrix = rankingMatrix(n, config);
      var rows = q.key.order.map(function (optId, idealIdx) {
        var givenIdx = response.indexOf(optId);
        var marks = matrix[idealIdx][givenIdx];
        return { optionId: optId, idealRank: idealIdx + 1, givenRank: givenIdx + 1,
                 placesOut: Math.abs(givenIdx - idealIdx), marks: marks, max: matrix[idealIdx][idealIdx] };
      });
      var total = rows.reduce(function (s, r) { return s + r.marks; }, 0);
      var max = rows.reduce(function (s, r) { return s + r.max; }, 0);
      var exact = rows.filter(function (r) { return r.placesOut === 0; }).length;
      return {
        format: "ranking", model: config.modelName, marks: total, max: max,
        percent: max ? Math.round((total / max) * 100) : 0,
        response: response.slice(), key: q.key.order.slice(), breakdown: rows,
        summary: exact + " of " + n + " options in the keyed position; " + total + " of " + max + " marks with near-miss credit."
      };
    }

    var per = config.multipleChoice.marksPerCorrect;
    var picks = response.map(function (optId) {
      var hit = q.key.correct.indexOf(optId) >= 0;
      return { optionId: optId, keyed: hit, marks: hit ? per : 0, max: per };
    });
    var got = picks.reduce(function (s, p) { return s + p.marks; }, 0);
    var mmax = per * q.key.correct.length;
    var hits = picks.filter(function (p) { return p.keyed; }).length;
    return {
      format: "multiple_choice", model: config.modelName, marks: got, max: mmax,
      percent: mmax ? Math.round((got / mmax) * 100) : 0,
      response: response.slice(), key: q.key.correct.slice(), breakdown: picks,
      missed: q.key.correct.filter(function (k) { return response.indexOf(k) < 0; }),
      summary: hits + " of " + q.key.correct.length + " keyed options chosen; " + got + " of " + mmax + " marks."
    };
  }

  // ── Session helpers ───────────────────────────────────────────────────────
  // Parse a custom count. Accepts only whole numbers CUSTOM_MIN..CUSTOM_MAX.
  function parseCount(raw) {
    var s = String(raw == null ? "" : raw).trim();
    if (s === "") return { ok: false, error: "Enter a number of questions." };
    if (!/^\d+$/.test(s)) {
      if (/^-/.test(s)) return { ok: false, error: "The number can't be negative." };
      if (/^\d*\.\d+$/.test(s)) return { ok: false, error: "Use a whole number." };
      return { ok: false, error: "Enter digits only." };
    }
    var n = parseInt(s, 10);
    if (n < CUSTOM_MIN || n > CUSTOM_MAX) return { ok: false, error: "Choose between " + CUSTOM_MIN + " and " + CUSTOM_MAX + "." };
    return { ok: true, value: n };
  }

  // Deterministic PRNG so a session's order can be recreated from its seed.
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // requested: positive integer, or "all". Returns unique ids, never more than exist.
  function selectQuestions(bank, requested, seed) {
    var ids = [];
    var seen = {};
    bank.forEach(function (q) { if (q && q.id && !seen[q.id]) { seen[q.id] = true; ids.push(q.id); } });
    var rand = mulberry32(seed == null ? Date.now() : seed);
    for (var i = ids.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = ids[i]; ids[i] = ids[j]; ids[j] = t;
    }
    var want = requested === "all" ? ids.length : requested;
    if (typeof want !== "number" || !isFinite(want) || want < 1 || Math.floor(want) !== want) throw new Error("invalid count");
    var take = Math.min(want, ids.length);
    return { ids: ids.slice(0, take), requested: requested, available: ids.length, shortfall: Math.max(0, want - ids.length) };
  }

  function sessionTotals(results) {
    var marks = 0, max = 0, n = 0;
    Object.keys(results || {}).forEach(function (k) { var r = results[k]; if (r) { marks += r.marks; max += r.max; n++; } });
    return { marks: marks, max: max, answered: n, percent: max ? Math.round((marks / max) * 100) : 0 };
  }

  return {
    MODEL_NAME: MODEL_NAME,
    DEFAULT_CONFIG: DEFAULT_CONFIG,
    COUNT_PRESETS: COUNT_PRESETS.slice(),
    CUSTOM_MIN: CUSTOM_MIN,
    CUSTOM_MAX: CUSTOM_MAX,
    linearMatrix: linearMatrix,
    validateQuestion: validateQuestion,
    validateBank: validateBank,
    bankReport: bankReport,
    validateResponse: validateResponse,
    scoreResponse: scoreResponse,
    parseCount: parseCount,
    selectQuestions: selectQuestions,
    sessionTotals: sessionTotals
  };
});
