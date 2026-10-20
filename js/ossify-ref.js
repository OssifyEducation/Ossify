/* Ossify — referral / affiliate link capture.
 *
 * Any page opened with ?ref=CODE (e.g. https://ossify…/?ref=SAM-X7K2 or /pricing.html?ref=LEEDS-MEDSOC)
 * remembers the code in this browser for 30 days (the most recent link wins), counts one visit
 * per code per browser per day, and tidies ?ref out of the address bar. login.html sends the
 * remembered code with sign-up; the database then records who referred the new account
 * (supabase/migrations/20261020_referral_programme.sql).
 *
 *   OssifyRef.get()  -> "SAM-X7K2" or null
 */
(function () {
  "use strict";
  var KEY = "ossify_ref", DAYS = 30, RE = /^[A-Z0-9][A-Z0-9-]{2,23}$/;
  var URL_ = "https://judtpdikbidvccclftvq.supabase.co/rest/v1/rpc/record_referral_visit";
  var PUB = "sb_publishable_-lNlSUZo3vinNc6RK3bwfg_rybh6Zfj";   // public key (also in every page)

  function norm(c) { c = String(c || "").trim().toUpperCase(); return RE.test(c) ? c : null; }
  function read() { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; } }

  function get() {
    var r = read();
    if (!r || !norm(r.code) || !(Date.now() - (r.at || 0) < DAYS * 864e5)) return null;
    return norm(r.code);
  }

  function capture() {
    var params, code;
    try { params = new URLSearchParams(location.search); } catch (e) { return; }
    code = norm(params.get("ref"));
    if (!params.has("ref")) return;
    if (code) {
      try { localStorage.setItem(KEY, JSON.stringify({ code: code, at: Date.now() })); } catch (e) {}
      // one visit per code per browser per day
      var vk = KEY + "_v_" + code, today = new Date().toISOString().slice(0, 10), last = null;
      try { last = localStorage.getItem(vk); } catch (e) {}
      if (last !== today) {
        try { localStorage.setItem(vk, today); } catch (e) {}
        try {
          fetch(URL_, { method: "POST", keepalive: true,
            headers: { apikey: PUB, Authorization: "Bearer " + PUB, "Content-Type": "application/json" },
            body: JSON.stringify({ p_code: code }) }).catch(function () {});
        } catch (e) {}
      }
    }
    // tidy the address bar so the code isn't re-shared by accident
    try {
      params.delete("ref");
      var q = params.toString();
      history.replaceState(null, "", location.pathname + (q ? "?" + q : "") + location.hash);
    } catch (e) {}
  }

  capture();
  window.OssifyRef = { get: get };
})();
