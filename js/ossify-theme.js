// Ossify — light/dark theme. Loaded in <head> so the saved theme applies before
// first paint (no white flash). Light is the default; dark is opt-in and remembered.
(function () {
  var KEY = 'ossify-theme';
  function get() { try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; } catch (e) { return 'light'; } }
  function apply(t) { document.documentElement.setAttribute('data-theme', t); }
  apply(get());
  window.ossifyToggleTheme = function () {
    var t = get() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, t); } catch (e) {}
    apply(t); sync();
  };
  function sync() {
    var b = document.getElementById('themeToggle'); if (!b) return;
    var dark = get() === 'dark';
    b.setAttribute('aria-pressed', String(dark));
    b.querySelector('span').textContent = dark ? 'Light mode' : 'Dark mode';
    b.title = dark ? 'Switch to light mode (Shift+D)' : 'Switch to dark mode (Shift+D)';
  }
  document.addEventListener('DOMContentLoaded', function () {
    var foot = document.querySelector('.sb-foot') || document.querySelector('.sb-bottom');
    if (!foot || document.getElementById('themeToggle')) return;
    var b = document.createElement('button');
    b.id = 'themeToggle'; b.type = 'button'; b.className = 'theme-toggle';
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span></span>';
    b.addEventListener('click', window.ossifyToggleTheme);
    foot.insertBefore(b, foot.firstChild);
    sync();
  });
})();
