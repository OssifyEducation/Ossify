/* Ossify — Weekly Challenge pop-ups on the dashboard.
 *
 *  • "new"     : this week's challenge is live ("new dawn": a sun rises, rays turn,
 *                the WEEK badge stamps on, rising chime). Once per challenge, and only
 *                if the user hasn't started it yet.
 *  • "results" : from Tuesday 00:01 (results day): the champion, your score and rank,
 *                and a link to the answers. Shown before "new" if both are waiting.
 *
 * Server contract (supabase/migrations/20261019_weekly_challenge_schedule.sql):
 *   get_weekly_alert()  -> { results: {...} | null, new: {...} | null, server_now }
 *   ack_weekly_alert(p_kind 'new'|'results', p_week date)
 *
 * Usage on the dashboard, after sign-in:   OssifyWeeklyAlert.start(sb)
 * It waits while a Head-to-Head alert is on screen.
 */
(function () {
  "use strict";

  var sb = null, open = false, offset = 0, SOUND_KEY = "ossify_duel_sound";   // same mute setting as the duel alerts

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function soundOn() { try { return localStorage.getItem(SOUND_KEY) !== "off"; } catch (e) { return true; } }
  function daysLeft(iso) {
    var ms = new Date(iso).getTime() - (Date.now() + offset);
    if (!(ms > 0)) return null;
    var d = Math.ceil(ms / 86400000);
    if (d > 1) return { n: d, unit: "days" };
    var h = Math.max(1, Math.ceil(ms / 3600000));
    return h >= 24 ? { n: 1, unit: "day" } : { n: h, unit: h === 1 ? "hour" : "hours" };
  }
  function champName(c) {
    if (!c) return "";
    if (c.full_name) return /^dr\.?\s/i.test(c.full_name) ? c.full_name : "Dr " + c.full_name;
    return c.username ? "@" + c.username : "";
  }

  var CSS = "" +
    ".wa-ov{position:fixed;inset:0;z-index:9998;display:flex;align-items:center;justify-content:center;padding:16px;overflow:hidden;" +
      "background:radial-gradient(circle at 50% 38%,rgba(120,87,189,.55),rgba(20,10,40,.9) 70%);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);" +
      "animation:waIn .35s ease both;font-family:var(--font-sans,'Inter',system-ui,sans-serif);}" +
    ".wa-ov.wa-out{animation:waOut .25s ease forwards;}" +
    ".wa-card{position:relative;width:100%;max-width:400px;max-height:calc(100vh - 32px);overflow:hidden;border-radius:22px;padding:8px 26px 24px;text-align:center;color:#fff;" +
      "background:linear-gradient(160deg,#4b2a91,#2a1559 60%,#1b0d3d);border:1px solid rgba(251,191,36,.4);" +
      "box-shadow:0 30px 80px rgba(10,0,30,.55),0 0 0 6px rgba(251,191,36,.1);animation:waPop .55s cubic-bezier(.2,1.3,.4,1) both;}" +
    ".wa-card>*{position:relative;}" +
    ".wa-stage{width:220px;height:180px;margin:4px auto 0;position:relative;}" +
    ".wa-stage>*{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}" +
    ".wa-glow{inset:20px 40px!important;width:auto!important;height:auto!important;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.5),rgba(244,114,182,.2) 50%,transparent 70%);opacity:0;animation:waIn .8s ease .8s forwards,waPulse 2.6s ease-in-out 1.6s infinite;}" +
    ".wa-sun{transform-box:fill-box;transform-origin:center;animation:waSun 1.2s cubic-bezier(.2,.8,.3,1) .2s both;}" +
    ".wa-rays{transform-origin:0 22px;opacity:0;animation:waIn .6s ease .9s forwards,waSpin 22s linear .9s infinite;}" +
    ".wa-hz{stroke-dasharray:220;stroke-dashoffset:220;animation:waDraw .9s ease .15s forwards;}" +
    ".wa-cup{transform-box:fill-box;transform-origin:center bottom;animation:waSun 1.1s cubic-bezier(.2,1.2,.3,1) .2s both;}" +
    ".wa-facts.wa-me div:first-child{border-color:rgba(251,191,36,.55);background:rgba(251,191,36,.12);}" +
    ".wa-wk{transform-box:fill-box;transform-origin:center;opacity:0;animation:waStamp .5s cubic-bezier(.2,1.6,.4,1) 1s forwards;}" +
    ".wa-tag{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:4px 11px;border-radius:20px;margin-bottom:10px;color:#fde68a;background:rgba(251,191,36,.14);border:1px solid rgba(251,191,36,.4);opacity:0;animation:waUp .5s ease 1.15s forwards;}" +
    ".wa-title{font-family:var(--font-serif,'Fraunces',Georgia,serif);font-size:31px;font-weight:600;line-height:1.12;letter-spacing:-.5px;margin:0 0 10px;" +
      "background:linear-gradient(90deg,#fff,#fde68a 30%,#fff 50%,#f9a8d4 70%,#fff);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;" +
      "opacity:0;animation:waUp .5s ease 1.25s forwards,waSheen 3.2s linear 1.9s infinite;}" +
    ".wa-body{font-size:14.5px;line-height:1.6;color:#e9e2ff;margin:0 0 12px;opacity:0;animation:waUp .5s ease 1.35s forwards;}" +
    ".wa-facts{display:flex;justify-content:center;gap:8px;margin:0 0 12px;opacity:0;animation:waUp .5s ease 1.45s forwards;}" +
    ".wa-facts div{flex:1;max-width:104px;padding:8px 6px;border-radius:12px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);font-size:11.5px;color:#cbbcf5;}" +
    ".wa-facts b{display:block;font-family:var(--font-serif,'Fraunces',Georgia,serif);font-size:21px;font-weight:600;color:#fff;line-height:1.15;}" +
    ".wa-champ{font-size:12.5px;color:#cbbcf5;margin:0 0 16px;opacity:0;animation:waUp .5s ease 1.55s forwards;}" +
    ".wa-champ strong{color:#fde68a;}" +
    ".wa-act{display:flex;flex-direction:column;gap:9px;opacity:0;animation:waUp .5s ease 1.65s forwards;}" +
    ".wa-go{display:block;border:none;border-radius:12px;padding:13px 18px;font:600 15px var(--font-sans,'Inter',system-ui,sans-serif);color:#2a1200;text-decoration:none;" +
      "background:linear-gradient(180deg,#fde68a,#f59e0b);box-shadow:0 8px 24px rgba(245,158,11,.4);cursor:pointer;}" +
    ".wa-later{background:transparent;border:1px solid rgba(255,255,255,.22);color:#e9e2ff;border-radius:12px;padding:10px 18px;font:500 13.5px var(--font-sans,'Inter',system-ui,sans-serif);cursor:pointer;}" +
    ".wa-go:focus-visible,.wa-later:focus-visible{outline:3px solid #c4b5fd;outline-offset:2px;}" +
    ".wa-mote{position:absolute;bottom:-10px;width:4px;height:4px;border-radius:50%;background:#fde68a;box-shadow:0 0 6px #fbbf24;opacity:0;animation:waRise linear infinite;}" +
    "@keyframes waIn{from{opacity:0}to{opacity:1}}@keyframes waOut{to{opacity:0}}" +
    "@keyframes waPop{from{opacity:0;transform:scale(.7) translateY(30px)}to{opacity:1;transform:none}}" +
    "@keyframes waUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}" +
    "@keyframes waSheen{to{background-position:-250% 0}}@keyframes waSpin{to{transform:rotate(360deg)}}" +
    "@keyframes waPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}" +
    "@keyframes waRise{0%{opacity:0;transform:translate(0,0)}15%{opacity:.9}100%{opacity:0;transform:translate(var(--dx),-110vh)}}" +
    "@keyframes waSun{from{transform:translateY(70px) scale(.85)}to{transform:none}}" +
    "@keyframes waDraw{to{stroke-dashoffset:0}}" +
    "@keyframes waStamp{0%{opacity:0;transform:scale(2.2)}100%{opacity:1;transform:none}}" +
    "@media (prefers-reduced-motion:reduce){.wa-ov,.wa-ov *{animation-duration:.01ms!important;animation-iteration-count:1!important;animation-delay:0s!important;}.wa-mote{display:none}}";

  function art(n) {
    var rays = "";
    for (var i = 0; i < 16; i++) rays += '<rect x="-3" y="-78" width="6" height="40" rx="3" fill="rgba(251,191,36,.35)" transform="translate(0,22) rotate(' + (i * 22.5) + ')"/>';
    var label = n ? "WEEK " + n : "THIS WEEK";
    var w = Math.max(68, label.length * 8 + 14);
    return '<div class="wa-glow"></div><svg viewBox="-90 -75 180 150" aria-hidden="true"><defs>' +
      '<radialGradient id="waSg"><stop offset="0" stop-color="#fff7d6"/><stop offset=".55" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></radialGradient>' +
      '<clipPath id="waHz"><rect x="-120" y="-120" width="240" height="158"/></clipPath>' +
      '<linearGradient id="waHg" x1="0" x2="1"><stop offset="0" stop-color="#fbbf24" stop-opacity="0"/><stop offset=".5" stop-color="#fde68a"/><stop offset="1" stop-color="#fbbf24" stop-opacity="0"/></linearGradient></defs>' +
      '<g clip-path="url(#waHz)"><g class="wa-rays">' + rays + '</g><circle class="wa-sun" cx="0" cy="22" r="40" fill="url(#waSg)"/></g>' +
      '<line class="wa-hz" x1="-110" y1="38" x2="110" y2="38" stroke="url(#waHg)" stroke-width="3" stroke-linecap="round"/>' +
      '<g class="wa-wk"><rect x="' + (-w / 2) + '" y="44" width="' + w + '" height="24" rx="12" fill="#3d1f7a" stroke="#fde68a" stroke-width="2"/>' +
      '<text x="0" y="60.5" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="10" font-weight="700" letter-spacing="1.6" fill="#fde68a">' + esc(label) + "</text></g></svg>";
  }

  function cupArt(label) {
    var rays = "";
    for (var i = 0; i < 16; i++) rays += '<rect x="-3" y="-80" width="6" height="40" rx="3" fill="rgba(251,191,36,.3)" transform="translate(0,4) rotate(' + (i * 22.5) + ')"/>';
    var w = Math.max(68, label.length * 8 + 14);
    return '<div class="wa-glow"></div><svg viewBox="-90 -75 180 150" aria-hidden="true"><defs>' +
      '<linearGradient id="waCg" x1="0" x2="1"><stop offset="0" stop-color="#f59e0b"/><stop offset=".45" stop-color="#fde68a"/><stop offset="1" stop-color="#d97706"/></linearGradient></defs>' +
      '<g class="wa-rays" style="transform-origin:0 4px">' + rays + '</g>' +
      '<g class="wa-cup">' +
        '<path d="M-26 -38 h52 v14 a26 26 0 0 1 -52 0 z" fill="url(#waCg)"/>' +
        '<path d="M-26 -32 h-10 a10 10 0 0 0 10 18 M26 -32 h10 a10 10 0 0 1 -10 18" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>' +
        '<rect x="-5" y="1" width="10" height="16" fill="#f59e0b"/>' +
        '<rect x="-20" y="16" width="40" height="9" rx="3" fill="url(#waCg)"/>' +
        '<path d="M-14 -33 q4 18 12 24" fill="none" stroke="#fff7d6" stroke-width="3" stroke-linecap="round" opacity=".7"/>' +
      '</g>' +
      '<g class="wa-wk"><rect x="' + (-w / 2) + '" y="38" width="' + w + '" height="24" rx="12" fill="#3d1f7a" stroke="#fde68a" stroke-width="2"/>' +
      '<text x="0" y="54.5" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="10" font-weight="700" letter-spacing="1.6" fill="#fde68a">' + esc(label) + "</text></g></svg>";
  }
  function mmss(sec) { sec = Math.max(0, Math.round(sec || 0)); var m = Math.floor(sec / 60), x = sec % 60; return m + ":" + (x < 10 ? "0" : "") + x; }

  // ── Rising chime, synthesised (no audio file). Silent if the browser blocks sound. ──
  function chime() {
    if (!soundOn()) return;
    var C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    var A; try { A = new C(); } catch (e) { return; }
    function go() {
      var L = A.sampleRate * 3, ir = A.createBuffer(2, L, A.sampleRate);
      for (var ch = 0; ch < 2; ch++) { var d = ir.getChannelData(ch); for (var i = 0; i < L; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / L, 2.6); }
      var rev = A.createConvolver(); rev.buffer = ir; var rg = A.createGain(); rg.gain.value = 0.4; rev.connect(rg); rg.connect(A.destination);
      function tone(f, t, dur, type, g, lp, wet, att) {
        var o = A.createOscillator(), e = A.createGain(), fl = A.createBiquadFilter();
        o.type = type; o.frequency.value = f; fl.type = "lowpass"; fl.frequency.value = lp;
        e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(g, t + (att || 0.02));
        e.gain.setValueAtTime(g, t + Math.max(dur - 0.15, 0.03)); e.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.4);
        o.connect(fl); fl.connect(e); e.connect(A.destination);
        if (wet) { var w = A.createGain(); w.gain.value = wet; e.connect(w); w.connect(rev); }
        o.start(t); o.stop(t + dur + 0.6);
      }
      var t = A.currentTime + 0.05;
      var n = Math.floor(A.sampleRate * 0.95), b = A.createBuffer(1, n, A.sampleRate), dd = b.getChannelData(0);
      for (var k = 0; k < n; k++) dd[k] = Math.random() * 2 - 1;
      var s = A.createBufferSource(), bp = A.createBiquadFilter(), sg = A.createGain();
      s.buffer = b; bp.type = "bandpass"; bp.Q.value = 1.2;
      bp.frequency.setValueAtTime(400, t + 0.05); bp.frequency.exponentialRampToValueAtTime(5000, t + 1);
      sg.gain.setValueAtTime(0.0001, t + 0.05); sg.gain.exponentialRampToValueAtTime(0.12, t + 0.9); sg.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      s.connect(bp); bp.connect(sg); sg.connect(A.destination); s.start(t + 0.05);
      [[261.6, 0], [329.6, 0.11], [392, 0.22], [523.3, 0.33], [659.3, 0.44], [784, 0.55]].forEach(function (x) { tone(x[0], t + 0.2 + x[1], 0.25, "triangle", 0.07, 4000, 0.6, 0.01); });
      [261.6, 329.6, 392, 523.3].forEach(function (f) { tone(f, t + 1, 1.8, "sawtooth", 0.03, 1800, 0.7, 0.25); tone(f * 1.004, t + 1, 1.8, "sawtooth", 0.02, 1800, 0.7, 0.25); });
      tone(130.8, t + 1, 2, "sine", 0.14, 500, 0.4, 0.1);
      [1046.5, 1318.5, 1568, 2093].forEach(function (f, i) { [1, 2.76, 5.4].forEach(function (m, j) { tone(f * m, t + 1.05 + i * 0.09, 0.05, "sine", 0.05 / (j + 1), 12000, 0.9, 0.003); }); });
    }
    if (A.state === "running") go();
    else A.resume().then(function () { if (A.state === "running") go(); }, function () {});
  }

  function motesHtml() {
    var m = "";
    for (var i = 0; i < 22; i++) m += '<i class="wa-mote" style="left:' + (Math.random() * 100).toFixed(1) + "%;--dx:" + Math.round(Math.random() * 60 - 30) + "px;animation-duration:" + (4 + Math.random() * 4).toFixed(2) + "s;animation-delay:" + (0.8 + Math.random() * 3).toFixed(2) + 's"></i>';
    return m;
  }

  function newHtml(w) {
    var left = daysLeft(w.closes_at), champ = champName(w.last_champion);
    var facts = '<div><b>' + (w.total || 10) + "</b>questions</div>" +
      (w.specialties > 1 ? "<div><b>" + w.specialties + "</b>specialties</div>" : "") +
      (left ? "<div><b>" + left.n + " " + left.unit + "</b>left</div>" : "");
    return {
      art: art(w.number),
      title: "This week’s challenge is live",
      body: '<p class="wa-body">' + (w.total || 10) + " fresh questions from across the MSRA. Everyone gets the same set, so see how you measure up.</p>" +
        '<div class="wa-facts">' + facts + "</div>" +
        (champ ? '<p class="wa-champ">Last week’s champion: <strong>' + esc(champ) + "</strong> (" + w.last_champion.score + "/" + w.last_champion.total + ")</p>"
               : '<p class="wa-champ">Top the board to become this week’s champion.</p>'),
      go: "Take the challenge →", href: "weekly.html"
    };
  }

  function resultsHtml(w) {
    var my = w.my, ch = w.champion, champ = champName(ch), won = my && my.rank === 1;
    var title, body, label;
    if (won) {
      title = "You’re this week’s champion";
      label = "CHAMPION";
      body = '<p class="wa-body">You topped Challenge #' + w.number + " with " + my.score + "/" + my.total + " in " + mmss(my.time_taken) + ". The Weekly Champion badge is yours.</p>";
    } else if (my) {
      title = "The results are in";
      label = "WEEK " + w.number;
      body = '<p class="wa-body">You finished #' + my.rank + " of " + w.entrants + " in Challenge #" + w.number + ". The answers and explanations are now open.</p>";
    } else {
      title = "The results are in";
      label = "WEEK " + w.number;
      body = '<p class="wa-body">Challenge #' + w.number + " has closed. See the answers and explanations, then take on the next one.</p>";
    }
    var facts = my
      ? '<div class="wa-facts wa-me"><div><b>' + my.score + "/" + my.total + "</b>your score</div><div><b>#" + my.rank + "</b>your rank</div><div><b>" + w.entrants + "</b>doctors</div></div>"
      : '<div class="wa-facts">' + (ch ? "<div><b>" + ch.score + "/" + ch.total + "</b>winning score</div>" : "") + "<div><b>" + w.entrants + "</b>doctors</div></div>";
    var champLine = "";
    if (!won && champ) champLine = '<p class="wa-champ">Champion: <strong>' + esc(champ) + "</strong> (" + ch.score + "/" + ch.total + ", " + mmss(ch.time_taken) + ")</p>";
    else if (w.next_opens_at) {
      var d = new Date(w.next_opens_at).toLocaleDateString("en-GB", { timeZone: "Europe/London", weekday: "long" });
      champLine = '<p class="wa-champ">The next challenge opens ' + esc(d) + " at 00:01.</p>";
    }
    return { art: cupArt(label), title: title, body: body + facts + champLine,
             go: "Review the answers →", href: "weekly.html?review=" + w.number };
  }

  function show(kind, w, after) {
    if (open) return;
    open = true;
    if (!document.getElementById("wa-css")) { var st = document.createElement("style"); st.id = "wa-css"; st.textContent = CSS; document.head.appendChild(st); }
    var v = kind === "results" ? resultsHtml(w) : newHtml(w);
    var ov = document.createElement("div");
    ov.className = "wa-ov";
    ov.setAttribute("data-kind", kind);
    ov.innerHTML = motesHtml() +
      '<div class="wa-card" role="alertdialog" aria-modal="true" aria-labelledby="waTitle" aria-describedby="waBody">' +
        '<div class="wa-stage">' + v.art + "</div>" +
        '<div class="wa-tag">Weekly Challenge</div>' +
        '<h2 class="wa-title" id="waTitle">' + v.title + "</h2>" +
        '<div id="waBody">' + v.body + "</div>" +
        '<div class="wa-act"><a class="wa-go" href="' + v.href + '" data-wa="go">' + v.go + "</a>" +
        '<button class="wa-later" type="button" data-wa="later">' + (after ? "Next" : "Later") + "</button></div>" +
      "</div>";
    document.body.appendChild(ov);
    chime();
    function done(go) {
      var p = sb ? sb.rpc("ack_weekly_alert", { p_kind: kind, p_week: w.week_start }).then(function () {}, function () {}) : Promise.resolve();
      ov.classList.add("wa-out");
      setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); open = false; if (!go && after) setTimeout(after, 250); }, 260);
      p.then(function () { if (go) location.href = v.href; });
    }
    ov.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-wa]");
      if (!a) return;
      e.preventDefault();
      done(a.getAttribute("data-wa") === "go");
    });
    ov.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); done(false); return; }
      if (e.key === "Tab") {
        var f = ov.querySelectorAll("a,button"), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    setTimeout(function () { var g = ov.querySelector(".wa-go"); if (g) g.focus({ preventScroll: true }); }, 1700);
  }

  // Wait until no other Ossify pop-up is open (Head-to-Head alerts take priority).
  function whenClear(fn, tries) {
    if (!document.querySelector(".dz-overlay,.dr-ov")) return fn();
    if ((tries || 0) > 120) return;
    setTimeout(function () { whenClear(fn, (tries || 0) + 1); }, 1000);
  }

  function start(client) {
    if (!client || sb) return;
    sb = client;
    setTimeout(function () {
      sb.rpc("get_weekly_alert").then(function (r) {
        var a = r && r.data;
        if (!a) return;
        if (a.server_now) { var t = Date.parse(a.server_now); if (!isNaN(t)) offset = t - Date.now(); }
        var showNew = a["new"] ? function () { whenClear(function () { show("new", a["new"]); }); } : null;
        if (a.results) whenClear(function () { show("results", a.results, showNew); });
        else if (showNew) showNew();
      }, function () {});
    }, 1500);   // let the Head-to-Head check go first
  }

  // ── Dashboard strip: this week's status / results (always visible, unlike the pop-ups) ──
  var STRIP_CSS = "" +
    ".wks{display:flex;align-items:center;gap:14px;background:var(--lav-card,#fff);border:0.5px solid var(--lav-border,#e5dcf5);border-left:3px solid #f59e0b;border-radius:14px;padding:13px 16px;margin-bottom:14px;}" +
    ".wks-ico{width:36px;height:36px;border-radius:10px;background:linear-gradient(160deg,#fde68a,#f59e0b);display:flex;align-items:center;justify-content:center;flex-shrink:0;}" +
    ".wks-ico svg{width:18px;height:18px;fill:none;stroke:#3d1f7a;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}" +
    ".wks-txt{flex:1;min-width:0;}" +
    ".wks-t{font-size:13.5px;font-weight:600;color:var(--pu-dark,#3d1f7a);display:flex;align-items:center;gap:7px;flex-wrap:wrap;}" +
    ".wks-live{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#166534;background:#dcfce7;border-radius:10px;padding:2px 7px;}" +
    ".wks-s{font-size:12.5px;color:var(--moss,#6f6395);line-height:1.5;margin-top:2px;}" +
    ".wks-s strong{color:var(--pu-dark,#3d1f7a);}" +
    ".wks-btn{background:var(--pu-mid,#7857bd);color:#fff;border-radius:9px;padding:8px 14px;font-size:12.5px;font-weight:600;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:background .15s;}" +
    ".wks-btn:hover{background:var(--pu-dark,#3d1f7a);}" +
    "html[data-theme=dark] .wks-live{background:rgba(74,222,128,.15);color:#86efac;}" +
    "html[data-theme=dark] .wks-s strong,html[data-theme=dark] .wks-t{color:#ede9fe;}" +
    "@media (max-width:600px){.wks{flex-wrap:wrap;}.wks-btn{width:100%;text-align:center;}}";
  var TROPHY = '<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';
  function ukDay(iso) { return new Date(iso).toLocaleDateString("en-GB", { timeZone: "Europe/London", weekday: "long" }); }

  function strip(client, el) {
    if (!client || !el) return;
    client.rpc("get_weekly_state").then(function (r) {
      var s = r && r.data;
      if (!s || !el.isConnected) return;
      var cur = s.current, last = s.last, now = s.server_now ? Date.parse(s.server_now) : Date.now();
      var t, sub, btn, href, live = false;
      if (cur) {
        live = true;
        if (cur.my) {
          t = "Weekly Challenge #" + cur.number;
          sub = "You scored <strong>" + cur.my.score + "/" + cur.my.total + "</strong> and you’re <strong>#" + cur.my.rank + "</strong> of " + cur.entrants + " so far. Answers unlock " + ukDay(cur.closes_at) + " at 00:01.";
          btn = "See the board"; href = "weekly.html";
        } else {
          t = "Weekly Challenge #" + cur.number;
          sub = cur.total + " questions, the same for everyone. " + (cur.entrants ? cur.entrants + " doctor" + (cur.entrants === 1 ? " has" : "s have") + " played so far. " : "") + "Closes " + ukDay(cur.closes_at) + " at 00:01.";
          btn = cur.in_progress ? "Carry on" : "Take the challenge"; href = "weekly.html";
        }
      } else if (last && now - Date.parse(last.closes_at) < 8 * 864e5) {
        var ch = last.champion, my = last.my;
        t = "Challenge #" + last.number + " results";
        sub = (my && my.rank === 1) ? "You’re the champion with <strong>" + my.score + "/" + my.total + "</strong>! "
            : (ch ? "Champion: <strong>" + esc(champName(ch)) + "</strong> (" + ch.score + "/" + ch.total + "). " : "") +
              (my ? "You finished <strong>#" + my.rank + "</strong> of " + last.entrants + " with <strong>" + my.score + "/" + my.total + "</strong>. " : "");
        sub += s.next_opens_at ? "Next challenge opens " + ukDay(s.next_opens_at) + " at 00:01." : "";
        btn = "Review the answers"; href = "weekly.html?review=" + last.number;
      } else { el.innerHTML = ""; return; }
      if (!document.getElementById("wks-css")) { var st = document.createElement("style"); st.id = "wks-css"; st.textContent = STRIP_CSS; document.head.appendChild(st); }
      el.innerHTML = '<div class="wks"><div class="wks-ico">' + TROPHY + '</div><div class="wks-txt"><div class="wks-t">' + esc(t) +
        (live ? '<span class="wks-live">Live</span>' : "") + '</div><div class="wks-s">' + sub + '</div></div><a class="wks-btn" href="' + href + '">' + btn + "</a></div>";
    }, function () {});
  }

  window.OssifyWeeklyAlert = { start: start, strip: strip, _show: show };
})();
