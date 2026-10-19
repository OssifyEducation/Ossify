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

  // One sword, drawn point-up (crossguard at the origin). Shared by the challenge and result alerts.
  function swordParts(id) {
    return '<polygon points="0,-88 6.5,-74 6.5,6 -6.5,6 -6.5,-74" fill="url(#' + id + 'Blade)" stroke="#5b4a8a" stroke-width="1"/>' +
      '<line x1="0" y1="-74" x2="0" y2="2" stroke="rgba(91,74,138,.45)" stroke-width="1.6"/>' +
      '<polygon class="dz-glint" points="0,-88 3,-80 3,-20 0,-14" fill="#fff" opacity="0"/>' +
      '<rect x="-21" y="5" width="42" height="8" rx="4" fill="url(#' + id + 'Gold)" stroke="#92400e" stroke-width="1"/>' +
      '<circle cx="-21" cy="9" r="4.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>' +
      '<circle cx="21" cy="9" r="4.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>' +
      '<rect x="-4.5" y="13" width="9" height="24" rx="2.5" fill="#3d1f7a"/>' +
      '<path d="M-4.5 18 L4.5 21 M-4.5 24 L4.5 27 M-4.5 30 L4.5 33" stroke="#a78bfa" stroke-width="1.6"/>' +
      '<circle cx="0" cy="41.5" r="6.5" fill="#f472b6" stroke="#9d174d" stroke-width="1"/>' +
      '<circle cx="-2" cy="39.5" r="1.8" fill="#fff" opacity=".7"/>';
  }
  function swordDefs(id) {
    return '<defs>' +
      '<linearGradient id="' + id + 'Blade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#e4defa"/><stop offset="1" stop-color="#9a93c2"/></linearGradient>' +
      '<linearGradient id="' + id + 'Gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#d97706"/></linearGradient>' +
      '</defs>';
  }
  // Shifted so the blades cross mid-length at the origin.
  function sword(id, angle, cls) {
    return '<svg class="' + cls + '" viewBox="-72 -72 144 144" aria-hidden="true">' +
      '<g transform="rotate(' + angle + ') translate(0,26)">' + swordParts(id) + '</g>' + swordDefs(id) + '</svg>';
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
    function after(ok) { played = played || ok; }
    setTimeout(function () {
      if (played) return;
      if (clashBuf) clashWhenReady(after, false);
      else setTimeout(function () { if (!played) clashWhenReady(after, true); }, 500);
    }, 90);

    ov.addEventListener("click", function (e) {
      var act = e.target.closest && e.target.closest("[data-dz]");
      if (!act) return;
      var kind = act.getAttribute("data-dz");
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
        clashWhenReady(function (ok) {   // clash on the click, then open the duel once the hit has landed
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


  // ══ Result alert: same opening clash, then follow the winning or the losing sword ══
  // OssifyDuelAlert.result({ duel_id, outcome: 'won'|'lost'|'draw', my_score, their_score, total,
  //                          opponent_id, opponent_name, opponent_user }, { source: 'duel'|'dashboard' })
  var RCSS = "" +
    ".dr-ov{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;overflow:hidden;" +
      "background:radial-gradient(circle at 50% 40%,rgba(120,87,189,.55),rgba(20,10,40,.88) 70%);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);" +
      "animation:drIn .35s ease both;font-family:var(--font-sans,'Inter',system-ui,sans-serif);}" +
    ".dr-ov.dr-out{animation:drOut .25s ease forwards;}" +
    ".dr-dim{position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(71,85,105,.5),rgba(8,10,20,.92) 70%);opacity:0;}" +
    ".dr-L .dr-dim{animation:drIn 1.1s ease .9s forwards;}" +
    ".dr-card{position:relative;width:100%;max-width:400px;max-height:calc(100vh - 32px);overflow:hidden;border-radius:22px;padding:8px 26px 24px;text-align:center;color:#fff;" +
      "background:linear-gradient(160deg,#4b2a91,#2a1559 60%,#1b0d3d);border:1px solid rgba(196,181,253,.35);box-shadow:0 30px 80px rgba(10,0,30,.55);" +
      "animation:drPop .5s cubic-bezier(.2,1.3,.4,1) both,drShake .4s ease .62s;}" +
    ".dr-W .dr-card{animation:drPop .5s cubic-bezier(.2,1.3,.4,1) both,drShake .4s ease .62s,drGold .6s ease 1.2s forwards;}" +
    ".dr-slate{position:absolute;inset:0;background:linear-gradient(170deg,#2c3447,#1d2333 60%,#141823);opacity:0;animation:drIn 1.1s ease .9s forwards;}" +
    ".dr-card>*:not(.dr-slate){position:relative;}" +
    ".dr-stage{width:200px;height:190px;margin:2px auto 0;perspective:520px;}" +
    ".dr-stage>*{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}" +
    ".dr-tag{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:4px 11px;border-radius:20px;margin-bottom:10px;opacity:0;animation:drUp .5s ease forwards;}" +
    ".dr-title{font-family:var(--font-serif,'Fraunces',Georgia,serif);font-size:34px;font-weight:600;line-height:1.1;letter-spacing:-.6px;margin:0 0 10px;opacity:0;animation:drUp .5s ease forwards;}" +
    ".dr-body{font-size:14.5px;line-height:1.6;margin:0 0 4px;opacity:0;animation:drUp .5s ease forwards;}" +
    ".dr-body strong{color:#fff;}" +
    ".dr-score{display:flex;justify-content:center;gap:14px;margin:12px 0 18px;opacity:0;animation:drUp .5s ease forwards;}" +
    ".dr-score div{min-width:86px;padding:8px 10px;border-radius:12px;font-size:12px;}" +
    ".dr-score b{display:block;font-family:var(--font-serif,'Fraunces',Georgia,serif);font-size:26px;font-weight:600;line-height:1.1;}" +
    ".dr-act{display:flex;flex-direction:column;gap:9px;opacity:0;animation:drUp .5s ease forwards;}" +
    ".dr-b1{display:block;border:none;border-radius:12px;padding:13px 18px;font:600 15px var(--font-sans,'Inter',system-ui,sans-serif);cursor:pointer;text-decoration:none;}" +
    ".dr-b2{background:transparent;border-radius:12px;padding:10px 18px;font:500 13.5px var(--font-sans,'Inter',system-ui,sans-serif);cursor:pointer;}" +
    ".dr-b1:focus-visible,.dr-b2:focus-visible{outline:3px solid #c4b5fd;outline-offset:2px;}" +
    ".dr-W .dr-tag,.dr-D .dr-tag{color:#fde68a;background:rgba(251,191,36,.14);border:1px solid rgba(251,191,36,.4);animation-delay:1.3s;}" +
    ".dr-W .dr-title{background:linear-gradient(90deg,#fff,#fde68a 30%,#fff 50%,#fbbf24 70%,#fff);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:drUp .5s ease 1.4s forwards,drSheen 2.8s linear 2s infinite;}" +
    ".dr-D .dr-title{animation-delay:1.4s;}" +
    ".dr-W .dr-body,.dr-D .dr-body{color:#e9e2ff;animation-delay:1.5s;}.dr-W .dr-score,.dr-D .dr-score{animation-delay:1.6s;}.dr-W .dr-act,.dr-D .dr-act{animation-delay:1.7s;}" +
    ".dr-W .dr-score div,.dr-D .dr-score div{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#cbbcf5;}.dr-W .dr-score .dr-me{background:rgba(251,191,36,.16);border-color:rgba(251,191,36,.5);color:#fde68a;}" +
    ".dr-W .dr-b1,.dr-D .dr-b1{color:#2a1200;background:linear-gradient(180deg,#fde68a,#f59e0b);box-shadow:0 8px 24px rgba(245,158,11,.4);}.dr-W .dr-b2,.dr-D .dr-b2{border:1px solid rgba(255,255,255,.22);color:#e9e2ff;}" +
    ".dr-L .dr-tag{color:#b6c2d4;background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.3);animation-delay:1.9s;}" +
    ".dr-L .dr-title{color:#e2e8f0;animation:drUp 1s ease 2s forwards;}" +
    ".dr-L .dr-body{color:#aeb9ca;animation-delay:2.15s;}.dr-L .dr-body strong{color:#e2e8f0;}.dr-L .dr-score{animation-delay:2.25s;}.dr-L .dr-act{animation-delay:2.35s;}" +
    ".dr-L .dr-score div{background:rgba(255,255,255,.05);border:1px solid rgba(148,163,184,.2);color:#94a3b8;}" +
    ".dr-L .dr-b1{color:#e2e8f0;background:#3b4660;}.dr-L .dr-b2{border:1px solid rgba(148,163,184,.3);color:#aeb9ca;}" +
    ".dr-rays{inset:-60px!important;width:auto!important;height:auto!important;border-radius:50%;background:repeating-conic-gradient(from 0deg,rgba(251,191,36,.28) 0 7deg,transparent 7deg 22deg);" +
      "-webkit-mask:radial-gradient(circle,#000 20%,transparent 68%);mask:radial-gradient(circle,#000 20%,transparent 68%);opacity:0;animation:drIn .6s ease 1.15s forwards,drSpin 14s linear 1.15s infinite;}" +
    ".dr-glow{inset:25px!important;width:auto!important;height:auto!important;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.55),rgba(244,114,182,.25) 45%,transparent 70%);opacity:0;animation:drIn .5s ease .55s forwards;}" +
    ".dr-W .dr-glow,.dr-D .dr-glow{animation:drIn .5s ease .55s forwards,drPulse 2.2s ease-in-out 1.6s infinite;}" +
    ".dr-L .dr-glow{animation:drIn .5s ease .55s forwards,drOut 1s ease 1s forwards;}" +
    ".dr-ring{left:50%!important;top:50%!important;width:40px!important;height:40px!important;margin:-20px 0 0 -20px;border-radius:50%;border:3px solid rgba(253,224,71,.9);opacity:0;animation:drRing .7s ease-out .58s forwards;}" +
    ".dr-sparks{opacity:0;animation:drSpark .6s ease-out .6s forwards;transform-origin:50% 50%;}" +
    ".dr-swA{animation:drSwA .72s cubic-bezier(.25,.9,.35,1) .05s both;}.dr-swB{animation:drSwB .72s cubic-bezier(.25,.9,.35,1) .05s both;}" +
    ".dr-W .dr-gA{transform-origin:0 0;animation:drRaise .6s cubic-bezier(.3,1.4,.5,1) .85s both;}" +
    ".dr-W .dr-gB{transform-origin:0 0;animation:drFlyDown .8s cubic-bezier(.5,0,.8,.6) .8s forwards;}" +
    ".dr-L .dr-gA{transform-origin:0 0;animation:drFall 1.05s cubic-bezier(.45,0,.6,1) .8s both;}" +
    ".dr-L .dr-swA{animation:drSwA .72s cubic-bezier(.25,.9,.35,1) .05s both,drGrey 1s ease .95s forwards;}" +
    ".dr-L .dr-gB{transform-origin:0 0;animation:drLeave 1s ease-in .85s forwards;}" +
    ".dr-wreath{stroke-dasharray:330;stroke-dashoffset:330;animation:drDraw .8s ease 1.2s forwards;}" +
    ".dr-leaf{transform-box:fill-box;transform-origin:center;opacity:0;animation:drLeaf .3s ease forwards;}" +
    ".dr-gnd{opacity:0;animation:drIn .6s ease 1.4s forwards;}" +
    ".dr-dust{transform-box:fill-box;transform-origin:center;opacity:0;animation:drDust .9s ease-out 1.8s forwards;}" +
    ".dr-conf{position:absolute;top:-12px;width:8px;height:12px;border-radius:2px;opacity:0;animation:drFall2 linear forwards;}" +
    ".dr-ash{position:absolute;top:-8px;width:3px;height:3px;border-radius:50%;background:#94a3b8;opacity:0;animation:drAsh linear infinite;}" +
    "@keyframes drIn{from{opacity:0}to{opacity:1}}@keyframes drOut{to{opacity:0}}" +
    "@keyframes drPop{from{opacity:0;transform:scale(.7) translateY(30px)}to{opacity:1;transform:none}}" +
    "@keyframes drShake{0%,100%{transform:none}20%{transform:translateX(-7px) rotate(-1deg)}40%{transform:translateX(6px) rotate(1deg)}60%{transform:translateX(-4px)}80%{transform:translateX(2px)}}" +
    "@keyframes drGold{to{border-color:rgba(251,191,36,.55);box-shadow:0 30px 80px rgba(10,0,30,.55),0 0 0 6px rgba(251,191,36,.14)}}" +
    "@keyframes drUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}" +
    "@keyframes drSheen{to{background-position:-250% 0}}@keyframes drSpin{to{transform:rotate(360deg)}}" +
    "@keyframes drPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}" +
    "@keyframes drRing{0%{opacity:1;transform:scale(.4)}100%{opacity:0;transform:scale(4.5)}}" +
    "@keyframes drSpark{0%{opacity:1;transform:scale(.3)}60%{opacity:1}100%{opacity:0;transform:scale(1.35)}}" +
    "@keyframes drSwA{0%{opacity:0;transform:translate3d(-110px,30px,-320px) rotateY(80deg) rotateZ(-55deg)}45%{opacity:1}75%{transform:translate3d(0,0,90px) rotateY(-10deg) rotateZ(4deg) scale(1.14)}100%{opacity:1;transform:none}}" +
    "@keyframes drSwB{0%{opacity:0;transform:translate3d(110px,30px,-320px) rotateY(-80deg) rotateZ(55deg)}45%{opacity:1}75%{transform:translate3d(0,0,90px) rotateY(10deg) rotateZ(-4deg) scale(1.14)}100%{opacity:1;transform:none}}" +
    "@keyframes drRaise{0%{transform:none}100%{transform:translateY(-3px) rotate(-42deg) scale(.84)}}" +
    "@keyframes drFlyDown{0%{transform:none;opacity:1}100%{transform:translate(120px,190px) rotate(620deg) scale(.7);opacity:0}}" +
    "@keyframes drFall{0%{transform:none}28%{transform:translate(-26px,-22px) rotate(-70deg)}82%{transform:translate(0,17px) rotate(150deg)}90%{transform:translate(0,15px) rotate(142deg)}100%{transform:translate(0,16px) rotate(145deg)}}" +
    "@keyframes drLeave{0%{transform:none;opacity:1}100%{transform:translate(70px,-160px) rotate(-25deg);opacity:0}}" +
    "@keyframes drGrey{to{filter:grayscale(1) brightness(.82)}}@keyframes drDraw{to{stroke-dashoffset:0}}" +
    "@keyframes drLeaf{from{opacity:0;transform:scale(0)}to{opacity:1;transform:none}}" +
    "@keyframes drDust{0%{opacity:.8;transform:scale(.3)}100%{opacity:0;transform:scale(1.8)}}" +
    "@keyframes drFall2{0%{opacity:1;transform:translate3d(0,0,0) rotate(0)}100%{opacity:0;transform:translate3d(var(--dx),110vh,0) rotate(var(--r))}}" +
    "@keyframes drAsh{0%{opacity:0;transform:translate(0,0)}15%{opacity:.7}100%{opacity:0;transform:translate(var(--dx),105vh)}}" +
    "@media (prefers-reduced-motion:reduce){.dr-ov *,.dr-ov{animation-duration:.01ms!important;animation-iteration-count:1!important;animation-delay:0s!important;}.dr-conf,.dr-ash,.dr-sparks,.dr-ring{display:none}}";

  var RV = 'viewBox="-72 -72 144 144" aria-hidden="true"';
  function rSparks() {
    var o = "", i, a, r2;
    for (i = 0; i < 12; i++) {
      a = i / 12 * Math.PI * 2 + 0.26; r2 = i % 2 ? 44 : 62;
      o += '<line x1="' + (Math.cos(a) * 16).toFixed(1) + '" y1="' + (Math.sin(a) * 16).toFixed(1) + '" x2="' + (Math.cos(a) * r2).toFixed(1) + '" y2="' + (Math.sin(a) * r2).toFixed(1) +
        '" stroke="' + (i % 3 ? "#fde047" : "#f9a8d4") + '" stroke-width="3" stroke-linecap="round"/>';
    }
    return '<svg class="dr-sparks" ' + RV + '>' + o + '<circle r="7" fill="#fff"/></svg>';
  }
  function rWreath() {
    var o = '<circle class="dr-wreath" r="52" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" transform="rotate(100)"/>';
    for (var i = 0; i < 8; i++) {
      [150 + i * 12, 30 - i * 12].forEach(function (d) {
        var a = d * Math.PI / 180, x = (Math.cos(a) * 52).toFixed(1), y = (Math.sin(a) * 52).toFixed(1);
        o += '<ellipse class="dr-leaf" cx="' + x + '" cy="' + y + '" rx="4" ry="9" fill="#fbbf24" transform="rotate(' + (d + 90) + ' ' + x + ' ' + y + ')" style="animation-delay:' + (1.25 + i * 0.06).toFixed(2) + 's"/>';
      });
    }
    return '<svg ' + RV + '>' + o + '</svg>';
  }
  function rStage(k) {
    var W = k === "W", L = k === "L";
    return '<div class="dr-stage" aria-hidden="true">' + (W ? '<div class="dr-rays"></div>' : "") + '<div class="dr-glow"></div><div class="dr-ring"></div>' + (W ? rWreath() : "") +
      (L ? '<svg ' + RV + '><ellipse class="dr-gnd" cx="0" cy="58" rx="58" ry="7" fill="rgba(148,163,184,.2)"/></svg>' : "") +
      '<svg class="dr-swB" ' + RV + '>' + swordDefs("drB") + '<g class="dr-gB"><g transform="rotate(-42) translate(0,26)">' + swordParts("drB") + "</g></g></svg>" +
      '<svg class="dr-swA" ' + RV + '>' + swordDefs("drA") + '<clipPath id="drGround"><rect x="-300" y="-300" width="600" height="' + (L ? 358 : 600) + '"/></clipPath>' +
        '<g clip-path="url(#drGround)"><g class="dr-gA"><g transform="rotate(42) translate(0,26)">' + swordParts("drA") + "</g></g></g></svg>" +
      (L ? '<svg ' + RV + '><circle class="dr-dust" cx="-10" cy="56" r="10" fill="rgba(148,163,184,.45)"/><circle class="dr-dust" cx="12" cy="57" r="8" fill="rgba(148,163,184,.4)" style="animation-delay:1.85s"/></svg>' : "") +
      rSparks() + "</div>";
  }
  function rParticles(k) {
    var h = "", i;
    if (k === "W") {
      var c = ["#fbbf24", "#fde68a", "#f472b6", "#a78bfa", "#fff", "#f59e0b"];
      for (i = 0; i < 46; i++) h += '<i class="dr-conf" style="left:' + (Math.random() * 100).toFixed(1) + "%;background:" + c[i % 6] + ";--dx:" + Math.round(Math.random() * 120 - 60) + "px;--r:" + Math.round(Math.random() * 720 - 360) +
        "deg;animation-duration:" + (2.2 + Math.random() * 1.8).toFixed(2) + "s;animation-delay:" + (1.2 + Math.random() * 0.9).toFixed(2) + "s;width:" + (5 + Math.random() * 5).toFixed(1) + 'px"></i>';
    } else if (k === "L") {
      for (i = 0; i < 26; i++) h += '<i class="dr-ash" style="left:' + (Math.random() * 100).toFixed(1) + "%;--dx:" + Math.round(Math.random() * 60 - 30) + "px;animation-duration:" + (5 + Math.random() * 4).toFixed(2) + "s;animation-delay:" + (1.6 + Math.random() * 4).toFixed(2) + 's"></i>';
    }
    return h;
  }

  // Synthesised music for the outcome (the clash itself is the recorded "A epic" clash).
  var rev = null;
  function reverb(c) {
    if (rev) return rev;
    var L = c.sampleRate * 2.6, ir = c.createBuffer(2, L, c.sampleRate);
    for (var ch = 0; ch < 2; ch++) { var d = ir.getChannelData(ch); for (var i = 0; i < L; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / L, 3); }
    rev = c.createConvolver(); rev.buffer = ir;
    var g = c.createGain(); g.gain.value = 0.35; rev.connect(g); g.connect(c.destination);
    return rev;
  }
  function tone(c, f, t, dur, type, g, lp, wet, att) {
    var o = c.createOscillator(), e = c.createGain(), fl = c.createBiquadFilter();
    o.type = type; o.frequency.value = f; fl.type = "lowpass";
    fl.frequency.setValueAtTime(lp * 0.5, t); fl.frequency.linearRampToValueAtTime(lp, t + (att || 0.02) + 0.08);
    e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(g, t + (att || 0.02));
    e.gain.setValueAtTime(g, t + Math.max(dur - 0.15, 0.03)); e.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.35);
    o.connect(fl); fl.connect(e); e.connect(c.destination);
    if (wet) { var w = c.createGain(); w.gain.value = wet; e.connect(w); w.connect(reverb(c)); }
    o.start(t); o.stop(t + dur + 0.5);
  }
  function boom(c, t, f0, f1, g, dur) {
    var o = c.createOscillator(), e = c.createGain();
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + 0.25);
    e.gain.setValueAtTime(g, t); e.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(e); e.connect(c.destination); var w = c.createGain(); w.gain.value = 0.3; e.connect(w); w.connect(reverb(c));
    o.start(t); o.stop(t + dur + 0.1);
  }
  function hiss(c, t, dur, lo, g) {
    var L = Math.floor(c.sampleRate * dur), b = c.createBuffer(1, L, c.sampleRate), d = b.getChannelData(0);
    for (var i = 0; i < L; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / L, 2);
    var s = c.createBufferSource(), hp = c.createBiquadFilter(), e = c.createGain();
    s.buffer = b; hp.type = "highpass"; hp.frequency.value = lo; e.gain.value = g;
    s.connect(hp); hp.connect(e); e.connect(c.destination); var w = c.createGain(); w.gain.value = 0.4; e.connect(w); w.connect(reverb(c)); s.start(t);
  }
  function brass(c, f, t, dur, g) { [1, 1.003, 0.997].forEach(function (dt) { tone(c, f * dt, t, dur, "sawtooth", g / 3, 2600, 0.4, 0.03); }); }
  // t0 = AudioContext time at which the alert appeared
  function outcomeMusic(c, k, t0) {
    var s;
    if (k === "W") {
      s = t0 + 1.2;
      brass(c, 523.3, s, 0.1, 0.15); brass(c, 523.3, s + 0.12, 0.1, 0.15); brass(c, 523.3, s + 0.24, 0.1, 0.15);
      [523.3, 659.3, 784].forEach(function (f) { brass(c, f, s + 0.38, 0.32, 0.12); });
      [587.3, 740, 880].forEach(function (f) { brass(c, f, s + 0.72, 0.3, 0.12); });
      [784, 987.8, 1174.7, 1568].forEach(function (f) { brass(c, f, s + 1.06, 1.4, 0.1); });
      boom(c, s + 1.06, 100, 42, 0.7, 1);
      [2349, 2960, 3520, 4699].forEach(function (f, i) { tone(c, f, s + 1.2 + i * 0.07, 0.15, "sine", 0.05, 9000, 0.8, 0.005); });
    } else if (k === "L") {
      s = t0 + 1.75;
      boom(c, s, 85, 38, 0.55, 1.2); hiss(c, s, 0.18, 400, 0.18);
      tone(c, 110, s, 2.6, "sine", 0.12, 600, 0.5, 0.4); tone(c, 164.8, s, 2.6, "triangle", 0.04, 700, 0.5, 0.5);
      [[329.6, 0.3], [293.7, 0.85], [261.6, 1.4], [246.9, 1.95]].forEach(function (n, i) { tone(c, n[0], s + n[1], i === 3 ? 1.6 : 0.5, "triangle", 0.11, 1400, 0.9, 0.06); });
    } else {
      s = t0 + 1.2;
      [392, 523.3, 659.3].forEach(function (f) { brass(c, f, s, 1.2, 0.08); });
    }
  }
  function resultSound(k) {
    var c = ctx();
    if (!c || !soundOn()) return;
    function go() {
      var t0 = c.currentTime;
      if (clashBuf) {   // recorded clash, started so its impact (0.5 s in) lands as the blades meet
        var src = c.createBufferSource(), g = c.createGain();
        src.buffer = clashBuf; g.gain.value = 0.9; src.connect(g); g.connect(c.destination);
        src.start(t0 + 0.09, 0);
      } else {
        setTimeout(function () { clash(true); }, 580);
      }
      outcomeMusic(c, k, t0);
    }
    if (c.state === "running") go();
    else c.resume().then(function () { if (c.state === "running") go(); }, function () {});   // blocked: stay quiet
  }

  var resultQueue = [], resultOpts = null;
  function showResult(r, opts) {
    injectCss();
    if (!document.getElementById("dr-css")) {
      var st = document.createElement("style"); st.id = "dr-css"; st.textContent = RCSS; document.head.appendChild(st);
    }
    showing = true;
    resultOpts = opts || {};
    loadClash();
    var k = r.outcome === "won" ? "W" : r.outcome === "lost" ? "L" : "D";
    var name = nameOf({ challenger_name: r.opponent_name, challenger_user: r.opponent_user });
    var total = r.total || 10;
    var title = { W: "You won!", L: "Defeat", D: "It’s a draw" }[k];
    var body = {
      W: "<strong>" + esc(name) + "</strong> has been disarmed.",
      L: "<strong>" + esc(name) + "</strong> took this one. It was close.",
      D: "You and <strong>" + esc(name) + "</strong> finished level."
    }[k];
    var rematch = "duel.html?rematch=" + encodeURIComponent(r.opponent_id || "") + "&name=" + encodeURIComponent(name);
    var ov = document.createElement("div");
    ov.className = "dr-ov dr-" + k;
    ov.innerHTML = '<div class="dr-dim"></div>' + rParticles(k) +
      '<div class="dr-card" role="alertdialog" aria-modal="true" aria-labelledby="drTitle" aria-describedby="drBody">' + (k === "L" ? '<div class="dr-slate"></div>' : "") +
        rStage(k) +
        '<div class="dr-tag">Head-to-Head</div>' +
        '<h2 class="dr-title" id="drTitle">' + title + "</h2>" +
        '<div id="drBody"><p class="dr-body">' + body + "</p>" +
        '<div class="dr-score"><div class="dr-me"><b>' + r.my_score + "/" + total + "</b>You</div><div><b>" + r.their_score + "/" + total + "</b>" + esc(name) + "</div></div></div>" +
        '<div class="dr-act"><a class="dr-b1" href="' + rematch + '" data-dr="rematch">' + (k === "L" ? "Ask for a rematch" : "Rematch") + "</a>" +
        '<button class="dr-b2" type="button" data-dr="close">Back to duels</button></div>' +
      "</div>";
    document.body.appendChild(ov);
    resultSound(k);
    ov.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-dr]");
      if (!a) return;
      e.preventDefault();
      var go = a.getAttribute("data-dr") === "rematch" ? a.getAttribute("href") : (resultOpts.source === "duel" ? null : "duel.html");
      closeResult(r, go);
    });
    ov.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); closeResult(r, null); return; }
      if (e.key === "Tab") {
        var f = ov.querySelectorAll("a,button"), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    setTimeout(function () { var b = ov.querySelector(".dr-b1"); if (b) b.focus({ preventScroll: true }); }, 1800);
  }
  function closeResult(r, go) {
    seen["r:" + r.duel_id] = true;
    var done = (resultOpts && resultOpts.source === "dashboard" && sb)
      ? sb.rpc("ack_duel_results", { p_ids: [r.duel_id] }).then(function () {}, function () {})
      : Promise.resolve();
    var ov = document.querySelector(".dr-ov");
    if (ov) { ov.classList.add("dr-out"); setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 260); }
    showing = false;
    done.then(function () {
      if (go) { location.href = go; return; }
      if (resultQueue.length) { var n = resultQueue.shift(); setTimeout(function () { showResult(n, resultOpts); }, 350); }
      else setTimeout(check, 400);
    });
  }

  // ── Data ──────────────────────────────────────────────────────────────────
  function check() {
    if (showing || !sb) return;
    sb.rpc("get_unseen_duel_results").then(function (res) {
      if (showing) return;
      var done = ((res && res.data) || []).filter(function (x) { return !seen["r:" + x.duel_id]; });
      if (done.length) { resultQueue = done.slice(1); showResult(done[0], { source: "dashboard" }); return; }
      sb.rpc("get_unseen_duel_challenges").then(function (r) {
        if (r.error || showing) return;
        var rows = (r.data || []).filter(function (x) { return !seen[x.duel_id]; });
        if (rows.length) show(rows);
      }, function () {});
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
        .on("postgres_changes", { event: "*", schema: "public", table: "duels", filter: "challenger_id=eq." + uid }, soon)
        .subscribe();
    } catch (e) {}
    // Safety net if the realtime connection drops: re-check every minute while visible.
    pollTimer = setInterval(function () { if (!document.hidden) check(); }, 60000);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) { stopTitle(); check(); }
    });
  }

  // For other pages: preload() on page load, then clash() inside a click handler.
  function playClash(cb) { clashWhenReady(cb || null, true); }
  window.OssifyDuelAlert = { start: start, preload: loadClash, clash: playClash, result: showResult, _show: show };
})();
