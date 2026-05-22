/* ============================================================
   Pallavi Verma — Portfolio
   Hash-routed SPA · vanilla JS, no build step
   ============================================================ */

(function () {
  'use strict';

  // ----- Router -----------------------------------------------

  const views = document.querySelectorAll('[data-view]');
  const navLinks = document.querySelectorAll('.nav-links a[data-route]');

  function currentRoute() {
    const hash = window.location.hash || '#/';
    return hash.replace(/^#/, '') || '/';
  }

  function showRoute(route) {
    let found = false;
    views.forEach(v => {
      const match = v.dataset.view === route;
      v.classList.toggle('is-active', match);
      if (match) found = true;
    });
    // Fallback to home if route doesn't exist
    if (!found) {
      document.querySelector('[data-view="/"]').classList.add('is-active');
    }
    // Update nav active state
    navLinks.forEach(a => {
      a.classList.toggle('is-active', a.dataset.route === route);
    });
    // Close mobile nav
    document.body.classList.remove('nav-open');
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // Update page title
    const titles = {
      '/': 'Pallavi Verma — Digital Health Program Delivery',
      '/about': 'About — Pallavi Verma',
      '/experience': 'Experience — Pallavi Verma',
      '/programs': 'Programs — Pallavi Verma',
      '/behind-the-work': 'Behind the work — Pallavi Verma',
      '/ai-bot': 'AI Job Bot — Pallavi Verma',
      '/education': 'Education — Pallavi Verma'
    };
    document.title = titles[route] || titles['/'];
    // Run reveal observer on freshly visible content
    setupReveal();
  }

  function route() { showRoute(currentRoute()); }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);

  // ----- Experience tabs --------------------------------------

  const expTabs = document.querySelectorAll('.exp-tab');
  const expPanels = document.querySelectorAll('.exp-panel');

  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.exp;
      expTabs.forEach(t => t.classList.toggle('is-active', t === tab));
      expPanels.forEach(p => p.classList.toggle('is-active', p.dataset.exp === key));
    });
  });

  // ----- Mobile nav toggle ------------------------------------

  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  // ----- Reveal-on-scroll -------------------------------------

  // Add .reveal to a curated set of elements once per route
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
    '.bot-story',
    '.bot-card',
    '.bot-architecture',
    '.bot-shots',
    '.bot-lessons',
    '.bot-privacy',
    '.cert-timeline li',
    '.contact-card'
  ];

  let observer;
  function setupReveal() {
    if (observer) observer.disconnect();
    const targets = document.querySelectorAll(
      '.view.is-active ' + revealSelectors.join(', .view.is-active ')
    );
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i * 40, 600) + 'ms';
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(t => observer.observe(t));
  }

  // ----- Year footer (optional future use) --------------------
  // (kept inline in HTML for now)

})();
