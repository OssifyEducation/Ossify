// Ossify — keyboard shortcuts on every app page.
//   ?        show / hide this help
//   Shift+D  switch light / dark mode
//   g then d / p / e / l / a   go to Dashboard / Practice / Timed Exam / Leaderboard / My profile
// "g" jumps are off while a question is on screen (letters choose answers there):
// pages set window.OSSIFY_LETTER_KEYS = () => true while that is the case.
// Pages add their own entries via window.OSSIFY_PAGE_SHORTCUTS = [[keys, description], …].
(function () {
  var GO = { d: ['dashboard.html', 'Dashboard'], p: ['practice.html', 'Practice'], e: ['exam.html', 'Timed Exam'],
             l: ['leaderboard.html', 'Leaderboard'], a: ['account.html', 'My profile'] };
  var gPending = false, gTimer = null, lastFocus = null;
  function typing(t) { return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); }
  function letterKeysActive() { try { return !!(window.OSSIFY_LETTER_KEYS && window.OSSIFY_LETTER_KEYS()); } catch (e) { return false; } }
  function kbd(k) { return k.split(' ').map(function (p) { return p === 'then' ? '<span class="ks-then">then</span>' : '<kbd>' + p + '</kbd>'; }).join(' '); }
  function row(k, d) { return '<div class="ks-row"><span class="ks-keys">' + kbd(k) + '</span><span>' + d + '</span></div>'; }
  function open() {
    if (document.getElementById('ksHelp')) return close();
    lastFocus = document.activeElement;
    var page = window.OSSIFY_PAGE_SHORTCUTS || [];
    var html = '<div class="ks-bg" id="ksHelp"><div class="ks-modal" role="dialog" aria-modal="true" aria-labelledby="ksTitle">' +
      '<div class="ks-head"><h2 id="ksTitle">Keyboard shortcuts</h2><button class="ks-x" type="button" aria-label="Close">✕</button></div>' +
      (page.length ? '<h3>On this page</h3>' + page.map(function (r) { return row(r[0], r[1]); }).join('') : '') +
      '<h3>Everywhere</h3>' + row('?', 'Show or hide shortcuts') + row('Shift D', 'Switch light / dark mode') +
      Object.keys(GO).map(function (k) { return row('g then ' + k, 'Go to ' + GO[k][1]); }).join('') +
      (letterKeysActive() ? '<p class="ks-note">"g" shortcuts are paused while a question is on screen, because letters choose answers.</p>' : '') +
      '</div></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    var bg = document.getElementById('ksHelp');
    bg.addEventListener('click', function (e) { if (e.target === bg) close(); });
    bg.querySelector('.ks-x').addEventListener('click', close);
    bg.querySelector('.ks-x').focus();
  }
  function close() { var m = document.getElementById('ksHelp'); if (m) m.remove(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  window.ossifyShortcutsHelp = open;
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.getElementById('ksHelp')) {
      if (e.key === 'Escape' || e.key === '?') { e.preventDefault(); close(); }
      if (e.key === 'Tab') { e.preventDefault(); document.querySelector('#ksHelp .ks-x').focus(); }
      return;
    }
    if (typing(e.target)) return;
    if (e.key === '?') { e.preventDefault(); open(); return; }
    if (e.shiftKey && (e.key === 'D' || e.key === 'd')) { if (window.ossifyToggleTheme) { e.preventDefault(); window.ossifyToggleTheme(); } return; }
    if (e.shiftKey || letterKeysActive()) { gPending = false; return; }
    var k = e.key.toLowerCase();
    if (gPending && GO[k]) { e.preventDefault(); gPending = false; location.href = GO[k][0]; return; }
    if (k === 'g') { gPending = true; clearTimeout(gTimer); gTimer = setTimeout(function () { gPending = false; }, 1200); return; }
    gPending = false;
  });
})();
