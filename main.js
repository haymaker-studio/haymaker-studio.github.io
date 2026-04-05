(function () {
  // Mark JS as enabled — unlocks CSS animation classes
  document.documentElement.classList.add('js-enabled');

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
