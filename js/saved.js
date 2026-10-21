/* Saved high-yield summaries page (saved.html). Grouped by specialty, searchable, printable. */
var sb = null;
try { sb = window.supabase.createClient('https://judtpdikbidvccclftvq.supabase.co', 'sb_publishable_-lNlSUZo3vinNc6RK3bwfg_rybh6Zfj'); } catch (e) {}
function ossifySignOut() { if (sb) sb.auth.signOut().then(function () { location.href = 'login.html'; }); else location.href = 'login.html'; }

(function () {
  var ORDER = ['Cardiovascular', 'Dermatology / ENT / Eyes', 'Endocrinology / Metabolic', 'Gastroenterology / Nutrition',
    'Infectious Disease / Haematology / Immunology / Allergies / Genetics', 'Musculoskeletal', 'Paediatrics',
    'Pharmacology & Therapeutics', 'Psychiatry / Neurology', 'Renal / Urology', 'Reproductive', 'Respiratory'];
  var COLOURS = ['#e0679b', '#7c5cbf', '#2a9d8f', '#d97706', '#0ea5e9', '#65a30d', '#f472b6', '#8b5cf6', '#14b8a6', '#ea580c', '#db2777', '#3b82f6'];
  var items = [], filter = '', query = '';
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function colour(t) { var i = ORDER.indexOf(t); return COLOURS[i < 0 ? 0 : i]; }
  function slug(t) { return 'sec-' + String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
  function fmtDate(iso) { try { return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return ''; } }
  function snippet(s) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > 120 ? s.slice(0, 117).replace(/\s+\S*$/, '').replace(/[\s,.;:]+$/, '') + '…' : s; }
  function highlight(html) {
    if (!query) return html;
    var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return html.replace(/>([^<]+)</g, function (m, txt) { return '>' + txt.replace(re, '<mark>$1</mark>') + '<'; });
  }
  function matches(it) {
    if (!query) return true;
    var q = query.toLowerCase();
    return (it.high_yield_summary + ' ' + it.stem + ' ' + it.question_code + ' ' + it.topic + ' ' + it.domain).toLowerCase().indexOf(q) >= 0;
  }

  function render() {
    var root = $('svRoot'); root.removeAttribute('aria-busy');
    if (!items.length) {
      root.innerHTML = '<div class="sv-empty"><div class="sv-empty-ico"><svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></div>' +
        '<h2>No saved summaries yet</h2><p>After you answer a Clinical Problem Solving question, open its high-yield summary and press <strong>Save</strong>. It will appear here, grouped by specialty, ready to revise.</p>' +
        '<a href="practice.html">Go to Clinical Problem Solving</a></div>';
      return;
    }
    var topics = ORDER.filter(function (t) { return items.some(function (i) { return i.topic === t; }); })
      .concat(items.map(function (i) { return i.topic; }).filter(function (t, k, a) { return ORDER.indexOf(t) < 0 && a.indexOf(t) === k; }));
    var counts = {}; items.forEach(function (i) { counts[i.topic] = (counts[i.topic] || 0) + 1; });
    var hero = '<section class="sv-hero"><div class="sv-kicker">Your revision library</div><h1>Saved high-yield summaries</h1>' +
      '<p>Every summary you save from a Clinical Problem Solving question, grouped by specialty so you can revise one area at a time.</p>' +
      '<div class="sv-stats"><div class="sv-stat"><b>' + items.length + '</b>summar' + (items.length === 1 ? 'y' : 'ies') + '</div><div class="sv-stat"><b>' + topics.length + '</b>specialt' + (topics.length === 1 ? 'y' : 'ies') + '</div></div></section>';
    var tools = '<div class="sv-tools"><label class="sv-search"><span class="sr-only">Search your saved summaries</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>' +
      '<input id="svQ" type="search" placeholder="Search, e.g. troponin, NICE NG185" value="' + esc(query) + '" autocomplete="off"></label>' +
      '<div class="sv-chips" role="group" aria-label="Filter by specialty">' +
      '<button type="button" class="sv-chip" data-f="" aria-pressed="' + (!filter) + '">All<span>' + items.length + '</span></button>' +
      topics.map(function (t) { return '<button type="button" class="sv-chip" data-f="' + esc(t) + '" aria-pressed="' + (filter === t) + '">' + esc(short(t)) + '<span>' + counts[t] + '</span></button>'; }).join('') +
      '</div></div>';
    var shown = 0;
    var secs = topics.filter(function (t) { return !filter || filter === t; }).map(function (t) {
      var list = items.filter(function (i) { return i.topic === t && matches(i); });
      if (!list.length) return '';
      shown += list.length;
      return '<section class="sv-sec" id="' + slug(t) + '" aria-labelledby="' + slug(t) + '-h"><div class="sv-sec-hd"><span class="sv-dot" style="background:' + colour(t) + '"></span>' +
        '<h2 id="' + slug(t) + '-h">' + esc(t) + '</h2><span class="sv-count">' + list.length + '</span>' +
        '<a class="sv-go" href="practice.html?topic=' + encodeURIComponent(t) + '">Practise ' + esc(short(t)) + ' →</a></div><div class="sv-grid">' +
        list.map(function (it) {
          var body = typeof renderHighYieldSummary === 'function' ? renderHighYieldSummary(it.high_yield_summary) : esc(it.high_yield_summary);
          return '<article class="sv-card" style="--sv-c:' + colour(t) + '"><div class="sv-top"><span class="sv-badge">' + esc(it.question_code) + '</span>' +
            (it.domain ? '<span class="sv-badge dom">' + esc(it.domain) + '</span>' : '') +
            '<button type="button" class="sv-rm" data-rm="' + it.question_id + '" aria-label="Remove this summary"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>Remove</button></div>' +
            '<div class="sv-from">From: ' + esc(snippet(it.stem)) + '</div>' +
            '<div class="hys-body">' + highlight(body) + '</div>' +
            '<div class="sv-foot"><span>Saved ' + fmtDate(it.saved_at) + '</span><span>' + esc(it.type) + '</span></div></article>';
        }).join('') + '</div></section>';
    }).join('');
    root.innerHTML = hero + tools + (shown ? secs : '<div class="sv-none">No saved summaries match “' + esc(query) + '”.</div>');
    var inp = $('svQ');
    inp.addEventListener('input', function () { var pos = inp.selectionStart; query = inp.value.trim(); render(); var n = $('svQ'); n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} });
  }
  function short(t) {
    return ({ 'Dermatology / ENT / Eyes': 'Derm / ENT / Eyes', 'Endocrinology / Metabolic': 'Endocrine', 'Gastroenterology / Nutrition': 'Gastro',
      'Infectious Disease / Haematology / Immunology / Allergies / Genetics': 'Infection / Haem', 'Pharmacology & Therapeutics': 'Pharmacology',
      'Psychiatry / Neurology': 'Psych / Neuro' })[t] || t;
  }

  document.addEventListener('click', async function (e) {
    var chip = e.target.closest('.sv-chip');
    if (chip) { filter = chip.dataset.f; render(); return; }
    var rm = e.target.closest('[data-rm]');
    if (rm) {
      var id = Number(rm.dataset.rm), keep = items.slice();
      items = items.filter(function (i) { return i.question_id !== id; });
      if (filter && !items.some(function (i) { return i.topic === filter; })) filter = '';
      render();
      var r = await sb.rpc('unsave_summary', { p_question: id });
      if (r && r.error) { items = keep; render(); }
    }
  });

  (async function init() {
    if (!sb) { $('svRoot').innerHTML = '<div class="sv-none">Couldn’t connect to Ossify. Please reload.</div>'; return; }
    var s = await sb.auth.getSession(); var user = s.data && s.data.session && s.data.session.user;
    if (!user) { location.href = 'login.html'; return; }
    try { var nm = ossifyDisplayName(null, user); $('userAv').textContent = ossifyInitials(nm, user.email); $('userName').textContent = nm; $('userSub').textContent = 'Ossify member'; } catch (e) {}
    var r = await sb.rpc('get_saved_summaries');
    if (r.error) { $('svRoot').innerHTML = '<div class="sv-none">We couldn’t load your saved summaries just now. Please reload.</div>'; return; }
    items = (r.data || []).map(function (x) { x.question_id = Number(x.question_id); return x; });
    render();
  })();
})();
