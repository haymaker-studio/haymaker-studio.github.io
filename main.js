(function () {
  // Mark JS as enabled — unlocks CSS animation classes
  document.documentElement.classList.add('js-enabled');

  // ── Cookie Banner ────────────────────────────────────────────
  var COOKIE_KEY = 'hm_cookie_consent';

  function buildBannerHTML() {
    return '<div id="hm-cookie-banner" class="cookie-banner" role="dialog" aria-label="Cookie consent">' +
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' +
          '<strong class="cookie-banner-title">We use cookies.</strong>' +
          '<span class="cookie-banner-body">Strictly necessary cookies keep the site running. We also use Mixpanel, Amplitude, and Firebase for analytics — aggregated, nothing personally identifying. No ads, no data selling. <a href="cookie-policy">Learn more</a></span>' +
        '</p>' +
        '<div class="cookie-banner-actions">' +
          '<button id="hm-cookie-accept" class="btn btn-primary">Accept all</button>' +
          '<button id="hm-cookie-decline" class="btn btn-ghost">Decline analytics</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function hideBanner() {
    var banner = document.getElementById('hm-cookie-banner');
    if (!banner) return;
    banner.classList.remove('cookie-banner--visible');
    banner.classList.add('cookie-banner--hidden');
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
  }

  function showCookieBanner() {
    var existing = document.getElementById('hm-cookie-banner');
    if (existing) {
      existing.classList.remove('cookie-banner--hidden');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { existing.classList.add('cookie-banner--visible'); });
      });
      return;
    }
    document.body.insertAdjacentHTML('beforeend', buildBannerHTML());
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var banner = document.getElementById('hm-cookie-banner');
        if (banner) banner.classList.add('cookie-banner--visible');
      });
    });
    document.getElementById('hm-cookie-accept').addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      hideBanner();
    });
    document.getElementById('hm-cookie-decline').addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'declined');
      hideBanner();
    });
  }

  window.hmShowCookieBanner = showCookieBanner;

  if (!localStorage.getItem(COOKIE_KEY)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showCookieBanner);
    } else {
      showCookieBanner();
    }
  }

  // ── Page Transition — fade in on load ────────────────────────
  var ptOverlay = document.getElementById('page-transition');
  if (ptOverlay) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        ptOverlay.classList.add('pt-loaded');
      });
    });

    // Intercept internal link clicks for fade-out transition
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href) return;
      // Skip external, hash, mailto, tel links
      if (
        href.startsWith('http') ||
        href.startsWith('mailto') ||
        href.startsWith('tel') ||
        href.startsWith('#') ||
        link.target === '_blank'
      ) return;
      e.preventDefault();
      ptOverlay.classList.remove('pt-loaded');
      setTimeout(function () {
        window.location.href = href;
      }, 160);
    });
  }

  // ── Scroll Progress Bar ──────────────────────────────────────
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    function updateProgress() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ── Custom Cursor ────────────────────────────────────────────
  // Only on pointer:fine (non-touch) devices
  if (window.matchMedia('(pointer: fine)').matches) {
    var cursorDot = document.getElementById('cursor-dot');
    if (cursorDot) {
      var cx = -100, cy = -100;
      document.addEventListener('mousemove', function (e) {
        cx = e.clientX;
        cy = e.clientY;
        cursorDot.style.left = cx + 'px';
        cursorDot.style.top  = cy + 'px';
      });

      var hoverTargets = 'a, button, [role="button"], input, textarea, select, label, .btn';
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest(hoverTargets)) {
          cursorDot.classList.add('cursor-hover');
        }
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest(hoverTargets)) {
          cursorDot.classList.remove('cursor-hover');
        }
      });
    }
  }

  // ── Nav scroll behavior (background + hide/show) ─────────────
  var nav = document.querySelector('.nav');
  if (nav) {
    var lastScrollY = window.scrollY;
    var ticking = false;

    function handleNavScroll() {
      var currentY = window.scrollY;

      // Scrolled background
      nav.classList.toggle('nav-scrolled', currentY > 56);

      // Hide on scroll down (past 120px), show on scroll up
      if (currentY > 120) {
        if (currentY > lastScrollY + 4) {
          nav.classList.add('nav-hidden');
        } else if (currentY < lastScrollY - 4) {
          nav.classList.remove('nav-hidden');
        }
      } else {
        nav.classList.remove('nav-hidden');
      }

      lastScrollY = currentY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(handleNavScroll);
        ticking = true;
      }
    }, { passive: true });

    handleNavScroll();
  }

  // ── Mobile Menu ──────────────────────────────────────────────
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    function openMenu() {
      hamburger.classList.add('is-open');
      mobileMenu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ── Scroll Reveals ───────────────────────────────────────────
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-scale').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Time bar fill animations ─────────────────────────────────
  var timeBarsEl = document.querySelector('.time-bars');
  if (timeBarsEl) {
    var barObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.time-bar-row').forEach(function (row, i) {
              setTimeout(function () { row.classList.add('visible'); }, i * 200);
            });
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    barObserver.observe(timeBarsEl);
  }

  // ── Proof Bar Ticker ─────────────────────────────────────────
  var proofBarInner = document.querySelector('.proof-bar-inner');
  if (proofBarInner) {
    // Replace static inner with animated ticker
    var items = proofBarInner.innerHTML;
    var track = document.createElement('div');
    track.className = 'proof-bar-track';

    var set1 = document.createElement('div');
    set1.className = 'proof-bar-set';
    set1.innerHTML = items;

    var set2 = document.createElement('div');
    set2.className = 'proof-bar-set';
    set2.setAttribute('aria-hidden', 'true');
    set2.innerHTML = items;

    track.appendChild(set1);
    track.appendChild(set2);

    var parent = proofBarInner.parentNode;
    parent.replaceChild(track, proofBarInner);
  }

  // ── Hero Headline Line Reveal ─────────────────────────────────
  // Finds .hero-headline elements, wraps content in animated line spans
  document.querySelectorAll('.hero-headline').forEach(function (el) {
    // Collect child nodes (text and spans) into "lines" split by <br>
    var nodes = Array.from(el.childNodes);
    var lines = [];
    var currentLine = [];

    nodes.forEach(function (node) {
      if (node.nodeName === 'BR') {
        lines.push(currentLine);
        currentLine = [];
      } else {
        currentLine.push(node);
      }
    });
    if (currentLine.length) lines.push(currentLine);

    // Rebuild the element with wrapped lines
    el.innerHTML = '';
    lines.forEach(function (lineNodes, i) {
      var wrap = document.createElement('span');
      wrap.className = 'hero-line-wrap';

      var inner = document.createElement('span');
      inner.className = 'hero-line-inner';
      inner.style.transitionDelay = (i * 0.08) + 's';

      lineNodes.forEach(function (n) { inner.appendChild(n.cloneNode(true)); });
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });

    // Trigger animation after transition overlay fades (or immediately)
    var delay = ptOverlay ? 180 : 50;
    setTimeout(function () {
      el.classList.add('hero-reveal-ready');
    }, delay);
  });

})();
