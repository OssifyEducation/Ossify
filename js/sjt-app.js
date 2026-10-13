/* Ossify — Professional Dilemmas (SJT) Topic Mode UI.
 * Depends on: js/sjt-engine.js (OssifySJT), js/sjt-questions.js (OSSIFY_SJT_QUESTIONS).
 * Presentation only: all validation and marking goes through OssifySJT.
 */
(function () {
  "use strict";
  var SJT = window.OssifySJT;
  var BANK = window.OSSIFY_SJT_QUESTIONS || [];
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });
  var STORE_KEY = "ossify_sjt_session_v1";
  var bankErrors = SJT.validateBank(BANK);
  if (bankErrors.length && window.console) console.error("SJT bank validation failed:", bankErrors);
  var VALID = BANK.filter(function (q) { return SJT.validateQuestion(q).length === 0; });

  // ── Setup state ─────────────────────────────────────────────────────────
  var countChoice = 5;       // number | "all" | "custom"
  var feedback = "each";     // "each" | "end"
  var S = null;              // active session
  var lastShownId = null;    // animate the card only when the question changes

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function rich(s) { return esc(s).replace(/\[([A-H])\]/g, '<strong class="optref">$1</strong>'); }
  function paras(s) { return String(s || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }
  function announce(msg) { var a = $("announcer"); if (a) { a.textContent = ""; setTimeout(function () { a.textContent = msg; }, 30); } }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch (e) { return null; } }
  function clearStore() { try { localStorage.removeItem(STORE_KEY); } catch (e) {} }
  function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }

  // ── Count selection ─────────────────────────────────────────────────────
  function renderCountGrid() {
    var opts = SJT.COUNT_PRESETS.map(function (n) { return { v: n, label: String(n) }; });
    opts.push({ v: "all", label: "All", wide: false });
    opts.push({ v: "custom", label: "Custom", wide: true });
    $("countGrid").innerHTML = opts.map(function (o) {
      var on = String(countChoice) === String(o.v);
      return '<button type="button" role="radio" class="count-btn' + (o.wide ? " wide" : "") + '" aria-checked="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-v="' + o.v + '" aria-label="' + (o.v === "all" ? "All available questions" : o.v === "custom" ? "Custom number" : o.label + " questions") + '">' + o.label + "</button>";
    }).join("");
  }

  function selectCount(v) {
    countChoice = v === "all" || v === "custom" ? v : parseInt(v, 10);
    renderCountGrid();
    $("customWrap").hidden = countChoice !== "custom";
    if (countChoice === "custom") { var inp = $("customCount"); inp.focus(); validateCustom(); }
    updateSummary();
  }

  function validateCustom() {
    var inp = $("customCount"), msg = $("customMsg");
    var r = SJT.parseCount(inp.value);
    var show = inp.value.trim() !== "" || inp.dataset.touched === "1";
    inp.setAttribute("aria-invalid", String(!r.ok && show));
    msg.textContent = !r.ok && show ? r.error : "";
    return r;
  }

  function requested() {
    if (countChoice === "all") return "all";
    if (countChoice === "custom") { var r = SJT.parseCount($("customCount").value); return r.ok ? r.value : null; }
    return countChoice;
  }

  function updateSummary() {
    var req = requested(), avail = VALID.length, box = $("selSummary"), btn = $("startBtn");
    if (!avail) { box.innerHTML = "No questions are available yet."; btn.disabled = true; return; }
    if (req === null) { box.innerHTML = "Enter a whole number from " + SJT.CUSTOM_MIN + " to " + SJT.CUSTOM_MAX + "."; btn.disabled = true; return; }
    btn.disabled = false;
    var n = req === "all" ? avail : Math.min(req, avail);
    var html = "<strong>" + plural(n, "question") + "</strong> · answers shown " + (feedback === "each" ? "after each question" : "at the end");
    if (req === "all") html += '<span class="note">Every question in the bank (' + avail + " so far).</span>";
    else if (req > avail) html += '<span class="note">You asked for ' + req + ", but the bank has " + plural(avail, "question") + " so far, so this session will include all " + avail + ".</span>";
    box.innerHTML = html;
  }

  function setFeedback(v) {
    feedback = v;
    document.querySelectorAll(".seg-btn").forEach(function (b) {
      var on = b.dataset.fb === v; b.classList.toggle("on", on); b.setAttribute("aria-checked", String(on));
    });
    updateSummary();
  }

  // ── Session lifecycle ───────────────────────────────────────────────────
  function startSession() {
    var req = requested();
    if (req === null) { $("customCount").dataset.touched = "1"; validateCustom(); $("customCount").focus(); return; }
    var seed = (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
    var sel = SJT.selectQuestions(VALID, req, seed);
    S = { v: 1, seed: seed, ids: sel.ids, requested: req, fb: feedback, idx: 0, drafts: {}, results: {}, startedAt: Date.now(), finishedAt: null };
    save();
    enterSession();
  }

  function enterSession() {
    // drop ids that no longer exist in the bank (e.g. after a content update)
    S.ids = S.ids.filter(function (id) { return BY_ID[id]; });
    if (!S.ids.length) { discardSession(); return; }
    $("configBody").hidden = true;
    $("qNavWrap").hidden = false;
    $("endBtn").style.display = S.finishedAt ? "none" : "";
    if (S.finishedAt) renderSummary(); else render();
  }

  function resumeSession() { S = load(); if (S) enterSession(); }
  function discardSession() {
    clearStore(); S = null;
    $("resumeBanner").hidden = true;
    $("configBody").hidden = false; $("qNavWrap").hidden = true; $("endBtn").style.display = "none";
    $("sessionMeta").textContent = ""; $("progressBar").style.width = "0%";
  }
  function newSession() { clearStore(); location.reload(); }

  function answeredCount() { return S.ids.filter(function (id) { return S.results[id]; }).length; }

  function askFinish() {
    var left = S.ids.length - answeredCount();
    $("finishText").textContent = left
      ? "You have " + plural(left, "unanswered question") + ". They will score 0 marks, as they would in the real paper, but you can still review their explanations."
      : "You've answered every question. You can review each one in full on the next screen.";
    $("finishModal").hidden = false;
    $("finishModal").querySelector(".btn-primary").focus();
  }
  function closeFinish() { $("finishModal").hidden = true; $("endBtn").focus(); }
  function finishSession() {
    $("finishModal").hidden = true;
    S.finishedAt = Date.now(); save();
    $("endBtn").style.display = "none";
    renderSummary();
  }

  // ── Rendering: chrome ───────────────────────────────────────────────────
  function scoreClass(r) { if (!r) return ""; var p = r.marks / r.max; return p >= 0.8 ? "s-hi" : p >= 0.5 ? "s-mid" : "s-lo"; }
  function showMarks() { return S.fb === "each" || !!S.finishedAt; }

  function renderNav() {
    $("qGrid").innerHTML = S.ids.map(function (id, i) {
      var r = S.results[id];
      var cls = "q-dot" + (r ? (showMarks() ? " " + scoreClass(r) : " done") : "") + (i === S.idx && !S.viewSummary ? " current" : "");
      var state = r ? (showMarks() ? r.marks + " of " + r.max + " marks" : "answered") : "not answered";
      return '<button type="button" class="' + cls + '" data-i="' + i + '" aria-label="Question ' + (i + 1) + ", " + state + '"' + (i === S.idx ? ' aria-current="step"' : "") + ">" + (i + 1) + "</button>";
    }).join("");
    var done = answeredCount();
    $("progressBar").style.width = Math.round((done / S.ids.length) * 100) + "%";
    $("sessionMeta").textContent = S.finishedAt ? "Session complete" : "Question " + (S.idx + 1) + " of " + S.ids.length + " · " + done + " answered";
  }

  function goTo(i) {
    S.viewSummary = false;
    S.idx = Math.max(0, Math.min(S.ids.length - 1, i));
    save(); render();
    var m = $("mainArea"); m.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Rendering: question ─────────────────────────────────────────────────
  function render() {
    renderNav();
    var id = S.ids[S.idx], q = BY_ID[id], r = S.results[id];
    var draft = S.drafts[id] || [];
    var isRank = q.format === "ranking";
    var enter = id !== lastShownId; lastShownId = id;
    var html = '<article class="q-card' + (enter ? " enter" : "") + '" aria-labelledby="qTitle">' +
      '<div class="q-card-top"><span class="q-badge' + (isRank ? "" : " mc") + '">' + (isRank ? "Ranking" : "Multiple choice") + "</span>" +
      '<span class="q-attr">' + esc(q.attribute) + '</span><span class="q-setting">' + esc(q.setting) + "</span></div>" +
      '<div class="q-body"><div class="q-num" id="qTitle">Question ' + (S.idx + 1) + " of " + S.ids.length + "</div>" +
      '<div class="stem">' + paras(q.stem) + "</div>" +
      '<div class="instr">' + esc(q.instruction) + "</div>" +
      (r ? lockedAnswer(q, r) : (isRank ? rankingControl(q, draft) : mcControl(q, draft))) +
      "</div>";

    if (!r) {
      var v = SJT.validateResponse(q, draft);
      html += '<div class="act"><span class="act-status' + (v.ok ? " ready" : "") + '" id="actStatus">' + statusText(q, draft) + "</span>" +
        '<button type="button" class="btn-ghost" id="clearBtn"' + (draft.length ? "" : " disabled") + ">Clear</button>" +
        '<button type="button" class="btn-primary" id="submitBtn"' + (v.ok ? "" : " disabled") + ">Submit answer</button></div>";
    } else if (showMarks()) {
      html += reviewHtml(q, r);
    } else {
      html += '<div class="act"><span class="locked-note">✓ Answer saved. Marks and explanations appear when you finish the session.</span></div>';
    }
    html += "</article>";

    var last = S.idx === S.ids.length - 1;
    html += '<nav class="bottom-nav" aria-label="Question navigation">' +
      '<button type="button" class="btn-ghost" id="prevBtn"' + (S.idx === 0 ? " disabled" : "") + ">← Previous</button><span class=\"sp\"></span>" +
      (S.finishedAt
        ? '<button type="button" class="btn-ghost" id="toSummaryBtn">Results</button>' + (last ? "" : '<button type="button" class="btn-primary" id="nextBtn">Next →</button>')
        : (last ? '<button type="button" class="btn-primary" id="finishBtn">Finish session</button>' : '<button type="button" class="' + (r ? "btn-primary" : "btn-ghost") + '" id="nextBtn">' + (r ? "Next question →" : "Skip for now →") + "</button>")) +
      "</nav>";
    $("mainArea").innerHTML = html;
  }

  function statusText(q, draft) {
    if (q.format === "ranking") {
      var n = q.options.length;
      return draft.length === n ? "All " + n + " ranked. Submit when you're happy." : draft.length + " of " + n + " ranked";
    }
    var need = q.selectCount || 3;
    return draft.length === need ? need + " selected. Submit when you're happy." : draft.length + " of " + need + " selected";
  }

  function optText(q, id) { var o = q.options.filter(function (x) { return x.id === id; })[0]; return o ? o.text : id; }

  function rankingControl(q, draft) {
    var n = q.options.length;
    var slots = "";
    for (var i = 0; i < n; i++) {
      var id = draft[i];
      var end = i === 0 ? "Most" : i === n - 1 ? "Least" : "";
      if (id) {
        slots += '<li class="slot filled" data-slot="' + i + '" tabindex="0" aria-label="Rank ' + (i + 1) + ": option " + id + ". Use Alt plus arrow keys to move.\">" +
          '<span class="slot-n">' + (i + 1) + "</span>" +
          '<span class="slot-txt"><span class="slot-ltr">' + id + "</span>" + esc(optText(q, id)) + "</span>" +
          '<span class="slot-ctl">' +
          '<button type="button" class="ic-btn" data-move="-1" data-slot="' + i + '" aria-label="Move ' + id + ' up"' + (i === 0 ? " disabled" : "") + ">↑</button>" +
          '<button type="button" class="ic-btn" data-move="1" data-slot="' + i + '" aria-label="Move ' + id + ' down"' + (i === draft.length - 1 ? " disabled" : "") + ">↓</button>" +
          '<button type="button" class="ic-btn" data-remove="' + i + '" aria-label="Remove ' + id + ' from ranking">✕</button></span></li>';
      } else {
        slots += '<li class="slot" aria-label="Rank ' + (i + 1) + ', empty"><span class="slot-n">' + (i + 1) + "</span>" + (end ? '<span class="slot-end">' + end + " appropriate</span>" : "") + "</li>";
      }
    }
    var pool = q.options.filter(function (o) { return draft.indexOf(o.id) < 0; });
    return '<div class="rank-wrap">' +
      '<div><div class="zone-lbl" id="rankLbl">Your ranking <span class="hint">1 = most appropriate</span></div><ol class="slots" aria-labelledby="rankLbl">' + slots + "</ol></div>" +
      '<div><div class="zone-lbl" id="poolLbl">Options <span class="hint">' + (pool.length ? "Tap in order of preference" : "All placed") + "</span></div>" +
      '<div class="pool" role="group" aria-labelledby="poolLbl">' +
      (pool.length ? pool.map(function (o) {
        return '<button type="button" class="opt" data-place="' + o.id + '" aria-label="Place option ' + o.id + " at rank " + (draft.length + 1) + ": " + esc(o.text) + '"><span class="opt-ltr">' + o.id + '</span><span class="opt-txt">' + esc(o.text) + "</span></button>";
      }).join("") : '<div class="pool-empty">Reorder with ↑ and ↓, or remove an option with ✕ to place it again.</div>') +
      "</div></div></div>";
  }

  function mcControl(q, draft) {
    var need = q.selectCount || 3, full = draft.length >= need;
    return '<div class="mc" role="group" aria-label="Choose ' + need + ' options">' + q.options.map(function (o) {
      var on = draft.indexOf(o.id) >= 0;
      return '<button type="button" class="opt' + (full && !on ? " dim" : "") + '" role="checkbox" aria-checked="' + on + '" data-toggle="' + o.id + '">' +
        '<span class="tick" aria-hidden="true"></span><span class="opt-ltr">' + o.id + '</span><span class="opt-txt">' + esc(o.text) + "</span></button>";
    }).join("") + "</div>";
  }

  function lockedAnswer(q, r) {
    if (q.format === "ranking") {
      return '<ol class="slots" aria-label="Your submitted ranking">' + r.response.map(function (id, i) {
        return '<li class="slot filled"><span class="slot-n">' + (i + 1) + '</span><span class="slot-txt"><span class="slot-ltr">' + id + "</span>" + esc(optText(q, id)) + "</span></li>";
      }).join("") + "</ol>";
    }
    return '<div class="mc" aria-label="Your submitted choices">' + q.options.map(function (o) {
      var on = r.response.indexOf(o.id) >= 0;
      return '<div class="opt' + (on ? "" : " dim") + '" role="checkbox" aria-checked="' + on + '" aria-disabled="true"><span class="tick" aria-hidden="true"></span><span class="opt-ltr">' + o.id + '</span><span class="opt-txt">' + esc(o.text) + "</span></div>";
    }).join("") + "</div>";
  }

  // ── Rendering: review ───────────────────────────────────────────────────
  function marksPill(m, max) {
    var cls = m === max ? "ok" : m > 0 ? "mid" : "lo";
    return '<span class="pill ' + cls + '">' + m + "/" + max + "</span>";
  }
  function placesText(p) { return p === 0 ? "exact" : p === 1 ? "1 place out" : p + " places out"; }

  function reviewHtml(q, r) {
    var isRank = q.format === "ranking";
    var pct = r.max ? Math.round((r.marks / r.max) * 100) : 0;
    var h = '<section class="review" aria-label="Review">' +
      '<div class="score-head"><div class="score-big">' + r.marks + "<small> / " + r.max + "</small></div>" +
      '<div class="score-meta"><div class="score-bar"><span style="width:' + pct + '%"></span></div>' +
      '<div class="score-sum">' + esc(r.summary) + "</div>" +
      '<div class="score-model">' + esc(SJT.MODEL_NAME) + " · educational estimate, not an official MSRA mark</div></div></div>";

    if (isRank) {
      var rows = q.options.map(function (o) {
        var b = r.breakdown.filter(function (x) { return x.optionId === o.id; })[0];
        return "<tr><td class=\"ltr\">" + o.id + '</td><td class="hide-sm">' + esc(o.text) + '</td><td class="c">' + b.givenRank + '</td><td class="c">' + b.idealRank + '</td><td class="c">' + marksPill(b.marks, b.max) + '<div style="font-size:10.5px;color:var(--muted);margin-top:2px">' + placesText(b.placesOut) + "</div></td></tr>";
      }).join("");
      h += '<table class="cmp"><caption class="sr-only">Your ranking compared with the key</caption><thead><tr><th>Option</th><th class="hide-sm">Action</th><th class="c">You</th><th class="c">Key</th><th class="c">Marks</th></tr></thead><tbody>' + rows + "</tbody></table>" +
        '<div class="ex-sec"><div class="ex-hd">Order compared</div><p>Your order: <strong>' + r.response.join(" ") + "</strong> · Key: <strong>" + r.key.join(" ") + "</strong></p>" +
        "<p>Each option earns up to 4 marks: 4 in its keyed position, then one mark fewer for each place away. Swapping two neighbouring options therefore costs only 2 marks in total, which is why a sensible but imperfect order still scores well.</p></div>";
    } else {
      var rowsMc = q.options.map(function (o) {
        var chose = r.response.indexOf(o.id) >= 0, keyed = r.key.indexOf(o.id) >= 0;
        var marks = chose && keyed ? 4 : 0;
        var res = chose ? (keyed ? '<span class="pill ok">+4</span>' : '<span class="pill lo">0</span>') : (keyed ? '<span class="pill na">missed</span>' : "");
        return "<tr><td class=\"ltr\">" + o.id + '</td><td class="hide-sm">' + esc(o.text) + '</td><td class="c">' + (chose ? "✓" : "") + '</td><td class="c">' + (keyed ? "✓" : "") + '</td><td class="c">' + res + "</td></tr>";
      }).join("");
      h += '<table class="cmp"><caption class="sr-only">Your choices compared with the key</caption><thead><tr><th>Option</th><th class="hide-sm">Action</th><th class="c">You chose</th><th class="c">In key</th><th class="c">Marks</th></tr></thead><tbody>' + rowsMc + "</tbody></table>" +
        '<div class="ex-sec"><div class="ex-hd">How this was marked</div><p>Each of the three keyed actions you chose earns 4 marks, up to 12. Choosing an action outside the key costs nothing beyond the 4 marks you could have earned with a keyed one, as there is no negative marking.</p></div>';
    }

    var ex = q.explanation;
    h += '<div class="ex-sec"><div class="ex-hd">The judgement being tested</div><p>' + rich(ex.issue) + "</p></div>" +
      '<div class="ex-sec"><div class="ex-hd">What matters in the scenario</div><p>' + rich(ex.keyDetails) + "</p></div>" +
      '<div class="ex-sec"><div class="ex-hd">' + (isRank ? "Why the key is ordered this way" : "Why these three") + "</div><p>" + rich(ex.reasoning) + "</p>" + (ex.competing ? "<p>" + rich(ex.competing) + "</p>" : "") + "</div>";

    var order = isRank ? q.key.order : q.options.map(function (o) { return o.id; });
    h += '<div class="ex-sec"><div class="ex-hd">Option by option</div>' + order.map(function (id) {
      var o = q.options.filter(function (x) { return x.id === id; })[0];
      var tag = isRank ? "Key rank " + (q.key.order.indexOf(id) + 1) : (q.key.correct.indexOf(id) >= 0 ? "In the key" : "Not in the key");
      var you = isRank ? " · you ranked it " + (r.response.indexOf(id) + 1) : (r.response.indexOf(id) >= 0 ? " · you chose it" : "");
      var tagCls = isRank ? "na" : (q.key.correct.indexOf(id) >= 0 ? "ok" : "na");
      return '<div class="oe"><span class="oe-ltr">' + id + '</span><div class="oe-body"><div class="oe-head"><span class="oe-text">' + esc(o.text) + '</span><span class="pill ' + tagCls + '">' + tag + you + "</span></div>" +
        '<div class="oe-brief" id="b-' + q.id + "-" + id + '">' + rich(o.brief) + "</div>" +
        '<div class="oe-detail" id="d-' + q.id + "-" + id + '" hidden>' + rich(o.detailed) + "</div>" +
        '<button type="button" class="det-toggle" data-detail="' + q.id + "-" + id + '" aria-expanded="false">Detailed explanation</button></div></div>';
    }).join("") + "</div>";

    h += '<div class="ex-sec"><div class="ex-hd">References</div><ul class="refs">' + q.references.map(function (ref) {
      return '<li><a href="' + esc(ref.url) + '" target="_blank" rel="noopener">' + esc(ref.title) + '</a> <span class="rn">— ' + esc(ref.publisher) + (ref.year ? ", " + ref.year : "") + "</span>" + (ref.note ? '<br><span class="rn">' + esc(ref.note) + "</span>" : "") + "</li>";
    }).join("") + "</ul></div></section>";
    return h;
  }

  // ── Summary ─────────────────────────────────────────────────────────────
  function renderSummary() {
    S.viewSummary = true; lastShownId = null;
    renderNav();
    var marks = 0, max = 0, byAttr = {};
    var rows = S.ids.map(function (id, i) {
      var q = BY_ID[id], r = S.results[id];
      var qMax = r ? r.max : (q.format === "ranking" ? 4 * q.options.length : 12);
      var qMarks = r ? r.marks : 0;
      marks += qMarks; max += qMax;
      var a = byAttr[q.attribute] || (byAttr[q.attribute] = { m: 0, x: 0 });
      a.m += qMarks; a.x += qMax;
      return "<tr><td>" + (i + 1) + "</td><td>" + esc(q.title) + '<div style="font-size:11.5px;color:var(--muted)">' + esc(q.attribute) + " · " + (q.format === "ranking" ? "Ranking" : "Multiple choice") + "</div></td>" +
        '<td class="r">' + (r ? marksPill(r.marks, r.max) : '<span class="pill na">not answered · 0/' + qMax + "</span>") + "</td>" +
        '<td class="r"><button type="button" class="link-btn" data-review="' + i + '">Review →</button></td></tr>';
    }).join("");
    var pct = max ? Math.round((marks / max) * 100) : 0;
    var unanswered = S.ids.length - answeredCount();
    var attrs = ["Professional integrity", "Coping with pressure", "Empathy and sensitivity"].map(function (k) {
      var a = byAttr[k];
      return '<div class="attr"><div class="attr-n">' + k + '</div><div class="attr-v">' + (a ? Math.round((a.m / a.x) * 100) + "%" : "—") + '</div><div style="font-size:11px;color:var(--muted)">' + (a ? a.m + " of " + a.x + " marks" : "Not in this session") + "</div></div>";
    }).join("");
    $("mainArea").innerHTML = '<section class="summary" aria-labelledby="sumTitle">' +
      '<h2 class="sr-only" id="sumTitle">Session results</h2>' +
      '<div class="sum-top"><div class="sum-score">' + pct + "<small>%</small></div>" +
      '<div class="sum-lede">You scored <strong>' + marks + " of " + max + " marks</strong> across " + plural(S.ids.length, "question") + (unanswered ? ", with " + unanswered + " left unanswered" : "") + "." +
      '<span class="note">' + esc(SJT.MODEL_NAME) + ". This is a guide to how closely your judgement matches the key, not an official MSRA result. The real paper's scores are scaled, so a percentage here does not translate into a band.</span></div></div>" +
      '<div class="attr-grid">' + attrs + "</div>" +
      '<table class="sum-table"><thead><tr><th>#</th><th>Scenario</th><th class="r">Marks</th><th class="r"></th></tr></thead><tbody>' + rows + "</tbody></table>" +
      '<div class="sum-acts"><button type="button" class="btn-primary" data-review="0">Review answers</button><button type="button" class="btn-ghost" id="newBtn">New session</button></div></section>';
    $("mainArea").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Actions ─────────────────────────────────────────────────────────────
  function currentQ() { return BY_ID[S.ids[S.idx]]; }
  function setDraft(d) { var q = currentQ(); S.drafts[q.id] = d; save(); render(); }

  function submit() {
    var q = currentQ();
    if (S.results[q.id]) return; // idempotent: never score twice
    var draft = S.drafts[q.id] || [];
    var v = SJT.validateResponse(q, draft);
    if (!v.ok) { announce(v.error); return; }
    S.results[q.id] = SJT.scoreResponse(q, draft);
    S.results[q.id].submittedAt = Date.now();
    save(); render();
    var r = S.results[q.id];
    announce(showMarks() ? "Submitted. " + r.marks + " of " + r.max + " marks." : "Answer saved.");
    if (showMarks()) { var rv = document.querySelector(".review"); if (rv) rv.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }

  function onMainClick(e) {
    var t = e.target.closest("button");
    if (!t || !S) return;
    var q = S.viewSummary ? null : currentQ();
    var draft = q ? (S.drafts[q.id] || []).slice() : [];
    if (t.dataset.place) {
      draft.push(t.dataset.place); setDraft(draft);
      announce("Option " + t.dataset.place + " placed at rank " + draft.length + ".");
      var nxt = document.querySelector(".pool .opt") || document.getElementById("submitBtn");
      if (nxt && !nxt.disabled) nxt.focus();
    } else if (t.dataset.move) {
      var i = +t.dataset.slot, j = i + (+t.dataset.move);
      if (j < 0 || j >= draft.length) return;
      var tmp = draft[i]; draft[i] = draft[j]; draft[j] = tmp; setDraft(draft);
      announce("Option " + tmp + " moved to rank " + (j + 1) + ".");
      var mv = document.querySelector('.ic-btn[data-slot="' + j + '"][data-move="' + t.dataset.move + '"]') || document.querySelector('.slot[data-slot="' + j + '"]');
      if (mv) mv.focus();
    } else if (t.dataset.remove != null && t.dataset.remove !== "") {
      var removed = draft.splice(+t.dataset.remove, 1)[0]; setDraft(draft);
      announce("Option " + removed + " removed from the ranking.");
    } else if (t.dataset.toggle) {
      var id = t.dataset.toggle, at = draft.indexOf(id), need = q.selectCount || 3;
      if (at >= 0) draft.splice(at, 1);
      else if (draft.length >= need) { announce("You've already chosen " + need + ". Deselect one to change your answer."); return; }
      else draft.push(id);
      draft.sort(); setDraft(draft);
      var again = document.querySelector('[data-toggle="' + id + '"]'); if (again) again.focus();
    } else if (t.id === "clearBtn") { setDraft([]); announce("Answer cleared."); }
    else if (t.id === "submitBtn") submit();
    else if (t.id === "prevBtn") goTo(S.idx - 1);
    else if (t.id === "nextBtn") goTo(S.idx + 1);
    else if (t.id === "finishBtn") askFinish();
    else if (t.id === "toSummaryBtn") renderSummary();
    else if (t.id === "newBtn") newSession();
    else if (t.dataset.review != null) goTo(+t.dataset.review);
    else if (t.dataset.detail) {
      var k = t.dataset.detail, d = $("d-" + k), b = $("b-" + k), open = d.hidden;
      d.hidden = !open; b.hidden = open;
      t.textContent = open ? "Hide explanation" : "Detailed explanation";
      t.setAttribute("aria-expanded", String(open));
    }
  }

  function onKey(e) {
    if (!S || S.viewSummary || !$("finishModal").hidden) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    var q = currentQ(), answered = !!S.results[q.id];
    // Alt+↑/↓ on a focused ranked slot reorders it
    if (e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      var slot = e.target.closest && e.target.closest(".slot.filled");
      if (slot) {
        e.preventDefault();
        var btn = slot.querySelector('[data-move="' + (e.key === "ArrowUp" ? -1 : 1) + '"]');
        if (btn && !btn.disabled) btn.click();
      }
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (!answered && /^[a-h]$/i.test(e.key)) {
      var L = e.key.toUpperCase();
      var el = document.querySelector('[data-place="' + L + '"]') || document.querySelector('[data-toggle="' + L + '"]');
      if (el) {
        e.preventDefault();
        var isToggle = !!el.dataset.toggle;
        el.click();
        // After a letter-key choice, keep focus off the option so Enter submits rather than un-ticking it.
        if (isToggle) $("mainArea").focus({ preventScroll: true });
      }
      return;
    }
    if (e.key === "Enter" && !e.target.closest("button,a,summary")) {
      var sb = $("submitBtn"); if (sb && !sb.disabled) { e.preventDefault(); sb.click(); }
    }
  }

  // ── Wiring ──────────────────────────────────────────────────────────────
  function wire() {
    renderCountGrid(); updateSummary();
    $("countGrid").addEventListener("click", function (e) { var b = e.target.closest(".count-btn"); if (b) selectCount(b.dataset.v); });
    $("countGrid").addEventListener("keydown", function (e) {
      var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!keys[e.key]) return;
      e.preventDefault();
      var btns = [].slice.call(document.querySelectorAll(".count-btn"));
      var i = btns.indexOf(document.activeElement); if (i < 0) return;
      var n = btns[(i + keys[e.key] + btns.length) % btns.length];
      selectCount(n.dataset.v);
      var f = document.querySelector('.count-btn[data-v="' + n.dataset.v + '"]'); if (f && n.dataset.v !== "custom") f.focus();
    });
    var inp = $("customCount");
    inp.addEventListener("input", function () { inp.value = inp.value.replace(/[^\d.\-+e]/gi, ""); validateCustom(); updateSummary(); });
    inp.addEventListener("blur", function () { inp.dataset.touched = "1"; validateCustom(); });
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") startSession(); });
    $("mainArea").addEventListener("click", onMainClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("finishModal").hidden) closeFinish(); });
    $("qGrid").addEventListener("click", function (e) { var b = e.target.closest(".q-dot"); if (b) goTo(+b.dataset.i); });

    var saved = load();
    if (saved && saved.v === 1 && Array.isArray(saved.ids) && saved.ids.length) {
      var done = saved.ids.filter(function (id) { return saved.results && saved.results[id]; }).length;
      $("resumeDesc").textContent = saved.finishedAt
        ? "Completed session of " + plural(saved.ids.length, "question") + " · results available"
        : plural(saved.ids.length, "question") + " · " + done + " answered";
      $("resumeBanner").hidden = false;
    }
  }

  window.startSession = startSession;
  window.resumeSession = resumeSession;
  window.discardSession = discardSession;
  window.setFeedback = setFeedback;
  window.askFinish = askFinish;
  window.closeFinish = closeFinish;
  window.finishSession = finishSession;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire); else wire();
})();
