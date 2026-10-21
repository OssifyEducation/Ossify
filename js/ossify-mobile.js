// Ossify — small screens (≤860px): the fixed sidebar becomes a slide-out menu
// opened from a button in the top bar. Closes on scrim tap, Escape or link tap.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var sb = document.querySelector('aside.sb'); var bar = document.querySelector('.topbar');
    if (!sb || !bar || document.getElementById('navBurger')) return;
    if (!sb.id) sb.id = 'appSidebar';
    var b = document.createElement('button');
    b.id = 'navBurger'; b.type = 'button'; b.className = 'nav-burger';
    b.setAttribute('aria-label', 'Open menu'); b.setAttribute('aria-controls', sb.id); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';
    bar.insertBefore(b, bar.firstChild);
    var scrim = document.createElement('div'); scrim.className = 'nav-scrim'; document.body.appendChild(scrim);
    // kb = opened/closed with the keyboard. Only then is focus moved onto a link (which shows the focus ring);
    // after a tap or click, focus goes to the menu itself so screen readers still land in it, with no ring.
    function set(open, kb) {
      document.body.classList.toggle('nav-open', open);
      b.setAttribute('aria-expanded', String(open)); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) {
        if (kb) { var a = sb.querySelector('a.nv'); if (a) a.focus(); }
        else { sb.setAttribute('tabindex', '-1'); sb.focus({ preventScroll: true }); }
      } else if (document.activeElement && sb.contains(document.activeElement)) {
        if (kb) b.focus(); else document.activeElement.blur();
      }
    }
    b.addEventListener('click', function (e) { set(!document.body.classList.contains('nav-open'), e.detail === 0); });
    scrim.addEventListener('click', function () { set(false); });
    sb.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('nav-open')) set(false, true); });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) { if (m.matches) set(false); });
  });
})();
