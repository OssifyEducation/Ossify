/* Ossify — Head-to-Head "Challenge requested" alert.
 *
 * Loaded only by dashboard.html. When a colleague's challenge becomes playable
 * (they've finished their 10 questions), this shows a full-screen alert with
 * crossed swords:
 *   - in real time while the user is on the dashboard (Supabase Realtime), and
 *   - on the next dashboard visit if it arrived during a timed exam, mock or
 *     revision session (those pages never load this script).
 * Each challenge alerts once: the server records opponent_notified_at when the
 * user dismisses or accepts it (supabase/migrations/20261019_duel_challenge_alerts.sql).
 *
 * Usage: OssifyDuelAlert.start(sb, userId)
 */
(function () {
  "use strict";

  var sb = null, uid = null, chan = null, pollTimer = null, checkTimer = null;
  var showing = false, current = [], seen = {}, lastFocus = null, titleTimer = null, baseTitle = "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function nameOf(r) {
    if (r.challenger_name) return /^dr\.?\s/i.test(r.challenger_name) ? r.challenger_name : "Dr " + r.challenger_name;
    if (r.challenger_user) return "@" + r.challenger_user;
    return "A colleague";
  }
  function timeLeft(iso) {
    var ms = new Date(iso).getTime() - Date.now();
    if (!(ms > 0)) return "";
    var h = Math.floor(ms / 3600000);
    if (h >= 48) return Math.floor(h / 24) + " days";
    if (h >= 1) return h + (h === 1 ? " hour" : " hours");
    var m = Math.max(1, Math.floor(ms / 60000));
    return m + (m === 1 ? " minute" : " minutes");
  }

  // ── Styles (injected once) ────────────────────────────────────────────────
  var CSS = "" +
    ".dz-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;" +
      "background:radial-gradient(circle at 50% 40%,rgba(120,87,189,.55),rgba(20,10,40,.88) 70%);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);" +
      "animation:dzFade .35s ease both;font-family:var(--font-sans,'Inter',system-ui,sans-serif);}" +
    ".dz-overlay.dz-out{animation:dzFadeOut .25s ease forwards;}" +
    ".dz-card{position:relative;width:100%;max-width:420px;border-radius:22px;padding:6px 26px 26px;text-align:center;color:#fff;overflow:hidden;" +
      "background:linear-gradient(160deg,#4b2a91 0%,#2a1559 60%,#1b0d3d 100%);border:1px solid rgba(196,181,253,.35);" +
      "box-shadow:0 30px 80px rgba(10,0,30,.6),0 0 0 6px rgba(167,139,250,.12),inset 0 1px 0 rgba(255,255,255,.12);" +
      "animation:dzPop .5s cubic-bezier(.2,1.3,.4,1) both,dzShake .4s ease .62s;}" +
    ".dz-card::before{content:'';position:absolute;inset:-60%;" +
      "background:conic-gradient(from 0deg,transparent 0 20%,rgba(244,114,182,.18) 25%,transparent 30% 55%,rgba(167,139,250,.2) 60%,transparent 65%);" +
      "animation:dzSpin 9s linear infinite;pointer-events:none;}" +
    ".dz-stage{position:relative;width:190px;height:190px;margin:4px auto -6px;perspective:520px;transform-style:preserve-3d;}" +
    ".dz-stage svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}" +
    ".dz-glow{position:absolute;inset:30px;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.55),rgba(244,114,182,.25) 45%,transparent 70%);" +
      "opacity:0;animation:dzGlow .9s ease .55s forwards,dzPulse 2.2s ease-in-out 1.5s infinite;}" +
    ".dz-ring{position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:3px solid rgba(253,224,71,.9);" +
      "opacity:0;animation:dzRing .7s ease-out .58s forwards;}" +
    ".dz-swA{animation:dzSwA .72s cubic-bezier(.25,.9,.35,1) .05s both;backface-visibility:visible;}" +
    ".dz-swB{animation:dzSwB .72s cubic-bezier(.25,.9,.35,1) .05s both;backface-visibility:visible;}" +
    ".dz-sparks{opacity:0;animation:dzSpark .6s ease-out .6s forwards;transform-origin:50% 50%;}" +
    ".dz-glint{animation:dzGlint 2.8s ease-in-out 1.4s infinite;}" +
    ".dz-eyebrow{position:relative;display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;" +
      "color:#fde68a;background:rgba(251,191,36,.14);border:1px solid rgba(251,191,36,.35);padding:4px 11px;border-radius:20px;margin-bottom:10px;}" +
    ".dz-title{position:relative;font-family:var(--font-serif,'Fraunces',Georgia,serif);font-size:32px;font-weight:600;line-height:1.1;letter-spacing:-.6px;margin:0 0 10px;" +
      "background:linear-gradient(90deg,#fff 0%,#fde68a 35%,#fff 50%,#f9a8d4 70%,#fff 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;" +
      "animation:dzTitle .5s ease .7s both,dzSheen 3.5s linear 1.3s infinite;}" +
    ".dz-body{position:relative;font-size:14.5px;line-height:1.6;color:#e9e2ff;margin:0 0 6px;animation:dzTitle .5s ease .82s both;}" +
    ".dz-body strong{color:#fff;}" +
    ".dz-list{position:relative;list-style:none;margin:8px 0 4px;padding:0;display:flex;flex-direction:column;gap:6px;animation:dzTitle .5s ease .82s both;}" +
    ".dz-list li{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px 12px;font-size:13.5px;display:flex;justify-content:space-between;gap:10px;}" +
    ".dz-list li span{color:#cbbcf5;font-size:12px;white-space:nowrap;}" +
    ".dz-time{position:relative;font-size:12.5px;color:#cbbcf5;margin:0 0 20px;animation:dzTitle .5s ease .9s both;}" +
    ".dz-actions{position:relative;display:flex;flex-direction:column;gap:9px;animation:dzTitle .5s ease 1s both;}" +
    ".dz-accept{display:flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:12px;padding:14px 18px;font:600 15px var(--font-sans,'Inter',system-ui,sans-serif);" +
      "color:#2a1200;cursor:pointer;text-decoration:none;background:linear-gradient(180deg,#fde68a,#f59e0b);box-shadow:0 8px 24px rgba(245,158,11,.4),inset 0 1px 0 rgba(255,255,255,.6);transition:transform .15s,box-shadow .15s;}" +
    ".dz-accept:hover{transform:translateY(-1px);box-shadow:0 12px 30px rgba(245,158,11,.55),inset 0 1px 0 rgba(255,255,255,.6);}" +
    ".dz-later{background:transparent;border:1px solid rgba(255,255,255,.22);color:#e9e2ff;border-radius:12px;padding:11px 18px;font:500 13.5px var(--font-sans,'Inter',system-ui,sans-serif);cursor:pointer;}" +
    ".dz-later:hover{background:rgba(255,255,255,.08);}" +
    ".dz-snd{position:absolute;top:12px;right:12px;z-index:2;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#e9e2ff;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;}" +
    ".dz-snd:hover{background:rgba(255,255,255,.14);}.dz-snd svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}" +
    ".dz-snd:focus-visible{outline:3px solid #c4b5fd;outline-offset:2px;}" +
    ".dz-snd.dz-need{width:auto;gap:6px;padding:0 12px 0 10px;border-radius:17px;font:600 12px var(--font-sans,'Inter',system-ui,sans-serif);color:#2a1200;" +
      "background:linear-gradient(180deg,#fde68a,#f59e0b);border-color:transparent;animation:dzNeed 1.4s ease-in-out infinite;}" +
    "@keyframes dzNeed{0%,100%{box-shadow:0 0 0 0 rgba(251,191,36,.55)}50%{box-shadow:0 0 0 8px rgba(251,191,36,0)}}" +
    ".dz-accept:focus-visible,.dz-later:focus-visible{outline:3px solid #c4b5fd;outline-offset:2px;}" +
    "@keyframes dzFade{from{opacity:0}to{opacity:1}}" +
    "@keyframes dzFadeOut{to{opacity:0}}" +
    "@keyframes dzPop{from{opacity:0;transform:scale(.7) translateY(30px)}to{opacity:1;transform:none}}" +
    "@keyframes dzShake{0%,100%{transform:none}20%{transform:translateX(-7px) rotate(-1deg)}40%{transform:translateX(6px) rotate(1deg)}60%{transform:translateX(-4px)}80%{transform:translateX(2px)}}" +
    "@keyframes dzSpin{to{transform:rotate(360deg)}}" +
    "@keyframes dzSwA{0%{opacity:0;transform:translate3d(-110px,30px,-320px) rotateY(80deg) rotateZ(-55deg)}45%{opacity:1}75%{transform:translate3d(0,0,90px) rotateY(-10deg) rotateZ(4deg) scale(1.14)}100%{opacity:1;transform:none}}" +
    "@keyframes dzSwB{0%{opacity:0;transform:translate3d(110px,30px,-320px) rotateY(-80deg) rotateZ(55deg)}45%{opacity:1}75%{transform:translate3d(0,0,90px) rotateY(10deg) rotateZ(-4deg) scale(1.14)}100%{opacity:1;transform:none}}" +
    "@keyframes dzSpark{0%{opacity:1;transform:scale(.3)}60%{opacity:1}100%{opacity:0;transform:scale(1.35)}}" +
    "@keyframes dzRing{0%{opacity:1;transform:scale(.4)}100%{opacity:0;transform:scale(4.5)}}" +
    "@keyframes dzGlow{to{opacity:1}}" +
    "@keyframes dzPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.12);opacity:.7}}" +
    "@keyframes dzGlint{0%,70%,100%{opacity:0}80%{opacity:.9}}" +
    "@keyframes dzTitle{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}" +
    "@keyframes dzSheen{to{background-position:-250% 0}}" +
    "@media (prefers-reduced-motion:reduce){.dz-overlay *,.dz-overlay,.dz-card,.dz-card::before{animation-duration:.01ms!important;animation-iteration-count:1!important;animation-delay:0s!important;}" +
      ".dz-glow{opacity:1}.dz-sparks,.dz-ring{display:none}}";

  function injectCss() {
    if (document.getElementById("dz-css")) return;
    var s = document.createElement("style");
    s.id = "dz-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // One sword, drawn point-up; shifted so the blades cross mid-length at the origin.
  function sword(id, angle, cls) {
    return '<svg class="' + cls + '" viewBox="-72 -72 144 144" aria-hidden="true">' +
      '<g transform="rotate(' + angle + ') translate(0,26)">' +
        '<polygon points="0,-88 6.5,-74 6.5,6 -6.5,6 -6.5,-74" fill="url(#' + id + 'Blade)" stroke="#5b4a8a" stroke-width="1"/>' +
        '<line x1="0" y1="-74" x2="0" y2="2" stroke="rgba(91,74,138,.45)" stroke-width="1.6"/>' +
        '<polygon class="dz-glint" points="0,-88 3,-80 3,-20 0,-14" fill="#fff" opacity="0"/>' +
        '<rect x="-21" y="5" width="42" height="8" rx="4" fill="url(#' + id + 'Gold)" stroke="#92400e" stroke-width="1"/>' +
        '<circle cx="-21" cy="9" r="4.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>' +
        '<circle cx="21" cy="9" r="4.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>' +
        '<rect x="-4.5" y="13" width="9" height="24" rx="2.5" fill="#3d1f7a"/>' +
        '<path d="M-4.5 18 L4.5 21 M-4.5 24 L4.5 27 M-4.5 30 L4.5 33" stroke="#a78bfa" stroke-width="1.6"/>' +
        '<circle cx="0" cy="41.5" r="6.5" fill="#f472b6" stroke="#9d174d" stroke-width="1"/>' +
        '<circle cx="-2" cy="39.5" r="1.8" fill="#fff" opacity=".7"/>' +
      '</g>' +
      '<defs>' +
        '<linearGradient id="' + id + 'Blade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#e4defa"/><stop offset="1" stop-color="#9a93c2"/></linearGradient>' +
        '<linearGradient id="' + id + 'Gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#d97706"/></linearGradient>' +
      '</defs></svg>';
  }

  function sparks() {
    var out = "", i, a, r1, r2, x1, y1, x2, y2;
    for (i = 0; i < 12; i++) {
      a = (i / 12) * Math.PI * 2 + 0.26;
      r1 = 16; r2 = i % 2 ? 44 : 62;
      x1 = Math.cos(a) * r1; y1 = Math.sin(a) * r1;
      x2 = Math.cos(a) * r2; y2 = Math.sin(a) * r2;
      out += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) +
        '" stroke="' + (i % 3 ? "#fde047" : "#f9a8d4") + '" stroke-width="3" stroke-linecap="round"/>';
    }
    return '<svg class="dz-sparks" viewBox="-72 -72 144 144" aria-hidden="true">' + out +
      '<circle cx="0" cy="0" r="7" fill="#fff"/></svg>';
  }

  // ── Sound: a metallic clash synthesised with Web Audio (no file to download) ──
  // Browsers only allow sound after the person has clicked or tapped on the page,
  // so the audio is unlocked on the first interaction. If the alert arrives before
  // any interaction, the clash plays when they press "Start the duel" instead.
  var actx = null, played = false, SOUND_KEY = "ossify_duel_sound";
  // Recorded clash (CC0 sword recording by StarNinjas, opengameart.org/users/starninjas,
  // layered with a low boom, blade ring, whoosh and hall echo). The hit is 0.5 s into the file.
  var CLASH_URL = "assets/sfx/duel-clash.mp3", CLASH_HIT = 0.5, clashBuf = null, loading = null;
  function loadClash() {
    var c = ctx();
    if (!c || clashBuf || loading || !window.fetch) return;
    loading = fetch(CLASH_URL).then(function (res) { if (!res.ok) throw new Error(res.status); return res.arrayBuffer(); })
      .then(function (ab) {
        return new Promise(function (ok, bad) { var pr = c.decodeAudioData(ab, ok, bad); if (pr && pr.then) pr.then(ok, bad); });
      })
      .then(function (b) { clashBuf = b; }, function () { loading = null; });
  }
  function soundOn() { try { return localStorage.getItem(SOUND_KEY) !== "off"; } catch (e) { return true; } }
  function setSound(on) { try { localStorage.setItem(SOUND_KEY, on ? "on" : "off"); } catch (e) {} }
  function ctx() {
    if (actx) return actx;
    var C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    try { actx = new C(); } catch (e) { actx = null; }
    return actx;
  }
  function unlock() { var c = ctx(); if (c && c.state === "suspended") c.resume().catch(function () {}); }
  function clash(fromHit) {
    var c = ctx();
    if (!c || c.state !== "running" || !soundOn()) return false;
    if (clashBuf) {
      var src = c.createBufferSource(), g = c.createGain();
      src.buffer = clashBuf; g.gain.value = 0.9;
      src.connect(g); g.connect(c.destination);
      src.start(c.currentTime + 0.005, fromHit ? Math.max(0, CLASH_HIT - 0.02) : 0);
      return true;
    }
    if (!fromHit) return false;   // synthesised fallback has no whoosh, so only use it at the moment of impact
    var t = c.currentTime + 0.01;
    var out = c.createGain(); out.gain.value = 0.32;
    var comp = c.createDynamicsCompressor(); out.connect(comp); comp.connect(c.destination);
    // Two blades = two slightly offset, slightly detuned sets of inharmonic partials
    [[0, 1], [0.012, 1.018]].forEach(function (hit) {
      [[1870, 0.9, 1.3], [2790, 0.65, 1.0], [3640, 0.5, 0.85], [4980, 0.35, 0.6], [6510, 0.25, 0.45], [8120, 0.15, 0.3]].forEach(function (pt) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = "sine"; o.frequency.value = pt[0] * hit[1];
        g.gain.setValueAtTime(0.0001, t + hit[0]);
        g.gain.exponentialRampToValueAtTime(pt[1] * 0.28, t + hit[0] + 0.004);
        g.gain.exponentialRampToValueAtTime(0.0001, t + hit[0] + pt[2]);
        o.connect(g); g.connect(out); o.start(t + hit[0]); o.stop(t + hit[0] + pt[2] + 0.05);
      });
    });
    // Bright scrape of the impact
    var len = Math.floor(c.sampleRate * 0.14), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
    var n = c.createBufferSource(), hp = c.createBiquadFilter(), ng = c.createGain();
    n.buffer = buf; hp.type = "highpass"; hp.frequency.value = 2600; ng.gain.value = 0.55;
    n.connect(hp); hp.connect(ng); ng.connect(out); n.start(t);
    // Low thud so it has weight
    var th = c.createOscillator(), tg = c.createGain();
    th.type = "triangle"; th.frequency.setValueAtTime(220, t); th.frequency.exponentialRampToValueAtTime(90, t + 0.09);
    tg.gain.setValueAtTime(0.5, t); tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    th.connect(tg); tg.connect(out); th.start(t); th.stop(t + 0.15);
    return true;
  }
  // Play once the audio context is running; give up after 300 ms (e.g. still blocked).
  function clashWhenReady(cb, fromHit) {
    var c = ctx(), done = false;
    function fin(ok) { if (!done) { done = true; if (cb) cb(ok); } }
    if (!c || !soundOn()) return fin(false);
    if (c.state === "running") return fin(clash(fromHit));
    c.resume().then(function () { if (!done) fin(clash(fromHit)); }, function () { fin(false); });   // late unlock must not replay a stale attempt
    setTimeout(function () { fin(false); }, 300);
  }
  ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
    document.addEventListener(ev, unlock, { capture: true, passive: true });
  });
  var SPK_ON = '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  var SPK_OFF = '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>';

  // ── Render ────────────────────────────────────────────────────────────────
  function show(rows) {
    injectCss();
    showing = true;
    current = rows.slice();
    lastFocus = document.activeElement;

    var many = rows.length > 1;
    var body, time = "";
    if (many) {
      body = '<p class="dz-body"><strong>' + rows.length + " colleagues</strong> have challenged you to a head-to-head duel.</p>" +
        '<ul class="dz-list">' + rows.slice(0, 4).map(function (r) {
          var t = timeLeft(r.expires_at);
          return "<li><strong>" + esc(nameOf(r)) + "</strong>" + (t ? "<span>" + esc(t) + " left</span>" : "") + "</li>";
        }).join("") + (rows.length > 4 ? "<li>+ " + (rows.length - 4) + " more</li>" : "") + "</ul>";
      time = '<p class="dz-time">They’ve each played their 10 questions, now it’s your move!</p>';
    } else {
      var t = timeLeft(rows[0].expires_at);
      body = '<p class="dz-body"><strong>' + esc(nameOf(rows[0])) + "</strong> has challenged you to a head-to-head duel. " +
        "They’ve already played their 10 questions. Do you accept the challenge?</p>";
      time = '<p class="dz-time">' + (t ? "You have " + esc(t) + " to reply." : "Reply soon before it expires.") + "</p>";
    }

    var ov = document.createElement("div");
    ov.className = "dz-overlay";
    ov.innerHTML =
      '<div class="dz-card" role="alertdialog" aria-modal="true" aria-labelledby="dzTitle" aria-describedby="dzBody">' +
        '<button class="dz-snd" type="button" data-dz="sound" aria-label="' + (soundOn() ? "Mute sound" : "Turn sound on") + '">' + (soundOn() ? SPK_ON : SPK_OFF) + "</button>" +
        '<div class="dz-stage" aria-hidden="true">' +
          '<div class="dz-glow"></div><div class="dz-ring"></div>' +
          sword("dzA", 42, "dz-swA") + sword("dzB", -42, "dz-swB") + sparks() +
        "</div>" +
        '<div class="dz-eyebrow">Head-to-Head</div>' +
        '<h2 class="dz-title" id="dzTitle">Challenge requested!</h2>' +
        '<div id="dzBody">' + body + time + "</div>" +
        '<div class="dz-actions">' +
          '<a class="dz-accept" href="' + (many ? "duel.html" : "duel.html?play=" + encodeURIComponent(rows[0].duel_id)) + '" data-dz="accept">Start the duel →</a>' +
          '<button class="dz-later" type="button" data-dz="later">Not now</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(ov);
    played = false;
    unlock();
    loadClash();
    function after(ok) { played = played || ok; if (!played && soundOn()) needTap(ov); }
    setTimeout(function () {
      if (played) return;
      if (clashBuf) clashWhenReady(after, false);
      else setTimeout(function () { if (!played) clashWhenReady(after, true); }, 500);
    }, 90);

    ov.addEventListener("click", function (e) {
      var act = e.target.closest && e.target.closest("[data-dz]");
      if (!act) return;
      var kind = act.getAttribute("data-dz");
      if (kind === "sound" && act.classList.contains("dz-need")) {   // blocked earlier: this tap unlocks and plays it
        act.classList.remove("dz-need"); act.innerHTML = SPK_ON; act.setAttribute("aria-label", "Mute sound");
        clashWhenReady(function (ok) { played = played || ok; }, true);
        return;
      }
      if (kind === "sound") {
        var on = !soundOn(); setSound(on);
        act.innerHTML = on ? SPK_ON : SPK_OFF;
        act.setAttribute("aria-label", on ? "Mute sound" : "Turn sound on");
        if (on) clashWhenReady(null, true);
        return;
      }
      if (kind === "accept") {
        e.preventDefault();
        var go = act.getAttribute("href");
        var acked = ack();
        if (played) { acked.then(function () { location.href = go; }); return; }
        clashWhenReady(function (ok) {   // sound was blocked earlier: play the impact now, on the click
          played = ok;
          acked.then(function () { setTimeout(function () { location.href = go; }, ok ? 650 : 0); });
        }, true);
      } else {
        close();
      }
    });
    ov.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key === "Tab") {   // keep focus inside the alert
        var f = ov.querySelectorAll("a,button");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    setTimeout(function () { var a = ov.querySelector(".dz-accept"); if (a) a.focus({ preventScroll: true }); }, 50);

    if (document.hidden) flashTitle(rows.length);
  }

  // Browser blocked sound (no click on this page yet): turn the speaker into a pulsing "Tap for sound" button.
  function needTap(ov) {
    var b = ov.querySelector(".dz-snd");
    if (!b || !ov.parentNode) return;
    b.classList.add("dz-need");
    b.innerHTML = SPK_ON + "<span>Tap for sound</span>";
    b.setAttribute("aria-label", "Play sound");
  }

  function ack() {
    var ids = current.map(function (r) { return r.duel_id; });
    ids.forEach(function (id) { seen[id] = true; });   // never re-show on this page, even before the server confirms
    if (!ids.length) return Promise.resolve();
    return sb.rpc("ack_duel_challenges", { p_ids: ids }).then(function () {}, function () {});
  }

  function close() {
    var done = ack();
    var ov = document.querySelector(".dz-overlay");
    if (ov) {
      ov.classList.add("dz-out");
      setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 260);
    }
    showing = false;
    current = [];
    stopTitle();
    if (lastFocus && lastFocus.focus) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
    done.then(function () { setTimeout(check, 400); });   // anything that arrived while the alert was open
  }

  // Tab title flashes if the challenge lands while the dashboard tab is in the background.
  function flashTitle(n) {
    stopTitle();
    baseTitle = document.title;
    var alt = "⚔️ " + (n > 1 ? n + " challenges requested" : "Challenge requested!");
    var on = false;
    titleTimer = setInterval(function () { on = !on; document.title = on ? alt : baseTitle; }, 1100);
  }
  function stopTitle() {
    if (titleTimer) { clearInterval(titleTimer); titleTimer = null; if (baseTitle) document.title = baseTitle; }
  }

  // ── Data ──────────────────────────────────────────────────────────────────
  function check() {
    if (showing || !sb) return;
    sb.rpc("get_unseen_duel_challenges").then(function (r) {
      if (r.error || showing) return;
      var rows = (r.data || []).filter(function (x) { return !seen[x.duel_id]; });
      if (rows.length) show(rows);
    }, function () {});
  }
  function soon() { clearTimeout(checkTimer); checkTimer = setTimeout(check, 600); }

  function start(client, userId) {
    if (!client || !userId || sb) return;
    sb = client; uid = userId;
    loadClash();
    check();
    try {
      chan = sb.channel("duel-alert-" + uid)
        .on("postgres_changes", { event: "*", schema: "public", table: "duels", filter: "opponent_id=eq." + uid }, soon)
        .subscribe();
    } catch (e) {}
    // Safety net if the realtime connection drops: re-check every minute while visible.
    pollTimer = setInterval(function () { if (!document.hidden) check(); }, 60000);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) { stopTitle(); check(); }
    });
  }

  window.OssifyDuelAlert = { start: start, _show: show };
})();
