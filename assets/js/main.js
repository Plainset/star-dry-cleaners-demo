/* Star Dry Cleaners — nav toggle + reveal observer.
   The reveal mechanism is deliberately ours, not engine.css's scroll-linked
   animation: that strands elements at partial opacity. Content is visible by
   default in CSS, so a starved callback can never leave the page blank. */
(function () {
  'use strict';

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
        return;
      }
      /* Keep Tab inside the open panel — otherwise focus lands on controls the
         panel is covering, which is invisible to a keyboard user. */
      if (e.key !== 'Tab') return;
      var items = [toggle].concat([].slice.call(nav.querySelectorAll('a[href]')));
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------- reveal ---------- */
  var items = [].slice.call(document.querySelectorAll('[data-reveal],[data-reveal-hero]'));
  if (!items.length) return;

  function show(el) { el.classList.add('is-visible'); }

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(show);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

  items.forEach(function (el) {
    /* Pre-check: anything already in view at first paint must not wait for a
       callback that may not fire until the user scrolls. */
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { show(el); return; }
    io.observe(el);
  });

  /* Backstops: a scroll listener and a hard timeout, so nothing can stay
     hidden because the observer was starved or never fired. */
  function sweep() {
    items.forEach(function (el) {
      if (el.classList.contains('is-visible')) return;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) { show(el); io.unobserve(el); }
    });
  }
  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep, { passive: true });
  setTimeout(function () { items.forEach(show); }, 8000);
})();
