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

  // Expose so footer "Cookie settings" button can call it
  window.hmShowCookieBanner = showCookieBanner;

  // Show on load if no consent stored yet
  if (!localStorage.getItem(COOKIE_KEY)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showCookieBanner);
    } else {
      showCookieBanner();
    }
  }

  // ── Scroll reveals ──────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // ── Time bar fill animations ────────────────────────────────
  const timeBarsEl = document.querySelector('.time-bars');
  if (timeBarsEl) {
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.time-bar-row')
              .forEach((row, i) => {
                setTimeout(() => row.classList.add('visible'), i * 200);
              });
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    barObserver.observe(timeBarsEl);
  }

  // ── Nav scroll state ────────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 56);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
