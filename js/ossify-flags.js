/* Ossify: flag CPS questions for review.
   Server: flag_question, unflag_question, flag_questions (bulk), get_flagged_ids, get_flagged_questions.
   The Flag button sits on every practice question; Timed Exam flags are added on submit.
   The dashboard "Flagged for review" box links to practice.html?source=flagged. */
(function () {
  var ids = new Set(), loaded = false, loading = null, listeners = [];
  function client() { try { return sb; } catch (e) { return window.sb || null; } }
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>';
  function label(on) { return ICON + "<span>" + (on ? "Flagged" : "Flag") + "</span>"; }
  function paint() {
    document.querySelectorAll("[data-flag-q]").forEach(function (b) {
      var on = ids.has(Number(b.dataset.flagQ));
      b.setAttribute("aria-pressed", on); b.classList.toggle("on", on); b.innerHTML = label(on);
      b.title = on ? "Flagged for review. Click to remove the flag." : "Flag this question to review later";
    });
    listeners.forEach(function (f) { try { f(ids.size); } catch (e) {} });
  }
  function load() {
    if (loading) return loading;
    var c = client(); if (!c) return Promise.resolve();
    loading = c.rpc("get_flagged_ids").then(function (r) {
      if (!r.error && Array.isArray(r.data)) r.data.forEach(function (x) { ids.add(Number(x)); });
      loaded = true; paint();
    }, function () {});
    return loading;
  }
  function toast(msg) {
    var t = document.getElementById("flagToast");
    if (!t) { t = document.createElement("div"); t.id = "flagToast"; t.className = "flag-toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }
  async function toggle(id) {
    id = Number(id); var c = client(); if (!c) return;
    var was = ids.has(id);
    if (was) ids.delete(id); else ids.add(id);
    paint();
    var r = await c.rpc(was ? "unflag_question" : "flag_question", { p_question: id });
    if (r && r.error) { if (was) ids.add(id); else ids.delete(id); paint(); toast("Couldn't update your flags. Please try again."); return; }
    toast(was ? "Flag removed." : "Flagged for review. Find it on your dashboard or under Flagged in practice.");
  }
  async function addMany(list) {
    var c = client(); if (!c || !list || !list.length) return;
    list.forEach(function (x) { ids.add(Number(x)); });
    try { await c.rpc("flag_questions", { p_questions: list.map(Number) }); } catch (e) {}
  }
  window.ossifyFlagBtn = function (qid) {
    if (qid == null) return "";
    var on = ids.has(Number(qid));
    setTimeout(function () { if (!loaded) load(); }, 0);
    return '<button type="button" class="q-flag' + (on ? " on" : "") + '" data-flag-q="' + Number(qid) + '" aria-pressed="' + on + '" onclick="event.stopPropagation();OssifyFlags.toggle(this.dataset.flagQ)">' + label(on) + "</button>";
  };
  window.OssifyFlags = { load: load, toggle: toggle, addMany: addMany, count: function () { return ids.size; }, loaded: function () { return loaded; },
    onChange: function (f) { listeners.push(f); } };

  var css = document.createElement("style");
  css.textContent =
    ".q-flag{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;border-radius:20px;border:0.5px solid var(--lav-border);background:var(--lav-card,#fff);color:var(--muted);font:600 11.5px var(--font-sans);cursor:pointer;transition:background .15s,color .15s,border-color .15s;flex-shrink:0;}" +
    ".q-flag svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}" +
    ".q-flag:hover{border-color:var(--pk-border,#f0a8c8);color:#9b2058;}" +
    ".q-flag.on{background:var(--pk-pale,#fce7f0);border-color:var(--pk-border,#f0a8c8);color:#9b2058;}" +
    ".q-flag.on svg{fill:var(--pk-mid,#f472b6);stroke:#9b2058;}" +
    ".q-badge-row .q-flag{margin-left:auto;} .q-badge-row .q-flag + .rr{margin-left:0;}" +
    ".flag-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);background:var(--pu-dark);color:#fff;font:500 13px var(--font-sans);padding:10px 16px;border-radius:10px;box-shadow:0 10px 30px rgba(61,31,122,.3);opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;z-index:600;max-width:calc(100vw - 32px);text-align:center;}" +
    ".flag-toast.show{opacity:1;transform:translate(-50%,0);}";
  document.head.appendChild(css);
})();
