/* Ossify: save CPS high-yield summaries for later.
   Server: save_summary(p_question), unsave_summary(p_question), get_saved_summaries().
   The Save button lives on the high-yield summary panel (js/ossify-tutor.js);
   saved.html lists everything saved, grouped by specialty. */
(function () {
  var ids = new Set(), loaded = false, loading = null;
  function client() { try { return sb; } catch (e) { return window.sb || null; } }   // each page creates its own Supabase client
  function paint() {
    document.querySelectorAll("[data-hys-save]").forEach(function (b) {
      var on = ids.has(Number(b.dataset.hysSave));
      b.setAttribute("aria-pressed", on);
      b.classList.toggle("on", on);
      b.innerHTML = (on ? ICON_ON : ICON_OFF) + "<span>" + (on ? "Saved" : "Save") + "</span>";
      b.title = on ? "Saved to your summaries. Click to remove." : "Save this summary to read later";
    });
  }
  var ICON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  var ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="currentColor"/></svg>';
  function load() {
    if (loading) return loading;
    var c = client(); if (!c) return Promise.resolve();
    loading = c.rpc("get_saved_summary_ids").then(function (r) {
      if (!r.error && Array.isArray(r.data)) r.data.forEach(function (x) { ids.add(Number(x)); });
      loaded = true; paint();
    }, function () {});
    return loading;
  }
  function toast(msg) {
    var t = document.getElementById("hysToast");
    if (!t) { t = document.createElement("div"); t.id = "hysToast"; t.className = "hys-toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  async function toggle(id) {
    id = Number(id); var c = client(); if (!c) return;
    var was = ids.has(id);
    if (was) ids.delete(id); else ids.add(id);
    paint();
    var r = await c.rpc(was ? "unsave_summary" : "save_summary", { p_question: id });
    if (r && r.error) { if (was) ids.add(id); else ids.delete(id); paint(); toast("Couldn't update your saved summaries. Please try again."); return; }
    toast(was ? "Removed from your saved summaries." : 'Saved. Find it any time in <a href="saved.html">Saved summaries</a>.');
  }
  // Button HTML for the high-yield panel header (clicks don't open/close the panel)
  window.ossifyHysSaveBtn = function (qid) {
    if (qid == null) return "";
    var on = ids.has(Number(qid));
    setTimeout(function () { if (!loaded) load(); }, 0);
    return '<button type="button" class="hys-save' + (on ? " on" : "") + '" data-hys-save="' + Number(qid) + '" aria-pressed="' + on + '" onclick="event.stopPropagation();OssifySaved.toggle(this.dataset.hysSave)">' +
      (on ? ICON_ON : ICON_OFF) + "<span>" + (on ? "Saved" : "Save") + "</span></button>";
  };
  window.OssifySaved = { load: load, toggle: toggle, has: function (id) { return ids.has(Number(id)); }, _ids: ids, paint: paint };

  var css = document.createElement("style");
  css.textContent =
    ".hys-save{display:inline-flex;align-items:center;gap:5px;margin-left:auto;margin-right:10px;padding:4px 10px;border-radius:20px;border:0.5px solid var(--lav-border);background:var(--lav-card,#fff);color:var(--pu-mid);font:600 11.5px var(--font-sans);cursor:pointer;transition:background .15s,color .15s,border-color .15s;}" +
    ".hys-save svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round;}" +
    ".hys-save:hover{background:var(--pu-ultra);border-color:var(--pu-light);}" +
    ".hys-save.on{background:var(--teal-l);border-color:#99d8c4;color:var(--teal-d);}" +
    ".hys-save:focus-visible{outline:2px solid var(--pu-mid);outline-offset:2px;}" +
    ".hys-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);background:var(--pu-dark);color:#fff;font:500 13px var(--font-sans);padding:10px 16px;border-radius:10px;box-shadow:0 10px 30px rgba(61,31,122,.3);opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;z-index:600;}" +
    ".hys-toast.show{opacity:1;transform:translate(-50%,0);pointer-events:auto;}" +
    ".hys-toast a{color:#c4b5fd;font-weight:600;}";
  document.head.appendChild(css);
})();
