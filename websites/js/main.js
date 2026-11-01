/* ==========================================================
   Thembisa and Son Woodworks - main.js (loaded on every page)
   1. Mobile navigation toggle
   2. Scroll-reveal animation (IntersectionObserver)
   3. Back-to-top button
   4. Accordion (FAQ on the enquiry page)
   5. Gallery lightbox (home page)
   No libraries needed - plain JavaScript and the DOM.
   ========================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Mobile navigation toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('primary-nav');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      navLinks.classList.toggle('is-open', !open);
    });

    // Close the menu with the Escape key and return focus to the button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        navToggle.click();
        navToggle.focus();
      }
    });
  }

  /* ---------- 2. Scroll-reveal animation ---------- */
  var revealItems = document.querySelectorAll('.reveal');

  if (revealItems.length) {
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once only
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(function (el) { observer.observe(el); });
    } else {
      // No observer support, or the visitor asked for less motion: just show everything
      revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  /* Other scripts add cards after page load (services.js). They call this
     so the new cards animate in as well. */
  window.revealNewItems = function (container) {
    var fresh = container.querySelectorAll('.reveal:not(.is-visible)');
    fresh.forEach(function (el, i) {
      // small stagger so cards arrive one after another
      var delay = prefersReducedMotion ? 0 : Math.min(i, 6) * 60;
      window.setTimeout(function () { el.classList.add('is-visible'); }, delay);
    });
  };

  /* ---------- 3. Back-to-top button ---------- */
  var topButton = document.getElementById('back-to-top');

  if (topButton) {
    window.addEventListener('scroll', function () {
      topButton.classList.toggle('is-shown', window.scrollY > 600);
    }, { passive: true });

    topButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- 4. Accordion ---------- */
  document.querySelectorAll('.accordion').forEach(function (accordion) {
    var triggers = accordion.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.accordion-item');
        var open = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!open));
        item.classList.toggle('is-open', !open);
      });

      // Up / Down / Home / End move between the headings (WAI-ARIA accordion pattern)
      trigger.addEventListener('keydown', function (e) {
        var target = null;
        if (e.key === 'ArrowDown') { target = triggers[(index + 1) % triggers.length]; }
        if (e.key === 'ArrowUp') { target = triggers[(index - 1 + triggers.length) % triggers.length]; }
        if (e.key === 'Home') { target = triggers[0]; }
        if (e.key === 'End') { target = triggers[triggers.length - 1]; }
        if (target) { e.preventDefault(); target.focus(); }
      });
    });
  });

  /* ---------- 5. Gallery lightbox ---------- */
  var galleryLinks = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));

  if (galleryLinks.length && typeof HTMLDialogElement === 'function') {
    var current = 0;

    // Build the lightbox once, using DOM methods (no innerHTML)
    var dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.setAttribute('aria-label', 'Image viewer');

    var figure = document.createElement('figure');
    var bigImage = document.createElement('img');
    var caption = document.createElement('figcaption');
    figure.appendChild(bigImage);
    figure.appendChild(caption);

    function makeButton(className, label, text) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lightbox-btn ' + className;
      b.setAttribute('aria-label', label);
      b.textContent = text;
      return b;
    }

    var closeBtn = makeButton('lightbox-close', 'Close image viewer', '\u00D7');
    var prevBtn = makeButton('lightbox-prev', 'Previous image', '\u2039');
    var nextBtn = makeButton('lightbox-next', 'Next image', '\u203A');

    dialog.appendChild(closeBtn);
    dialog.appendChild(prevBtn);
    dialog.appendChild(figure);
    dialog.appendChild(nextBtn);
    document.body.appendChild(dialog);

    function show(index) {
      current = (index + galleryLinks.length) % galleryLinks.length;
      var link = galleryLinks[current];
      var thumb = link.querySelector('img');
      bigImage.src = link.getAttribute('href');
      bigImage.alt = thumb ? thumb.alt : '';
      caption.textContent = link.getAttribute('data-caption') +
        '  (' + (current + 1) + ' of ' + galleryLinks.length + ')';
    }

    galleryLinks.forEach(function (link, index) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // without JavaScript the link simply opens the image
        show(index);
        dialog.showModal();
      });
    });

    closeBtn.addEventListener('click', function () { dialog.close(); });
    prevBtn.addEventListener('click', function () { show(current - 1); });
    nextBtn.addEventListener('click', function () { show(current + 1); });

    // Click on the dark backdrop closes the viewer
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) { dialog.close(); }
    });

    // Arrow keys move between images while the viewer is open
    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(current - 1); }
      if (e.key === 'ArrowRight') { show(current + 1); }
    });
  }
})();
