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

    if (r.unscored) {
      // Not answered, or left incomplete when a timed paper ended: 0 marks, but show the key.
      var keyList = isRank ? q.key.order : q.key.correct;
      h += '<div class="ex-sec"><div class="ex-hd">' + (isRank ? "The keyed order" : "The keyed three") + "</div><p>" +
        (r.response.length ? "Your " + (isRank ? "partial ranking" : "choices") + ": <strong>" + r.response.join(" ") + "</strong> · " : "") +
        "Key: <strong>" + keyList.join(" ") + "</strong></p>" +
        "<p>" + (isRank ? "A ranking earns marks only once every option is placed." : "A multiple-choice answer earns marks only once three options are chosen.") +
        " Unanswered and incomplete questions score 0, as they would in the real paper.</p></div>";
    } else if (isRank) {
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
      var at = r.response.indexOf(id);
      var you = isRank ? (at >= 0 ? " · you ranked it " + (at + 1) : "") : (at >= 0 ? " · you chose it" : "");
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
