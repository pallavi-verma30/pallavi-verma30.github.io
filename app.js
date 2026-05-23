/* ============================================================
   Pallavi Verma — Portfolio
   Hash-routed SPA · vanilla JS, no build step
   ============================================================ */

(function () {
  'use strict';

  // ----- Mobile nav toggle (FIRST, so it works even if anything else fails) -----

  function setupMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinksEl = document.querySelector('.nav-links');
    if (!navToggle) return;

    // Toggle on hamburger click
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      document.body.classList.toggle('nav-open');
    });

    // Close menu when any nav link is tapped
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
      });
    });

    // Close menu when tapping outside it
    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (navToggle.contains(e.target)) return;
      if (navLinksEl && navLinksEl.contains(e.target)) return;
      document.body.classList.remove('nav-open');
    });
  }

  // ----- Router -----------------------------------------------

  function setupRouter() {
    const views = document.querySelectorAll('[data-view]');
    const navLinks = document.querySelectorAll('.nav-links a[data-route]');

    function currentRoute() {
      const hash = window.location.hash || '#/';
      return hash.replace(/^#/, '') || '/';
    }

    const titles = {
      '/': 'Pallavi Verma — Digital Health Program Delivery',
      '/about': 'About — Pallavi Verma',
      '/experience': 'Experience — Pallavi Verma',
      '/programs': 'Programs — Pallavi Verma',
      '/behind-the-work': 'Behind the work — Pallavi Verma',
      '/ai-bot': 'AI Job Bot — Pallavi Verma',
      '/education': 'Education — Pallavi Verma'
    };

    function showRoute(route) {
      let found = false;
      views.forEach(function (v) {
        const match = v.dataset.view === route;
        v.classList.toggle('is-active', match);
        if (match) found = true;
      });
      if (!found) {
        const home = document.querySelector('[data-view="/"]');
        if (home) home.classList.add('is-active');
      }
      navLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.dataset.route === route);
      });
      document.body.classList.remove('nav-open');
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.title = titles[route] || titles['/'];
      setupReveal();
    }

    function route() { showRoute(currentRoute()); }

    window.addEventListener('hashchange', route);
    route();
  }

  // ----- Experience tabs --------------------------------------

  function setupExpTabs() {
    const expTabs = document.querySelectorAll('.exp-tab');
    const expPanels = document.querySelectorAll('.exp-panel');
    expTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const key = tab.dataset.exp;
        expTabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
        expPanels.forEach(function (p) { p.classList.toggle('is-active', p.dataset.exp === key); });
      });
    });
  }

  // ----- Reveal-on-scroll -------------------------------------

  const revealSelectors = [
    '.hero-text > *',
    '.hero-photo',
    '.stat',
    '.pillar',
    '.about-text p',
    '.side-card',
    '.leadership-list li',
    '.exp-panel.is-active',
    '.program',
    '.story',
    '.bot-story',
    '.bot-card',
    '.bot-architecture',
    '.bot-shots',
    '.bot-lessons',
    '.bot-privacy',
    '.cert-timeline li',
    '.contact-card'
  ];

  let observer = null;
  function setupReveal() {
    if (observer) observer.disconnect();
    const targets = document.querySelectorAll(
      '.view.is-active ' + revealSelectors.join(', .view.is-active ')
    );
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i * 40, 600) + 'ms';
    });
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (t) { observer.observe(t); });
  }

  // ----- Boot -------------------------------------------------

  function init() {
    try { setupMobileNav(); } catch (err) { console.error('Mobile nav setup failed:', err); }
    try { setupRouter(); }    catch (err) { console.error('Router setup failed:', err); }
    try { setupExpTabs(); }   catch (err) { console.error('Exp tabs setup failed:', err); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
