/* Ossify — Professional Dilemmas (SJT) Topic Mode UI.
 * Depends on: js/sjt-engine.js (OssifySJT), js/sjt-ui.js (OssifySJTUI) and a signed-in
 * Supabase client in window.sb. The practice bank is loaded from get_sjt_practice_bank()
 * (signed-in users only); it is no longer shipped as a public file.
 * Presentation only: all validation and marking goes through OssifySJT.
 */
(function () {
  "use strict";
  var SJT = window.OssifySJT;
  var UI = window.OssifySJTUI;
  var esc = UI.esc, paras = UI.paras, rankingControl = UI.rankingControl, mcControl = UI.mcControl,
      lockedAnswer = UI.lockedAnswer, marksPill = UI.marksPill, reviewHtml = UI.reviewHtml;
  var BANK = [], BY_ID = {}, VALID = [];
  var LOADED = false, LOAD_FAILED = false;
  var STORE_KEY = "ossify_sjt_session_v1";
  function setBank(list) {
    BANK = Array.isArray(list) ? list : [];
    BY_ID = {};
    BANK.forEach(function (q) { BY_ID[q.id] = q; });
    var bankErrors = SJT.validateBank(BANK);
    if (bankErrors.length && window.console) console.error("SJT bank validation failed:", bankErrors);
    VALID = BANK.filter(function (q) { return SJT.validateQuestion(q).length === 0; });
    LOADED = true; LOAD_FAILED = false;
  }

  // Practice questions come from the database, for signed-in users only.
  function loadBank() {
    if (window.OSSIFY_SJT_QUESTIONS) { setBank(window.OSSIFY_SJT_QUESTIONS); updateSummary(); return; }   // local testing only
    var sb = window.sb;
    function fail() { LOAD_FAILED = true; updateSummary(); }
    if (!sb) { fail(); return; }
    sb.auth.getSession().then(function (r) {
      if (!(r && r.data && r.data.session)) { location.href = "login.html"; return; }
      return sb.rpc("get_sjt_practice_bank").then(function (res) {
        if (res.error || !Array.isArray(res.data)) { if (window.console) console.error("SJT bank load failed:", res.error); fail(); return; }
        setBank(res.data); updateSummary();
      });
    }).catch(fail);
  }

  // ── Setup state ─────────────────────────────────────────────────────────
  var countChoice = 5;       // number | "all" | "custom"
  var feedback = "each";     // "each" | "end"
  var S = null;              // active session
  var lastShownId = null;    // animate the card only when the question changes

  function $(id) { return document.getElementById(id); }
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
    if (LOAD_FAILED) { box.innerHTML = 'We couldn’t load the questions. <a href="sjt.html">Try again</a>'; btn.disabled = true; return; }
    if (!LOADED) { box.innerHTML = "Loading questions…"; btn.disabled = true; return; }
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

  // Save the answer for the dashboard's Professional Dilemmas progress bar.
  // The server marks it again with the same rules; a failure never interrupts practice.
  function recordAnswer(id, response) {
    var sb = window.sb;
    if (!sb || !LOADED || window.OSSIFY_SJT_QUESTIONS) return;
    try {
      sb.rpc("record_sjt_practice_answer", { p_item: id, p_response: response.slice() })
        .then(function (r) { if (r && r.error && window.console) console.warn("Could not save PD progress:", r.error.message); },
              function () {});
    } catch (e) {}
  }

  // ── Session lifecycle ───────────────────────────────────────────────────
  function startSession() {
    if (!LOADED) return;
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

  function resumeSession() {
    if (!LOADED) { setTimeout(resumeSession, 300); return; }   // wait for the bank
    S = load(); if (S) enterSession();
  }
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

  // The key matches what the dots show: purple "Done" while marks are hidden,
  // green/amber/red by marks once feedback is shown.
  function renderNavLegend() {
    var el = $("navLegend"); if (!el) return;
    var marks = showMarks();
    el.classList.toggle("marks", marks);
    el.innerHTML = marks
      ? '<span class="lg-item"><span class="lg lg-todo"></span>To do</span>' +
        '<span class="lg-item" title="80% or more of the marks"><span class="lg lg-hi"></span>80%+</span>' +
        '<span class="lg-item" title="50% to 79% of the marks"><span class="lg lg-mid"></span>50–79%</span>' +
        '<span class="lg-item" title="Under 50% of the marks"><span class="lg lg-lo"></span>Under 50%</span>'
      : '<span class="lg-item"><span class="lg lg-todo"></span>To do</span>' +
        '<span class="lg-item"><span class="lg lg-done"></span>Done</span>';
  }

  function renderNav() {
    renderNavLegend();
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
    recordAnswer(q.id, draft);
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
    renderCountGrid(); updateSummary(); loadBank();
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
