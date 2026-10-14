/* Ossify — Professional Dilemmas (SJT) Mock Mode.
 *
 * A full paper (50 scenarios, 95 minutes) served and marked by Supabase
 * (supabase/migrations/20261014_sjt_mock_mode.sql). The browser never holds a
 * key or explanation until the attempt is finished:
 *   • the server owns the clock (deadline_at) and the marks;
 *   • answers save to this device instantly and to the server (debounced);
 *   • remaining time is always (server deadline − corrected now).
 * Depends on: supabase-js, js/ossify-user.js, js/sjt-engine.js, js/sjt-ui.js.
 */
(function () {
  "use strict";
  var SUPABASE_URL = "https://judtpdikbidvccclftvq.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_-lNlSUZo3vinNc6RK3bwfg_rybh6Zfj";
  var SJT = window.OssifySJT, UI = window.OssifySJTUI;
  var esc = UI.esc, paras = UI.paras;
  var LS_PREFIX = "ossify_sjt_mock_";
  var SAVE_DEBOUNCE_MS = 1500;
  var MOCKS = ["mock-1", "mock-2", "mock-3", "mock-4"];
  var ATTRS = ["Professional integrity", "Coping with pressure", "Empathy and sensitivity"];

  var sb = null;
  try { sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); } catch (e) {}

  var accessToken = null;
  var phase = "loading";        // loading | overview | exam | submitting | results | review
  var A = null;                 // live attempt: { id, mock, questions, total, deadlineMs, durationMs }
  var answers = {};             // { "<item id>": ["B","E",…] } — partial answers allowed
  var flags = {};               // { "<item id>": true }
  var idx = 0;
  var clockOffsetMs = 0;
  var timerHandle = null, lastClockState = "normal";
  var saveTimer = null, saveInFlight = false, submitPromise = null;
  var R = null;                 // review payload
  var rIdx = 0;
  var lastShownId = null;
  var lastFocusBeforeModal = null;

  function $(id) { return document.getElementById(id); }
  function announce(msg) { var a = $("announcer"); if (a) { a.textContent = ""; setTimeout(function () { a.textContent = msg; }, 30); } }
  function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }
  function mockName(m) { return "Mock " + String(m || "").replace("mock-", ""); }
  function fmtClock(sec) { sec = Math.max(0, sec); return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0"); }
  function fmtDuration(sec) { sec = Math.max(0, sec | 0); var m = Math.floor(sec / 60), s = sec % 60; return m ? m + " min" + (s ? " " + s + " s" : "") : s + " s"; }
  function fmtDate(iso) { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  function pct1(n) { return (Math.round(Number(n) * 10) / 10).toFixed(1); }
  function serverNow() { return Date.now() + clockOffsetMs; }
  function syncClock(iso, t0, t1) { if (iso) clockOffsetMs = new Date(iso).getTime() - (t0 + t1) / 2; }

  function rpc(name, params) {
    var t0 = Date.now();
    return sb.rpc(name, params || {}).then(function (res) {
      if (res.error) throw new Error(res.error.message || res.error.details || "Request failed");
      return { data: res.data, t0: t0, t1: Date.now() };
    });
  }

  // ── Views ───────────────────────────────────────────────────────────────
  function setChrome(opts) {
    $("navPanel").hidden = !opts.nav;
    $("clock").hidden = !opts.clock;
    $("endBtn").style.display = opts.end ? "" : "none";
    $("tbTitle").textContent = opts.title || "Professional Dilemmas";
    if (!opts.meta) $("sessionMeta").textContent = "";
    if (!opts.save) $("saveState").textContent = "";
    if (!opts.progress) $("progressBar").style.width = "0%";
  }
  function show(html) {
    $("mainArea").innerHTML = html;
    $("mainArea").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function notice(title, body, actions) {
    setChrome({});
    show('<section class="splash notice" role="alert"><h2>' + esc(title) + '</h2><p class="splash-lede">' + esc(body) + "</p>" + (actions || "") + "</section>");
  }

  // ── Boot ────────────────────────────────────────────────────────────────
  async function init() {
    if (!sb) { notice("Mock exams are unavailable", "The page couldn't connect to Ossify. Check your connection and reload."); return; }
    var sess = (await sb.auth.getSession()).data.session;
    if (!sess) {
      notice("Sign in to sit a mock", "Mock exams are timed and marked on Ossify's server, so your answers and results are saved to your account. They are part of a paid plan. Sign in to start, or practise by topic for free.",
        '<div class="sum-acts"><a class="btn-primary" href="login.html">Sign in</a><a class="btn-ghost" href="sjt.html">Practise by topic instead</a></div>');
      return;
    }
    accessToken = sess.access_token;
    sb.auth.onAuthStateChange(function (_e, s) { if (s) accessToken = s.access_token; });
    var nm = window.ossifyDisplayName ? ossifyDisplayName(null, sess.user) : (sess.user.email || "");
    if ($("userAv") && window.ossifyInitials) $("userAv").textContent = ossifyInitials(nm, sess.user.email);
    if ($("userName")) $("userName").textContent = nm;
    if ($("userSub")) $("userSub").textContent = "Ossify member";

    var reviewId = new URLSearchParams(location.search).get("review");
    if (reviewId) { openReview(reviewId); return; }
    try {
      var r = await rpc("get_active_sjt_mock");
      if (r.data && r.data.status === "in_progress") { enterExam(r.data, r.t0, r.t1, true); return; }
      if (r.data && r.data.status === "expired") {
        clearLocal(r.data.attempt.id);
        openReview(r.data.attempt.id, "Your mock ended while you were away. It has been marked using the answers saved before time ran out.");
        return;
      }
    } catch (e) {
      notice("Couldn't load mock exams", "Check your connection and try again. (" + e.message + ")", '<button class="btn-primary" type="button" onclick="location.reload()">Try again</button>');
      return;
    }
    renderOverview();
  }

  // ── Overview ────────────────────────────────────────────────────────────
  async function renderOverview() {
    phase = "overview";
    setChrome({ title: "Professional Dilemmas · Mock exams" });
    show('<section class="splash"><div class="mk-loading" aria-busy="true"><span class="sr-only">Loading…</span></div></section>');
    var ov;
    try { ov = (await rpc("get_sjt_mock_overview")).data; }
    catch (e) { notice("Couldn't load mock exams", "Check your connection and try again. (" + e.message + ")", '<button class="btn-primary" type="button" onclick="location.reload()">Try again</button>'); return; }
    var avail = {}; (ov.mocks || []).forEach(function (m) { avail[m.mock] = m; });
    var attempts = ov.attempts || [];
    var active = ov.active;
    var paid = ov.access === true;

    var banner = "";
    if (active) {
      var left = Math.max(0, Math.round((new Date(active.deadline_at) - new Date(active.server_now)) / 60000));
      banner = '<div class="resume-banner"><div class="rb-info"><strong>' + esc(mockName(active.mock)) + " is in progress</strong><span>About " + plural(left, "minute") + " left · the clock keeps running</span></div>" +
        '<div class="rb-acts"><button class="rb-btn-resume" type="button" data-act="resume">Resume →</button><button class="rb-btn-discard" type="button" data-act="finish-active" data-id="' + esc(active.id) + '">Finish and mark it now</button></div></div>';
    }

    var cards = MOCKS.map(function (m) {
      var mine = attempts.filter(function (a) { return a.mock === m; });
      var best = mine.reduce(function (b, a) { return b == null || Number(a.percentage) > b ? Number(a.percentage) : b; }, null);
      var isActive = active && active.mock === m;
      var status, btn;
      if (!avail[m]) {
        status = '<span class="mk-status soon">In preparation</span>';
        btn = '<button class="btn-ghost" type="button" disabled>Not yet available</button>';
      } else if (isActive) {
        status = '<span class="mk-status live">In progress</span>';
        btn = '<button class="btn-primary" type="button" data-act="resume">Resume</button>';
      } else {
        status = mine.length ? '<span class="mk-status done">Best ' + pct1(best) + "% · " + plural(mine.length, "attempt") + "</span>" : '<span class="mk-status">Not attempted</span>';
        btn = paid
          ? '<button class="btn-primary" type="button" data-act="start" data-mock="' + m + '"' + (active ? " disabled" : "") + ">" + (mine.length ? "Sit again" : "Start " + mockName(m)) + "</button>"
          : '<a class="btn-ghost" href="pricing.html">Unlock with a paid plan</a>';
      }
      return '<div class="mk-card' + (avail[m] ? "" : " off") + '"><div class="mk-card-hd"><span class="mk-name">' + mockName(m) + "</span>" + status + "</div>" +
        '<div class="mk-spec">50 scenarios · 95 minutes<br>25 ranking · 25 multiple choice</div>' + btn + "</div>";
    }).join("");

    var hist = attempts.length ? '<h3 class="mk-h3">Your results</h3><table class="sum-table"><thead><tr><th>Mock</th><th>Date</th><th class="r">Score</th><th class="r hide-sm">Time</th><th class="r"></th></tr></thead><tbody>' +
      attempts.map(function (a) {
        return "<tr><td>" + esc(mockName(a.mock)) + "</td><td>" + fmtDate(a.completed_at) + '</td><td class="r"><strong>' + pct1(a.percentage) + "%</strong> <span class=\"muted\">" + a.marks + "/" + a.max_marks + '</span></td><td class="r hide-sm">' +
          (a.end_reason === "timeout" ? "Full 95 min" : fmtDuration(a.time_taken_seconds)) + '</td><td class="r"><a class="link-btn" href="sjt-mock.html?review=' + esc(a.id) + '">Review →</a></td></tr>';
      }).join("") + "</tbody></table>" : "";

    show('<section class="splash" aria-labelledby="mkTitle">' + banner +
      '<div class="splash-kicker">MSRA · Paper 1 · Exam conditions</div>' +
      '<h2 id="mkTitle">Professional Dilemmas mock exams</h2>' +
      '<p class="splash-lede">Each mock is a full paper: <strong>50 scenarios in 95 minutes</strong>, half ranking and half multiple choice, spread across professional integrity, coping with pressure, and empathy and sensitivity. You get no feedback until you finish. Then you see your marks by attribute and the full explanation for every scenario.</p>' +
      (paid ? "" : '<div class="mk-gate"><div><strong>Mock exams are part of a paid plan.</strong> Upgrade to sit all four full papers under exam conditions, with marks by attribute and a full review of every scenario. Topic Mode stays free.</div><a class="btn-primary" href="pricing.html">View pricing →</a></div>') +
      '<div class="mk-grid">' + cards + "</div>" +
      '<ul class="mk-rules">' +
      "<li>The clock starts when you press Start and keeps running if you close the page, just as the real paper would.</li>" +
      "<li>Answers save as you go. You can move between questions, flag them and change answers until time runs out.</li>" +
      "<li>Rank every option, or choose exactly three. A ranking with gaps, or fewer than three choices, scores 0.</li>" +
      "<li>Aim for about 1 minute 54 seconds a scenario, and keep a few minutes to revisit flagged questions.</li></ul>" +
      '<details class="model-note"><summary>How mocks are marked</summary><p>Mocks use the same transparent practice model as Topic Mode: in ranking questions each option earns up to 4 marks, losing one mark for each place it is away from the key (up to 20 per scenario), and in multiple-choice questions each keyed action you choose earns 4 marks (up to 12). This is Ossify\'s own educational model, not the official MSRA marking scheme, and real MSRA scores are scaled, so a percentage here is a guide rather than a predicted result.</p></details>' +
      hist +
      '<p class="splash-foot">Prefer to work through scenarios one at a time with instant explanations? <a href="sjt.html">Use Topic Mode</a>.</p></section>');
  }

  async function startMock(m, btn) {
    if (btn) { btn.disabled = true; btn.textContent = "Preparing your paper…"; }
    try {
      var r = await rpc("start_sjt_mock", { p_mock: m });
      if (r.data.mock !== m) announce("You already have " + mockName(r.data.mock) + " in progress, so it has been reopened.");
      enterExam(r.data, r.t0, r.t1, r.data.mock !== m);
    } catch (e) {
      if (btn) { btn.disabled = false; btn.textContent = "Start " + mockName(m); }
      if (/subscription_required/.test(e.message)) {
        notice("Mock exams are part of a paid plan", "Your account doesn't have an active subscription, so a new mock can't be started. Any results you already have stay available to review.",
          '<div class="sum-acts"><a class="btn-primary" href="pricing.html">View pricing</a><a class="btn-ghost" href="sjt-mock.html">Back to mock exams</a></div>');
        return;
      }
      notice("Couldn't start the mock", /mock_unavailable/.test(e.message) ? "This mock isn't available yet." : "Check your connection and try again. (" + e.message + ")",
        '<button class="btn-primary" type="button" onclick="location.reload()">Back to mock exams</button>');
    }
  }

  async function finishActiveFromOverview(id) {
    var local = readLocal(id);
    show('<section class="splash"><p class="splash-lede">Marking your paper…</p></section>');
    try {
      var r = await rpc("submit_sjt_mock", { p_attempt_id: id, p_answers: local ? local.answers : null, p_flags: local ? local.flags : [], p_reason: "finished" });
      clearLocal(id);
      R = r.data; showResults();
    } catch (e) { notice("Couldn't finish the mock", e.message, '<button class="btn-primary" type="button" onclick="location.reload()">Try again</button>'); }
  }

  // ── Exam ────────────────────────────────────────────────────────────────
  function enterExam(state, t0, t1, resumed) {
    syncClock(state.server_now, t0, t1);
    A = { id: state.id, mock: state.mock, questions: state.questions, total: state.total_items,
          deadlineMs: new Date(state.deadline_at).getTime(), durationMs: state.duration_seconds * 1000 };
    var local = readLocal(A.id), serverUpdated = new Date(state.updated_at).getTime();
    var src = local && local.savedAt >= serverUpdated - 2000 ? local : { answers: state.answers, flags: state.flags, idx: state.current_index };
    answers = sanitizeAnswers(src.answers);
    flags = {}; (src.flags || []).forEach(function (id) { if (byId(id)) flags[id] = true; });
    idx = Math.max(0, Math.min(A.questions.length - 1, Number(src.idx) || 0));
    phase = "exam";
    setChrome({ nav: true, clock: true, end: true, meta: true, save: true, progress: true, title: "Professional Dilemmas · " + mockName(A.mock) });
    $("navTitle").textContent = mockName(A.mock);
    $("navLegend").innerHTML = '<span class="lg lg-done"></span>Done <span class="lg lg-part"></span>Part <span class="lg lg-flag"></span>Flag';
    $("navFoot").innerHTML = '<button type="button" class="nav-finish" data-act="ask-finish">Finish mock</button>';
    window.addEventListener("beforeunload", beforeUnloadGuard);
    renderExam();
    startTimer();
    if (resumed) { announce("Mock resumed. The clock kept running while you were away."); queueSave(true); }
  }

  function byId(id) { for (var i = 0; i < A.questions.length; i++) if (A.questions[i].id === id) return A.questions[i]; return null; }
  function needed(q) { return q.format === "ranking" ? q.options.length : (q.selectCount || 3); }
  function sanitizeAnswers(obj) {
    var out = {};
    if (!obj || typeof obj !== "object") return out;
    A.questions.forEach(function (q) {
      var v = obj[q.id], ids = q.options.map(function (o) { return o.id; });
      if (!Array.isArray(v) || !v.length || v.length > needed(q)) return;
      if (v.some(function (x) { return ids.indexOf(x) < 0; }) || new Set(v).size !== v.length) return;
      out[q.id] = v.slice();
    });
    return out;
  }
  function state(q) { var a = answers[q.id]; return !a ? "todo" : a.length === needed(q) ? "done" : "part"; }
  function counts() {
    var c = { done: 0, part: 0, todo: 0 };
    A.questions.forEach(function (q) { c[state(q)]++; });
    return c;
  }

  function renderNav() {
    var list = phase === "review" ? R.questions : A.questions;
    $("qGrid").innerHTML = list.map(function (q, i) {
      var cls = "q-dot", label;
      if (phase === "review") {
        var res = R.results[i];
        var p = res.max ? res.marks / res.max : 0;
        cls += p >= 0.8 ? " s-hi" : p >= 0.5 ? " s-mid" : " s-lo";
        label = res.marks + " of " + res.max + " marks";
        if ((R.flags || []).indexOf(q.id) >= 0) { cls += " flagged"; label += ", flagged"; }
        if (i === rIdx) cls += " current";
      } else {
        var st = state(q);
        cls += st === "done" ? " done" : st === "part" ? " part" : "";
        label = st === "done" ? "answered" : st === "part" ? "partly answered" : "not answered";
        if (flags[q.id]) { cls += " flagged"; label += ", flagged"; }
        if (i === idx) cls += " current";
      }
      var cur = phase === "review" ? i === rIdx : i === idx;
      return '<button type="button" class="' + cls + '" data-i="' + i + '" aria-label="Question ' + (i + 1) + ", " + label + '"' + (cur ? ' aria-current="step"' : "") + ">" + (i + 1) + "</button>";
    }).join("");
    if (phase === "exam") updateMeta();
  }
  function updateMeta() {
    var c = counts();
    $("sessionMeta").textContent = c.done + " of " + A.total + " answered" + (c.part ? " · " + c.part + " incomplete" : "");
    $("progressBar").style.width = Math.round((c.done / A.total) * 100) + "%";
  }

  function statusText(q, draft) {
    if (q.format === "ranking") {
      var n = q.options.length;
      return draft.length === n ? "All " + n + " ranked · saved" : draft.length ? draft.length + " of " + n + " ranked · rank every option to score" : "Not answered yet";
    }
    var need = q.selectCount || 3;
    return draft.length === need ? need + " chosen · saved" : draft.length ? draft.length + " of " + need + " chosen · choose " + need + " to score" : "Not answered yet";
  }

  function renderExam() {
    renderNav();
    var q = A.questions[idx], draft = answers[q.id] || [], isRank = q.format === "ranking";
    var enter = q.id !== lastShownId; lastShownId = q.id;
    var html = '<article class="q-card' + (enter ? " enter" : "") + '" aria-labelledby="qTitle">' +
      '<div class="q-card-top"><span class="q-badge' + (isRank ? "" : " mc") + '">' + (isRank ? "Ranking" : "Multiple choice") + "</span>" +
      '<button type="button" class="flag-btn" data-act="flag" aria-pressed="' + !!flags[q.id] + '">⚑ ' + (flags[q.id] ? "Flagged" : "Flag for review") + "</button></div>" +
      '<div class="q-body"><div class="q-num" id="qTitle">Question ' + (idx + 1) + " of " + A.total + "</div>" +
      '<div class="stem">' + paras(q.stem) + "</div>" +
      '<div class="instr">' + esc(q.instruction) + "</div>" +
      (isRank ? UI.rankingControl(q, draft) : UI.mcControl(q, draft)) + "</div>" +
      '<div class="act"><span class="act-status' + (draft.length === needed(q) ? " ready" : "") + '">' + statusText(q, draft) + "</span>" +
      '<button type="button" class="btn-ghost" id="clearBtn"' + (draft.length ? "" : " disabled") + ">Clear answer</button></div></article>";
    var last = idx === A.questions.length - 1;
    html += '<nav class="bottom-nav" aria-label="Question navigation"><button type="button" class="btn-ghost" id="prevBtn"' + (idx === 0 ? " disabled" : "") + ">← Previous</button><span class=\"sp\"></span>" +
      (last ? '<button type="button" class="btn-primary" data-act="ask-finish">Finish mock</button>' : '<button type="button" class="btn-primary" id="nextBtn">Next →</button>') + "</nav>";
    $("mainArea").innerHTML = html;
  }

  function canAnswer() { return phase === "exam" && A && A.deadlineMs - serverNow() > 0; }

  function setAnswer(d) {
    if (!canAnswer()) { if (phase === "exam") onTimeUp(); return; }
    var q = A.questions[idx];
    if (d.length) answers[q.id] = d; else delete answers[q.id];
    writeLocal(); queueSave();
    renderExam();
  }

  function goTo(i) {
    var list = phase === "review" ? R.questions : A.questions;
    i = Math.max(0, Math.min(list.length - 1, i));
    if (phase === "review") { rIdx = i; renderReviewQ(); }
    else { idx = i; renderExam(); writeLocal(); queueSave(); }
    $("mainArea").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFlag() {
    if (!canAnswer()) return;
    var q = A.questions[idx];
    if (flags[q.id]) delete flags[q.id]; else flags[q.id] = true;
    writeLocal(); queueSave(); renderExam();
    announce(flags[q.id] ? "Question flagged." : "Flag removed.");
    var b = document.querySelector(".flag-btn"); if (b) b.focus();
  }

  // ── Timer ───────────────────────────────────────────────────────────────
  function startTimer() { stopTimer(); tick(); }
  function stopTimer() { if (timerHandle !== null) { clearTimeout(timerHandle); timerHandle = null; } }
  function tick() {
    timerHandle = null;
    if (phase !== "exam" || !A) return;
    var remMs = A.deadlineMs - serverNow();
    var remSec = Math.max(0, Math.ceil(remMs / 1000));
    renderClock(remSec);
    if (remMs <= 0) { onTimeUp(); return; }
    var untilNext = remMs - (remSec - 1) * 1000;
    timerHandle = setTimeout(tick, Math.max(20, Math.min(1000, untilNext + 5)));
  }
  function renderClock(sec) {
    $("clockDigits").textContent = fmtClock(sec);
    $("clock").setAttribute("aria-label", "Time remaining " + Math.floor(sec / 60) + " minutes " + (sec % 60) + " seconds");
    var st = sec <= 0 ? "over" : sec <= 60 ? "final" : sec <= 300 ? "urgent" : sec <= 600 ? "warn" : "normal";
    if (st !== lastClockState) {
      $("clock").dataset.state = st;
      var msg = { warn: "10 minutes remaining.", urgent: "5 minutes remaining.", final: "1 minute remaining." }[st];
      if (msg) announce(msg);
      lastClockState = st;
    }
  }
  document.addEventListener("visibilitychange", function () {
    if (phase !== "exam") return;
    if (document.visibilityState === "visible") startTimer(); else flushKeepalive();
  });
  function onTimeUp() {
    if (phase !== "exam") return;
    phase = "submitting";
    stopTimer(); renderClock(0);
    announce("Time is up. Your mock has ended.");
    submit("timeout");
  }

  // ── Persistence ─────────────────────────────────────────────────────────
  function flagList() { return Object.keys(flags); }
  function writeLocal() {
    if (!A) return;
    try { localStorage.setItem(LS_PREFIX + A.id, JSON.stringify({ answers: answers, flags: flagList(), idx: idx, savedAt: Date.now() })); } catch (e) {}
  }
  function readLocal(id) { try { var r = localStorage.getItem(LS_PREFIX + id); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function clearLocal(id) { try { localStorage.removeItem(LS_PREFIX + id); } catch (e) {} }
  function setSaveState(t) { $("saveState").textContent = t; }

  function queueSave(immediate) {
    if (phase !== "exam") return;
    clearTimeout(saveTimer);
    setSaveState("Saving…");
    saveTimer = setTimeout(serverSave, immediate ? 0 : SAVE_DEBOUNCE_MS);
  }
  async function serverSave() {
    if (phase !== "exam" || !A) return;
    if (saveInFlight) { queueSave(); return; }
    saveInFlight = true;
    try {
      var r = await rpc("save_sjt_mock_progress", { p_attempt_id: A.id, p_answers: answers, p_flags: flagList(), p_current_index: idx });
      syncClock(r.data && r.data.server_now, r.t0, r.t1);
      if (r.data && r.data.ok === false && phase === "exam") onTimeUp();
      else setSaveState("Saved");
    } catch (e) {
      setSaveState("Saved on this device · retrying");
      setTimeout(function () { queueSave(); }, 5000);
    } finally { saveInFlight = false; }
  }
  function flushKeepalive() {
    if (phase !== "exam" || !A || !accessToken) return;
    writeLocal();
    try {
      fetch(SUPABASE_URL + "/rest/v1/rpc/save_sjt_mock_progress", {
        method: "POST", keepalive: true,
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: "Bearer " + accessToken, "Content-Type": "application/json" },
        body: JSON.stringify({ p_attempt_id: A.id, p_answers: answers, p_flags: flagList(), p_current_index: idx })
      }).catch(function () {});
    } catch (e) {}
  }
  window.addEventListener("pagehide", flushKeepalive);
  function beforeUnloadGuard(e) { if (phase === "exam" || phase === "submitting") { e.preventDefault(); e.returnValue = ""; } }

  // ── Finishing ───────────────────────────────────────────────────────────
  function askFinish() {
    if (!canAnswer()) return;
    var c = counts(), nFlag = flagList().length, lines = [];
    if (c.todo) lines.push("<li><strong>" + plural(c.todo, "question") + "</strong> not answered</li>");
    if (c.part) lines.push("<li><strong>" + plural(c.part, "question") + "</strong> only partly answered</li>");
    if (nFlag) lines.push("<li><strong>" + nFlag + "</strong> flagged for review</li>");
    var left = Math.max(0, Math.ceil((A.deadlineMs - serverNow()) / 60000));
    $("finishText").innerHTML = (lines.length
      ? "<p>You still have:</p><ul class=\"mk-left\">" + lines.join("") + "</ul><p>Unanswered and incomplete questions score 0. You have about " + plural(left, "minute") + " left.</p>"
      : "<p>You've answered all " + A.total + " questions and have about " + plural(left, "minute") + " left. Once you finish, you can't change your answers.</p>");
    lastFocusBeforeModal = document.activeElement;
    $("finishModal").hidden = false;
    $("finishBack").focus();
  }
  function closeFinish() { $("finishModal").hidden = true; if (lastFocusBeforeModal && lastFocusBeforeModal.focus) lastFocusBeforeModal.focus(); }
  function finishNow() {
    $("finishModal").hidden = true;
    if (!canAnswer()) return;
    phase = "submitting"; stopTimer();
    submit("finished");
  }

  function submit(reason) {
    if (submitPromise) return submitPromise;
    clearTimeout(saveTimer); writeLocal();
    setChrome({ title: "Professional Dilemmas · " + mockName(A.mock) });
    show('<section class="splash"><div class="mk-loading" aria-busy="true"></div><p class="splash-lede" style="text-align:center">' + (reason === "timeout" ? "Time's up. Marking your paper…" : "Marking your paper…") + "</p></section>");
    var payload = { p_attempt_id: A.id, p_answers: answers, p_flags: flagList(), p_reason: reason };
    submitPromise = (async function () {
      for (var attempt = 0; ; attempt++) {
        try {
          var r = await rpc("submit_sjt_mock", payload);
          window.removeEventListener("beforeunload", beforeUnloadGuard);
          clearLocal(A.id);
          R = r.data;
          try { history.replaceState(null, "", "sjt-mock.html?review=" + encodeURIComponent(R.id)); } catch (e) {}
          showResults(reason === "timeout" ? "Time's up. Your paper has been marked with the answers you'd given." : null);
          return;
        } catch (e) {
          if (attempt >= 5) {
            submitPromise = null;
            notice("Your mock couldn't be submitted", "Your answers are saved on this device and on the server up to the last autosave. Check your connection and try again; reopening this page will also finish the marking.",
              '<button class="btn-primary" type="button" onclick="location.reload()">Try again</button>');
            return;
          }
          await new Promise(function (res) { setTimeout(res, 1000 * Math.pow(2, attempt)); });
        }
      }
    })();
    return submitPromise;
  }

  // ── Results & review ────────────────────────────────────────────────────
  async function openReview(id, toast) {
    setChrome({ title: "Professional Dilemmas · Mock results" });
    show('<section class="splash"><div class="mk-loading" aria-busy="true"><span class="sr-only">Loading your results…</span></div></section>');
    try { R = (await rpc("get_sjt_mock_review", { p_attempt_id: id })).data; showResults(toast); }
    catch (e) { notice("Couldn't open these results", "They may belong to another account, or the mock may still be in progress.", '<a class="btn-primary" href="sjt-mock.html">Go to mock exams</a>'); }
  }

  // The marks shown come from the server; the breakdown is rebuilt in the
  // browser with the same engine, using the key stored with the attempt.
  function resultFor(i) {
    var q = R.questions[i], res = R.results[i];
    var qq = Object.assign({}, q, { key: res.key || q.key });
    var resp = Array.isArray(res.response) ? res.response : [];
    if (SJT.validateResponse(qq, resp).ok) {
      var r = SJT.scoreResponse(qq, resp);
      if (r.marks !== res.marks) { r.marks = res.marks; }
      return { q: qq, r: r };
    }
    return { q: qq, r: { unscored: true, marks: 0, max: res.max, response: resp, key: qq.format === "ranking" ? qq.key.order : qq.key.correct,
      summary: resp.length ? (qq.format === "ranking" ? "Ranking left incomplete" : "Fewer than three options chosen") + ": 0 of " + res.max + " marks." : "Not answered: 0 of " + res.max + " marks." } };
  }

  function showResults(toast) {
    phase = "results"; stopTimer();
    setChrome({ title: "Professional Dilemmas · " + mockName(R.mock) + " results" });
    var byA = R.by_attribute || {};
    var attrs = ATTRS.map(function (k) {
      var a = byA[k];
      return '<div class="attr"><div class="attr-n">' + k + '</div><div class="attr-v">' + (a && a.max ? Math.round((a.marks / a.max) * 100) + "%" : "—") +
        '</div><div class="muted sm">' + (a ? a.marks + " of " + a.max + " marks · " + plural(a.items, "scenario") : "") + "</div></div>";
    }).join("");
    var fm = { ranking: { m: 0, x: 0, n: 0 }, multiple_choice: { m: 0, x: 0, n: 0 } };
    R.results.forEach(function (r) { var f = fm[r.format]; if (f) { f.m += r.marks; f.x += r.max; f.n++; } });
    var fmt = [["ranking", "Ranking"], ["multiple_choice", "Multiple choice"]].map(function (p) {
      var f = fm[p[0]];
      return '<div class="attr"><div class="attr-n">' + p[1] + '</div><div class="attr-v">' + (f.x ? Math.round((f.m / f.x) * 100) + "%" : "—") + '</div><div class="muted sm">' + f.m + " of " + f.x + " marks</div></div>";
    }).join("");
    var flagged = R.flags || [];
    var rows = R.questions.map(function (q, i) {
      var res = R.results[i], resp = Array.isArray(res.response) ? res.response : [];
      var complete = resp.length === (q.format === "ranking" ? q.options.length : (q.selectCount || 3));
      var pill = complete ? UI.marksPill(res.marks, res.max) : '<span class="pill na">' + (resp.length ? "incomplete" : "not answered") + " · 0/" + res.max + "</span>";
      return "<tr><td>" + (i + 1) + (flagged.indexOf(q.id) >= 0 ? ' <span class="flag-mk" title="Flagged">⚑</span>' : "") + "</td><td>" + esc(q.title) +
        '<div class="muted sm">' + esc(q.attribute) + " · " + (q.format === "ranking" ? "Ranking" : "Multiple choice") + "</div></td>" +
        '<td class="r">' + pill + '</td><td class="r"><button type="button" class="link-btn" data-review="' + i + '">Review →</button></td></tr>';
    }).join("");
    var timeLine = R.end_reason === "timeout" ? "Time ran out at 95 minutes." : "Finished in " + fmtDuration(R.time_taken_seconds) + " of the 95 minutes.";
    var unanswered = R.total_items - R.answered_count;
    show((toast ? '<div class="resume-banner"><div class="rb-info"><strong>' + esc(toast) + "</strong></div></div>" : "") +
      '<section class="summary" aria-labelledby="sumTitle"><h2 class="sr-only" id="sumTitle">' + esc(mockName(R.mock)) + " results</h2>" +
      '<div class="sum-top"><div class="sum-score">' + Math.round(Number(R.percentage)) + "<small>%</small></div>" +
      '<div class="sum-lede">You scored <strong>' + R.marks + " of " + R.max_marks + " marks</strong> on " + esc(mockName(R.mock)) + (unanswered ? ", with " + plural(unanswered, "scenario") + " unanswered or incomplete" : "") + ". " + timeLine +
      '<span class="note">' + esc(SJT.MODEL_NAME) + ". This shows how closely your judgement matches Ossify's key. It is not an official MSRA result, and because real scores are scaled, a percentage here does not translate into a band.</span></div></div>" +
      '<div class="attr-grid">' + attrs + "</div>" +
      '<div class="attr-grid two">' + fmt + "</div>" +
      '<table class="sum-table"><thead><tr><th>#</th><th>Scenario</th><th class="r">Marks</th><th class="r"></th></tr></thead><tbody>' + rows + "</tbody></table>" +
      '<div class="sum-acts"><button type="button" class="btn-primary" data-review="0">Review answers</button><a class="btn-ghost" href="sjt-mock.html">Back to mock exams</a></div></section>');
    $("navPanel").hidden = true;
  }

  function renderReviewQ() {
    phase = "review";
    setChrome({ nav: true, title: "Professional Dilemmas · " + mockName(R.mock) + " review" });
    $("navTitle").textContent = mockName(R.mock) + " review";
    $("navLegend").innerHTML = '<span class="lg lg-hi"></span>Strong <span class="lg lg-lo"></span>Weak';
    $("navFoot").innerHTML = '<button type="button" class="nav-finish ghost" data-act="results">Back to results</button>';
    renderNav();
    var x = resultFor(rIdx), q = x.q, r = x.r, isRank = q.format === "ranking";
    var html = '<article class="q-card enter" aria-labelledby="qTitle">' +
      '<div class="q-card-top"><span class="q-badge' + (isRank ? "" : " mc") + '">' + (isRank ? "Ranking" : "Multiple choice") + "</span>" +
      '<span class="q-attr">' + esc(q.attribute) + '</span><span class="q-setting">' + esc(q.setting) + "</span></div>" +
      '<div class="q-body"><div class="q-num" id="qTitle">Question ' + (rIdx + 1) + " of " + R.questions.length + " · " + esc(q.title) + "</div>" +
      '<div class="stem">' + paras(q.stem) + "</div>" +
      '<div class="instr">' + esc(q.instruction) + "</div>" +
      (r.response.length ? UI.lockedAnswer(q, r) : '<p class="muted">You didn\'t answer this question.</p>') + "</div>" +
      UI.reviewHtml(q, r) + "</article>";
    var last = rIdx === R.questions.length - 1;
    html += '<nav class="bottom-nav" aria-label="Question navigation"><button type="button" class="btn-ghost" id="prevBtn"' + (rIdx === 0 ? " disabled" : "") + ">← Previous</button><span class=\"sp\"></span>" +
      '<button type="button" class="btn-ghost" data-act="results">Results</button>' + (last ? "" : '<button type="button" class="btn-primary" id="nextBtn">Next →</button>') + "</nav>";
    $("mainArea").innerHTML = html;
  }

  // ── Events ──────────────────────────────────────────────────────────────
  function onMainClick(e) {
    var t = e.target.closest("button");
    if (!t || t.disabled) return;
    var act = t.dataset.act;
    if (act === "start") return startMock(t.dataset.mock, t);
    if (act === "resume") return (async function () { try { var r = await rpc("get_active_sjt_mock"); if (r.data && r.data.status === "in_progress") enterExam(r.data, r.t0, r.t1, true); else location.reload(); } catch (err) { location.reload(); } })();
    if (act === "finish-active") return finishActiveFromOverview(t.dataset.id);
    if (act === "ask-finish") return askFinish();
    if (act === "results") return showResults();
    if (act === "flag") return toggleFlag();
    if (t.dataset.review != null && t.dataset.review !== "") { rIdx = +t.dataset.review; renderReviewQ(); $("mainArea").focus({ preventScroll: true }); window.scrollTo({ top: 0 }); return; }
    if (t.id === "prevBtn") return goTo((phase === "review" ? rIdx : idx) - 1);
    if (t.id === "nextBtn") return goTo((phase === "review" ? rIdx : idx) + 1);
    if (t.dataset.detail) {
      var k = t.dataset.detail, d = $("d-" + k), b = $("b-" + k), open = d.hidden;
      d.hidden = !open; b.hidden = open;
      t.textContent = open ? "Hide explanation" : "Detailed explanation";
      t.setAttribute("aria-expanded", String(open));
      return;
    }
    if (phase !== "exam") return;
    var q = A.questions[idx], draft = (answers[q.id] || []).slice();
    if (t.dataset.place) {
      draft.push(t.dataset.place); setAnswer(draft);
      announce("Option " + t.dataset.place + " placed at rank " + draft.length + ".");
      var nxt = document.querySelector(".pool .opt"); if (nxt) nxt.focus();
    } else if (t.dataset.move) {
      var i = +t.dataset.slot, j = i + (+t.dataset.move);
      if (j < 0 || j >= draft.length) return;
      var tmp = draft[i]; draft[i] = draft[j]; draft[j] = tmp; setAnswer(draft);
      announce("Option " + tmp + " moved to rank " + (j + 1) + ".");
      var mv = document.querySelector('.ic-btn[data-slot="' + j + '"][data-move="' + t.dataset.move + '"]') || document.querySelector('.slot[data-slot="' + j + '"]');
      if (mv) mv.focus();
    } else if (t.dataset.remove != null && t.dataset.remove !== "") {
      var removed = draft.splice(+t.dataset.remove, 1)[0]; setAnswer(draft);
      announce("Option " + removed + " removed from the ranking.");
    } else if (t.dataset.toggle) {
      var id = t.dataset.toggle, at = draft.indexOf(id), need = q.selectCount || 3;
      if (at >= 0) draft.splice(at, 1);
      else if (draft.length >= need) { announce("You've already chosen " + need + ". Deselect one to change your answer."); return; }
      else draft.push(id);
      draft.sort(); setAnswer(draft);
      var again = document.querySelector('[data-toggle="' + id + '"]'); if (again) again.focus();
    } else if (t.id === "clearBtn") { setAnswer([]); announce("Answer cleared."); }
  }

  function onKey(e) {
    if (!$("finishModal").hidden) { if (e.key === "Escape") closeFinish(); return; }
    if (phase !== "exam" && phase !== "review") return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    if (phase === "exam" && e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      var slot = e.target.closest && e.target.closest(".slot.filled");
      if (slot) { e.preventDefault(); var btn = slot.querySelector('[data-move="' + (e.key === "ArrowUp" ? -1 : 1) + '"]'); if (btn && !btn.disabled) btn.click(); }
      return;
    }
    if (phase === "exam" && e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey && /^f$/i.test(e.key)) { e.preventDefault(); toggleFlag(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (e.key === "ArrowRight") { e.preventDefault(); goTo((phase === "review" ? rIdx : idx) + 1); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo((phase === "review" ? rIdx : idx) - 1); return; }
    if (phase !== "exam") return;
    if (/^[a-h]$/i.test(e.key)) {
      var L = e.key.toUpperCase();
      var el = document.querySelector('[data-place="' + L + '"]') || document.querySelector('[data-toggle="' + L + '"]');
      if (el) { e.preventDefault(); el.click(); }
    }
  }

  window.OSSIFY_LETTER_KEYS = function () { return phase === "exam"; };
  window.OSSIFY_PAGE_SHORTCUTS = [["A", "Place or choose an option (A–H)"], ["←", "Previous question"], ["→", "Next question"], ["Shift F", "Flag question for review"], ["Alt ↑", "Move a ranked option up or down (Alt ↑ / Alt ↓)"]];
  window.ossifySignOut = function () { if (sb) sb.auth.signOut().then(function () { location.href = "login.html"; }); else location.href = "login.html"; };

  function wire() {
    $("mainArea").addEventListener("click", onMainClick);
    $("navPanel").addEventListener("click", function (e) {
      var d = e.target.closest(".q-dot"); if (d) { goTo(+d.dataset.i); return; }
      var b = e.target.closest("button[data-act]"); if (b) onMainClick(e);
    });
    $("endBtn").addEventListener("click", askFinish);
    $("finishGo").addEventListener("click", finishNow);
    $("finishBack").addEventListener("click", closeFinish);
    $("finishModal").addEventListener("click", function (e) { if (e.target === $("finishModal")) closeFinish(); });
    document.addEventListener("keydown", onKey);
    init().catch(function (e) { notice("Something went wrong", e.message || String(e), '<button class="btn-primary" type="button" onclick="location.reload()">Reload</button>'); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire); else wire();
})();
