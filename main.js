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

  // ── Video Data ───────────────────────────────────────────────
  window.HM_VIDEOS = [
    // PAUL JUDA — USA Gymnastics / Michigan
    { shortcode: 'DIwxvo2zTX8',     platform: 'instagram', athlete: 'Paul Juda',                                          sport: 'USA Gymnastics · Michigan',           views: '4M',    featured: true  },
    { shortcode: 'DJ2psBsyTbc',     platform: 'instagram', athlete: 'Paul Juda',                                          sport: 'USA Gymnastics · Michigan',           views: '839K',  featured: true  },
    { shortcode: 'DJPlHQgTIur',     platform: 'instagram', athlete: 'Paul Juda',                                          sport: 'USA Gymnastics · Michigan',           views: '428K',  featured: false },
    { shortcode: 'DI19D4kT-wG',     platform: 'instagram', athlete: 'Paul Juda',                                          sport: 'USA Gymnastics · Michigan',           views: '199K',  featured: false },
    { shortcode: 'DJVRL-uy_Oz',     platform: 'instagram', athlete: 'Paul Juda',                                          sport: 'USA Gymnastics · Michigan',           views: '21.2K', featured: false },
    // STANFORD GYMNASTICS — Group
    { shortcode: 'DRp19PRgZGX',     platform: 'instagram', athlete: 'Jaime Dugan, Levi Jung-Ruivivar & Porsche Trinidad', sport: 'Stanford Gymnastics',                 views: '17.3M', featured: true  },
    { shortcode: 'DRxIOkYidrY',     platform: 'instagram', athlete: 'Ian Gunther, Jaime Dugan & Porsche Trinidad',        sport: 'Stanford Gymnastics',                 views: '4.8M',  featured: true  },
    { shortcode: 'DSWLgqDiTOs',     platform: 'instagram', athlete: 'Stanford Gymnastics',                                sport: 'Stanford Gymnastics',                 views: '3.1M',  featured: true  },
    { shortcode: 'DSB2gGdkQcz',     platform: 'instagram', athlete: 'Jaime Dugan, Levi Jung-Ruivivar & Porsche Trinidad', sport: 'Stanford Gymnastics',                 views: '1.2M',  featured: false },
    // TAYLOR BURKHART — USA / Stanford
    { shortcode: 'DLIb3_SvYCT',     platform: 'instagram', athlete: 'Taylor Burkhart',                                    sport: 'USA Gymnastics · Stanford',           views: '2.4M',  featured: true  },
    { shortcode: 'DNtl_uWZBG3',     platform: 'instagram', athlete: 'Taylor Burkhart',                                    sport: 'USA Gymnastics · Stanford',           views: null,    featured: false },
    // LEVI JUNG-RUIVIVAR — Stanford Women's Gymnastics
    { shortcode: 'DSG0pEYEo6R',     platform: 'instagram', athlete: 'Levi Jung-Ruivivar',                                 sport: "Stanford Women's Gymnastics",         views: '129K',  featured: false },
    // ANNA ROBERTS — Stanford Women's Gymnastics
    { shortcode: 'DViQmOlj963',     platform: 'instagram', athlete: 'Anna Roberts',                                       sport: "Stanford Women's Gymnastics",         views: '430K',  featured: false },
    // TEMPLE LANDRY — Stanford Women's Gymnastics
    { shortcode: 'DW_wXM3hKBH',     platform: 'instagram', athlete: 'Temple Landry',                                      sport: "Stanford Women's Gymnastics",         views: '163K',  featured: false },
    // PORSCHE MIA TRINIDAD — Stanford Women's Gymnastics
    { shortcode: 'CwqiZNgy4jy',     platform: 'instagram', athlete: 'Porsche Mia Trinidad',                               sport: "Stanford Women's Gymnastics",         views: '1.2M',  featured: false },
    // ALANA WALKER — Stanford / Jamaica National Team
    { shortcode: 'DRyKFZhCpKk',     platform: 'instagram', athlete: 'Alana Walker',                                       sport: 'Stanford · Jamaica National Team',    views: '312K',  featured: false },
    { shortcode: 'DSJzUTliqx6',     platform: 'instagram', athlete: 'Alana Walker',                                       sport: 'Stanford · Jamaica National Team',    views: '124K',  featured: false },
    // JAIME DUGAN — Stanford Women's Gymnastics
    { shortcode: 'DSEDAEZgaqH',     platform: 'instagram', athlete: 'Jaime Dugan',                                        sport: "Stanford Women's Gymnastics",         views: '38.7K', featured: false },
    // CLAIRE DEAN & ANNA ROBERTS — Stanford
    { shortcode: 'DRydCKUDgDk',     platform: 'instagram', athlete: 'Claire Dean & Anna Roberts',                         sport: "Stanford Women's Gymnastics",         views: '77K',   featured: false },
    // SIMONE BILES & JOSCELYN ROBERSON — USA Gymnastics (TikTok, opens externally)
    { shortcode: 'ZTk5XN4nY',       platform: 'tiktok',    athlete: 'Simone Biles & Joscelyn Roberson',                   sport: 'USA Gymnastics',                      views: null,    featured: false, externalUrl: 'https://www.tiktok.com/t/ZTk5XN4nY/' },
    // RUBEN LOPEZ — Spain National Team
    { shortcode: 'DW65JBoJn95',     platform: 'instagram', athlete: 'Ruben Lopez',                                        sport: 'Spain National Team',                 views: '50.4K', featured: false },
    { shortcode: 'DRyVooDEVgk',     platform: 'instagram', athlete: 'Ruben Lopez',                                        sport: 'Spain National Team',                 views: '26.2K', featured: false },
    { shortcode: 'DQWnUgMEdDZ',     platform: 'instagram', athlete: 'Ruben Lopez',                                        sport: 'Spain National Team',                 views: '74.5K', featured: false },
    // RILEY LOOS — Women's Gymnastics (TikTok, numeric ID embeds)
    { shortcode: '7628817224047922445', platform: 'tiktok', athlete: 'Riley Loos',                                         sport: "Women's Gymnastics",                  views: '192.4K',featured: false },
    // REMAINING FROM ORIGINAL LIST (thumbnails TBD)
    { shortcode: 'DTn6BVgkmch',     platform: 'instagram', athlete: 'Haymaker Athletes',                                   sport: 'Gymnastics',                          views: null,    featured: false },
    { shortcode: 'DWNYMPXjOMh',     platform: 'instagram', athlete: 'Haymaker Athletes',                                   sport: 'Gymnastics',                          views: null,    featured: false },
  ];

  // ── Video Card Renderer ──────────────────────────────────────
  var EYE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="11" height="11" style="flex-shrink:0"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>';
  var PLAY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';

  function buildVideoCard(v, index) {
    var thumb = 'images/vid-' + v.shortcode + '.jpg';
    var delayClass = index % 4 === 1 ? ' reveal-d1' : index % 4 === 2 ? ' reveal-d2' : index % 4 === 3 ? ' reveal-d3' : '';
    var viewsHtml = v.views ? '<div class="video-card-views">' + EYE_SVG + ' ' + v.views + '</div>' : '';
    var platformLabel = v.platform === 'tiktok' ? 'TikTok' : 'IG';

    if (v.externalUrl) {
      return '<a class="video-card reveal' + delayClass + '" href="' + v.externalUrl + '" target="_blank" rel="noopener">' +
        '<img class="video-card-thumb" src="' + thumb + '" alt="' + v.athlete + '" loading="lazy" onerror="this.style.opacity=0">' +
        '<div class="video-card-overlay"></div>' +
        '<div class="video-card-play">' + PLAY_SVG + '</div>' +
        viewsHtml +
        '<div class="video-card-platform">' + platformLabel + '</div>' +
        '<div class="video-card-info"><div class="video-card-athlete">' + v.athlete + '</div><div class="video-card-sport">' + v.sport + '</div></div>' +
      '</a>';
    }

    return '<div class="video-card reveal' + delayClass + '" data-shortcode="' + v.shortcode + '" data-platform="' + v.platform + '" onclick="window.hmOpenVideo(\'' + v.shortcode + '\',\'' + v.platform + '\')" role="button" tabindex="0" aria-label="Watch ' + v.athlete + '">' +
      '<img class="video-card-thumb" src="' + thumb + '" alt="' + v.athlete + '" loading="lazy" onerror="this.style.opacity=0">' +
      '<div class="video-card-overlay"></div>' +
      '<div class="video-card-play">' + PLAY_SVG + '</div>' +
      viewsHtml +
      '<div class="video-card-platform">' + platformLabel + '</div>' +
      '<div class="video-card-info"><div class="video-card-athlete">' + v.athlete + '</div><div class="video-card-sport">' + v.sport + '</div></div>' +
    '</div>';
  }

  function renderVideoGrid(containerId, videos) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = videos.map(function(v, i) { return buildVideoCard(v, i); }).join('');
    // Re-observe new reveal elements
    container.querySelectorAll('.reveal').forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  window.hmRenderVideoGrid = renderVideoGrid;

  // ── Video Modal ──────────────────────────────────────────────
  var videoModal = document.getElementById('video-modal');

  function hmOpenVideo(shortcode, platform) {
    if (!videoModal) return;
    var embed = videoModal.querySelector('.video-modal-embed');
    var src;
    if (platform === 'instagram') {
      src = 'https://www.instagram.com/p/' + shortcode + '/embed/';
    } else {
      src = 'https://www.tiktok.com/embed/v2/' + shortcode;
    }
    embed.innerHTML = '<iframe src="' + src + '" frameborder="0" scrolling="no" allowtransparency="true" allow="autoplay" allowfullscreen></iframe>';
    videoModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function hmCloseVideo() {
    if (!videoModal) return;
    videoModal.classList.remove('is-open');
    var embed = videoModal.querySelector('.video-modal-embed');
    setTimeout(function() { embed.innerHTML = ''; }, 300);
    document.body.style.overflow = '';
  }

  window.hmOpenVideo = hmOpenVideo;
  window.hmCloseVideo = hmCloseVideo;

  if (videoModal) {
    videoModal.querySelector('.video-modal-backdrop').addEventListener('click', hmCloseVideo);
    videoModal.querySelector('.video-modal-close').addEventListener('click', hmCloseVideo);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') hmCloseVideo();
    });
  }

  // Keyboard support on video cards
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.classList.contains('video-card')) {
      var sc = document.activeElement.dataset.shortcode;
      var pl = document.activeElement.dataset.platform;
      if (sc && pl) hmOpenVideo(sc, pl);
    }
  });

  // ── Render grids on page load ────────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {
    var featured = window.HM_VIDEOS.filter(function(v) { return v.featured; });
    renderVideoGrid('work-featured', featured);
    renderVideoGrid('work-all', window.HM_VIDEOS);
  });

})();
