/* Ossify — Professional Dilemmas (SJT) shared rendering.
 * Pure HTML-string builders used by Topic Mode (js/sjt-app.js) and Mock Mode
 * (js/sjt-mock.js), so both show questions, answers and reviews identically.
 * Depends on js/sjt-engine.js (OssifySJT) for the model name only.
 */
(function () {
  "use strict";
  var SJT = window.OssifySJT;
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function rich(s) { return esc(s).replace(/\[([A-H])\]/g, '<strong class="optref">$1</strong>'); }
  function paras(s) { return String(s || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }
  function optText(q, id) { var o = q.options.filter(function (x) { return x.id === id; })[0]; return o ? o.text : id; }
  var GRIP = '<span class="grip" aria-hidden="true"><svg viewBox="0 0 10 16"><circle cx="2.5" cy="3" r="1.4"/><circle cx="7.5" cy="3" r="1.4"/><circle cx="2.5" cy="8" r="1.4"/><circle cx="7.5" cy="8" r="1.4"/><circle cx="2.5" cy="13" r="1.4"/><circle cx="7.5" cy="13" r="1.4"/></svg></span>';
  // Ranking: drag options from the list into the numbered slots (or tap to place in the next slot),
  // drag placed options to reorder them, or drag one back to the list to remove it.
  function rankingControl(q, draft) {
    var n = q.options.length;
    var slots = "";
    for (var i = 0; i < n; i++) {
      var id = draft[i];
      var end = i === 0 ? "Most" : i === n - 1 ? "Least" : "";
      if (id) {
        slots += '<li class="slot filled" data-slot="' + i + '" data-drag="' + id + '" tabindex="0" aria-label="Rank ' + (i + 1) + ": option " + id + ". Drag to reorder, or use Alt plus arrow keys.\">" +
          GRIP + '<span class="slot-n">' + (i + 1) + "</span>" +
          '<span class="slot-txt"><span class="slot-ltr">' + id + "</span>" + esc(optText(q, id)) + "</span>" +
          '<span class="slot-ctl">' +
          '<button type="button" class="ic-btn sr-only" data-move="-1" data-slot="' + i + '" aria-label="Move ' + id + ' up"' + (i === 0 ? " disabled" : "") + ">↑</button>" +
          '<button type="button" class="ic-btn sr-only" data-move="1" data-slot="' + i + '" aria-label="Move ' + id + ' down"' + (i === draft.length - 1 ? " disabled" : "") + ">↓</button>" +
          '<button type="button" class="ic-btn" data-remove="' + i + '" aria-label="Remove ' + id + ' from ranking">✕</button></span></li>';
      } else {
        slots += '<li class="slot" data-slot="' + i + '" aria-label="Rank ' + (i + 1) + ', empty"><span class="slot-n">' + (i + 1) + "</span>" +
          '<span class="slot-drop">' + (end ? end + " appropriate" : "") + "</span></li>";
      }
    }
    var pool = q.options.filter(function (o) { return draft.indexOf(o.id) < 0; });
    return '<div class="rank-wrap" data-rank="' + q.id + '">' +
      '<div><div class="zone-lbl" id="rankLbl">Your ranking <span class="hint">1 = most appropriate</span></div><ol class="slots" aria-labelledby="rankLbl">' + slots + "</ol></div>" +
      '<div><div class="zone-lbl" id="poolLbl">Options <span class="hint">' + (pool.length ? "Drag into your ranking, or tap to place" : "All placed") + "</span></div>" +
      '<div class="pool" data-pool="1" role="group" aria-labelledby="poolLbl">' +
      (pool.length ? pool.map(function (o) {
        return '<button type="button" class="opt" data-place="' + o.id + '" data-drag="' + o.id + '" aria-label="Place option ' + o.id + " at rank " + (draft.length + 1) + ": " + esc(o.text) + '">' + GRIP + '<span class="opt-ltr">' + o.id + '</span><span class="opt-txt">' + esc(o.text) + "</span></button>";
      }).join("") : '<div class="pool-empty">Drag to reorder, or drag an option back here to remove it.</div>') +
      "</div></div></div>";
  }

  // ── Drag and drop for the ranking control ───────────────────────────────
  // Works with a mouse (drag straight away) and on touch screens (press and hold, then drag).
  // On drop it fires a "sjt:rank" event on document with { draft, msg }; Topic and Mock modes listen for it.
  (function dragRanking() {
    var drag = null, suppressClick = false;
    function draftOf(wrap) { return [].slice.call(wrap.querySelectorAll(".slot.filled")).map(function (s) { return s.dataset.drag; }); }
    function clear(wrap) { wrap.querySelectorAll(".drop-target,.drop-pool").forEach(function (el) { el.classList.remove("drop-target", "drop-pool"); }); }
    function targetAt(wrap, x, y) {
      var pool = wrap.querySelector("[data-pool]"), pr = pool.getBoundingClientRect();
      if (x >= pr.left - 8 && x <= pr.right + 8 && y >= pr.top - 8 && y <= pr.bottom + 8) return { pool: true, el: pool };
      var slots = [].slice.call(wrap.querySelectorAll(".slot")), best = null, bd = Infinity;
      var list = wrap.querySelector(".slots").getBoundingClientRect();
      if (x < list.left - 40 || x > list.right + 40) return null;
      slots.forEach(function (s) { var r = s.getBoundingClientRect(), cy = (r.top + r.bottom) / 2, d = Math.abs(y - cy); if (d < bd) { bd = d; best = s; } });
      if (!best || bd > 120) return null;
      return { slot: +best.dataset.slot, el: best };
    }
    function start(ev) {
      var d = drag; d.active = true;
      var r = d.src.getBoundingClientRect();
      d.dx = d.x0 - r.left; d.dy = d.y0 - r.top;
      var g = d.src.cloneNode(true);
      g.classList.add("drag-ghost"); g.removeAttribute("id");
      g.style.width = r.width + "px"; g.style.left = r.left + "px"; g.style.top = r.top + "px";
      document.body.appendChild(g); d.ghost = g;
      d.src.classList.add("dragging"); document.body.classList.add("sjt-dragging");
      if (navigator.vibrate && d.touch) try { navigator.vibrate(8); } catch (e) {}
      move(ev);
    }
    function move(ev) {
      var d = drag; d.x = ev.clientX; d.y = ev.clientY;
      d.ghost.style.left = (d.x - d.dx) + "px"; d.ghost.style.top = (d.y - d.dy) + "px";
      clear(d.wrap);
      var t = targetAt(d.wrap, d.x, d.y); d.target = t;
      if (t && t.pool) { if (d.from >= 0) t.el.classList.add("drop-pool"); }
      else if (t) t.el.classList.add("drop-target");
    }
    function autoscroll() {
      if (!drag || !drag.active) return;
      var y = drag.y, h = window.innerHeight, v = y < 70 ? -12 : y > h - 70 ? 12 : 0;
      if (v) { window.scrollBy(0, v); var m = document.querySelector("main.q-area, #mainArea"); if (m && m.scrollHeight > m.clientHeight) m.scrollTop += v; move({ clientX: drag.x, clientY: drag.y }); }
      drag.raf = requestAnimationFrame(autoscroll);
    }
    function finish(ok) {
      var d = drag; drag = null;
      if (!d) return;
      clearTimeout(d.timer); cancelAnimationFrame(d.raf);
      if (!d.active) return;
      suppressClick = true; setTimeout(function () { suppressClick = false; }, 0);
      d.ghost.remove(); d.src.classList.remove("dragging"); document.body.classList.remove("sjt-dragging"); clear(d.wrap);
      var t = d.target; if (!ok || !t) return;
      var draft = draftOf(d.wrap), id = d.id, msg;
      if (t.pool) {
        if (d.from < 0) return;
        draft.splice(d.from, 1); msg = "Option " + id + " removed from the ranking.";
      } else {
        if (d.from >= 0) draft.splice(d.from, 1);
        var k = Math.min(t.slot, draft.length);
        if (d.from === k && d.from >= 0) return;
        draft.splice(k, 0, id); msg = "Option " + id + " placed at rank " + (k + 1) + ".";
      }
      document.dispatchEvent(new CustomEvent("sjt:rank", { detail: { draft: draft, msg: msg } }));
    }
    document.addEventListener("pointerdown", function (ev) {
      if (ev.button !== 0 || drag) return;
      var src = ev.target.closest && ev.target.closest("[data-drag]");
      if (!src || ev.target.closest("[data-remove],[data-move]")) return;
      var wrap = src.closest(".rank-wrap"); if (!wrap) return;
      var slot = src.closest(".slot.filled");
      drag = { src: src, wrap: wrap, id: src.dataset.drag, from: slot ? +slot.dataset.slot : -1, x0: ev.clientX, y0: ev.clientY, x: ev.clientX, y: ev.clientY,
        touch: ev.pointerType === "touch", active: false, pid: ev.pointerId };
      if (drag.touch) drag.timer = setTimeout(function () { if (drag && !drag.active) { start({ clientX: drag.x, clientY: drag.y }); drag.raf = requestAnimationFrame(autoscroll); } }, 220);
    });
    document.addEventListener("pointermove", function (ev) {
      if (!drag || ev.pointerId !== drag.pid || drag.touch) return;   // touch drags are tracked with touch events below
      if (!drag.active) {
        var dist = Math.abs(ev.clientX - drag.x0) + Math.abs(ev.clientY - drag.y0);
        drag.x = ev.clientX; drag.y = ev.clientY;
        if (drag.touch) { if (dist > 10) { clearTimeout(drag.timer); drag = null; } return; }   // a swipe: let the page scroll
        if (dist < 5) return;
        start(ev); drag.raf = requestAnimationFrame(autoscroll); return;
      }
      ev.preventDefault(); move(ev);
    });
    document.addEventListener("pointerup", function (ev) { if (drag && !drag.touch && ev.pointerId === drag.pid) finish(true); });
    document.addEventListener("pointercancel", function (ev) { if (drag && !drag.touch && ev.pointerId === drag.pid) finish(false); });
    // Touch: press and hold to pick up; a quick swipe still scrolls the page
    document.addEventListener("touchmove", function (ev) {
      if (!drag || !drag.touch) return;
      var tp = ev.touches[0]; if (!tp) return;
      if (!drag.active) {
        if (Math.abs(tp.clientX - drag.x0) + Math.abs(tp.clientY - drag.y0) > 10) { clearTimeout(drag.timer); drag = null; }
        else { drag.x = tp.clientX; drag.y = tp.clientY; }
        return;
      }
      ev.preventDefault(); move({ clientX: tp.clientX, clientY: tp.clientY });
    }, { passive: false });
    document.addEventListener("touchend", function () { if (drag && drag.touch) finish(true); });
    document.addEventListener("touchcancel", function () { if (drag && drag.touch) finish(false); });
    document.addEventListener("click", function (ev) { if (suppressClick) { ev.stopPropagation(); ev.preventDefault(); suppressClick = false; } }, true);
    document.addEventListener("contextmenu", function (ev) { if (drag) ev.preventDefault(); });
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && drag) finish(false); });
  })();

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

    if (r.unscored) {
      // Not answered, or left incomplete when a timed paper ended: 0 marks, but show the key.
      var keyList = isRank ? q.key.order : q.key.correct;
      h += '<div class="ex-sec"><div class="ex-hd">' + (isRank ? "The keyed order" : "The keyed three") + "</div><p>" +
        (r.response.length ? "Your " + (isRank ? "partial ranking" : "choices") + ": <strong>" + r.response.join(" ") + "</strong> · " : "") +
        "Key: <strong>" + keyList.join(" ") + "</strong></p>" +
        "<p>" + (isRank ? "A ranking earns marks only once every option is placed." : "A multiple-choice answer earns marks only once three options are chosen.") +
        " Unanswered and incomplete questions score 0, as they would in the real paper.</p></div>";
    } else if (isRank) {
      // Rows in the order the user ranked them (Your choice reads 1, 2, 3… down the page)
      var rows = r.response.map(function (id) {
        var b = r.breakdown.filter(function (x) { return x.optionId === id; })[0];
        return "<tr><td class=\"ltr\">" + id + '</td><td class="hide-sm">' + esc(optText(q, id)) + '</td><td class="c">' + b.givenRank + '</td><td class="c">' + b.idealRank + '</td><td class="c">' + marksPill(b.marks, b.max) + '<div style="font-size:10.5px;color:var(--muted);margin-top:2px">' + placesText(b.placesOut) + "</div></td></tr>";
      }).join("");
      h += '<table class="cmp"><caption class="sr-only">Your ranking compared with the right answer</caption><thead><tr><th>Option</th><th class="hide-sm">Action</th><th class="c">Your choice</th><th class="c">Right answer</th><th class="c">Marks</th></tr></thead><tbody>' + rows + "</tbody></table>" +
        '<div class="ex-sec"><div class="ex-hd">Order compared</div><p>Your order: <strong>' + r.response.join(" ") + "</strong> · Right order: <strong>" + r.key.join(" ") + "</strong></p>" +
        "<p>Each option earns up to 4 marks: 4 in its keyed position, then one mark fewer for each place away. Swapping two neighbouring options therefore costs only 2 marks in total, which is why a sensible but imperfect order still scores well.</p></div>";
    } else {
      var rowsMc = q.options.map(function (o) {
        var chose = r.response.indexOf(o.id) >= 0, keyed = r.key.indexOf(o.id) >= 0;
        var marks = chose && keyed ? 4 : 0;
        var res = chose ? (keyed ? '<span class="pill ok">+4</span>' : '<span class="pill lo">0</span>') : (keyed ? '<span class="pill na">missed</span>' : "");
        return "<tr><td class=\"ltr\">" + o.id + '</td><td class="hide-sm">' + esc(o.text) + '</td><td class="c">' + (chose ? "✓" : "") + '</td><td class="c">' + (keyed ? "✓" : "") + '</td><td class="c">' + res + "</td></tr>";
      }).join("");
      h += '<table class="cmp"><caption class="sr-only">Your choices compared with the right answers</caption><thead><tr><th>Option</th><th class="hide-sm">Action</th><th class="c">Your choice</th><th class="c">Right answer</th><th class="c">Marks</th></tr></thead><tbody>' + rowsMc + "</tbody></table>" +
        '<div class="ex-sec"><div class="ex-hd">How this was marked</div><p>Each of the three keyed actions you chose earns 4 marks, up to 12. Choosing an action outside the key costs nothing beyond the 4 marks you could have earned with a keyed one, as there is no negative marking.</p></div>';
    }

    var ex = q.explanation;
    h += '<div class="ex-sec"><div class="ex-hd">The judgement being tested</div><p>' + rich(ex.issue) + "</p></div>" +
      '<div class="ex-sec"><div class="ex-hd">What matters in the scenario</div><p>' + rich(ex.keyDetails) + "</p></div>" +
      '<div class="ex-sec"><div class="ex-hd">' + (isRank ? "Why the key is ordered this way" : "Why these three") + "</div><p>" + rich(ex.reasoning) + "</p>" + (ex.competing ? "<p>" + rich(ex.competing) + "</p>" : "") + "</div>";

    var order = isRank ? q.key.order : q.options.map(function (o) { return o.id; });
    h += '<div class="ex-sec"><div class="ex-hd">Option by option</div>' + order.map(function (id) {
      var o = q.options.filter(function (x) { return x.id === id; })[0];
      var tag = isRank ? "Key rank " + (q.key.order.indexOf(id) + 1) : (q.key.correct.indexOf(id) >= 0 ? "Right answer" : "Not a right answer");
      var at = r.response.indexOf(id);
      var you = isRank ? (at >= 0 ? " · you ranked it " + (at + 1) : "") : (at >= 0 ? " · your choice" : "");
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


  window.OssifySJTUI = {
    esc: esc, rich: rich, paras: paras, optText: optText,
    rankingControl: rankingControl, mcControl: mcControl, lockedAnswer: lockedAnswer,
    marksPill: marksPill, placesText: placesText, reviewHtml: reviewHtml
  };
})();
