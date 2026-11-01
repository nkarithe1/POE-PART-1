/* ==========================================================
   Thembisa and Son Woodworks - services.js (services page only)
   - Builds the service cards from SERVICES (services-data.js)
   - Search box, category filter and sort order
   - "More details" modal built with the <dialog> element
   Content is added with createElement / textContent (never innerHTML)
   so nothing typed into the search box can inject HTML.
   ========================================================== */
(function () {
  'use strict';

  var services = window.SERVICES || [];
  var list = document.getElementById('services-list');
  if (!list || !services.length) { return; }

  var searchInput = document.getElementById('service-search');
  var categorySelect = document.getElementById('service-category');
  var sortSelect = document.getElementById('service-sort');
  var resetButton = document.getElementById('service-reset');
  var countText = document.getElementById('results-count');
  var emptyMessage = document.getElementById('no-results');

  /* ---------- helpers ---------- */
  function formatRand(n) {
    // 8500 -> "R 8,500"  (same style as the rest of the site)
    return 'R ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function leadText(s) {
    return s.leadMin + '\u2013' + s.leadMax + ' week lead time';
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text) { node.textContent = text; }
    return node;
  }

  /* ---------- the modal (one dialog, re-used) ---------- */
  var dialog = document.createElement('dialog');
  dialog.className = 'modal';
  dialog.setAttribute('aria-labelledby', 'modal-title');
  document.body.appendChild(dialog);

  function openModal(service, opener) {
    dialog.textContent = ''; // clear the old content

    var closeBtn = el('button', 'modal-close', '\u00D7');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close details');
    closeBtn.addEventListener('click', function () { dialog.close(); });

    var title = el('h2', '', service.name);
    title.id = 'modal-title';

    var featureList = el('ul', 'modal-list');
    service.features.forEach(function (f) { featureList.appendChild(el('li', '', f)); });

    var facts = el('p', 'price',
      'From ' + formatRand(service.priceFrom) + ' \u00B7 ' + leadText(service) + ' \u00B7 ' + service.extra);

    var enquire = el('a', 'btn', 'Enquire about this service');
    enquire.href = 'enquiry.html?service=' + encodeURIComponent(service.id) + '#enquiry-form';

    dialog.appendChild(closeBtn);
    dialog.appendChild(title);
    dialog.appendChild(el('p', '', service.description));
    dialog.appendChild(el('h3', 'modal-subtitle', 'What this includes'));
    dialog.appendChild(featureList);
    dialog.appendChild(facts);
    dialog.appendChild(enquire);

    dialog.showModal();

    // Native <dialog> returns focus to the opener when it closes,
    // but older browsers need a little help.
    dialog.addEventListener('close', function onClose() {
      dialog.removeEventListener('close', onClose);
      if (opener) { opener.focus(); }
    });
  }

  // Click on the dark backdrop closes the modal
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) { dialog.close(); }
  });

  /* ---------- building one card ---------- */
  function buildCard(s) {
    var card = el('article', 'card service-card reveal');
    card.setAttribute('data-category', s.category);

    card.appendChild(el('span', 'badge', s.categoryLabel));
    card.appendChild(el('h3', '', s.name));
    card.appendChild(el('p', '', s.description));
    card.appendChild(el('p', 'price',
      'From ' + formatRand(s.priceFrom) + ' \u00B7 ' + leadText(s) + ' \u00B7 ' + s.extra));

    var actions = el('div', 'card-actions');

    var more = el('button', 'btn btn-outline', 'More details');
    more.type = 'button';
    more.setAttribute('aria-label', 'More details about ' + s.name);
    more.addEventListener('click', function () { openModal(s, more); });

    var enquire = el('a', 'btn', 'Enquire');
    enquire.href = 'enquiry.html?service=' + encodeURIComponent(s.id) + '#enquiry-form';
    enquire.setAttribute('aria-label', 'Enquire about ' + s.name);

    actions.appendChild(more);
    actions.appendChild(enquire);
    card.appendChild(actions);

    return card;
  }

  /* ---------- filter + sort ---------- */
  function matchesSearch(s, words) {
    // every word typed must appear somewhere in the name, description or tags
    var haystack = (s.name + ' ' + s.description + ' ' + s.categoryLabel + ' ' + s.tags.join(' ')).toLowerCase();
    return words.every(function (w) { return haystack.indexOf(w) !== -1; });
  }

  function getResults() {
    var words = searchInput.value.toLowerCase().split(/\s+/).filter(Boolean);
    var category = categorySelect.value;

    var results = services.filter(function (s) {
      var categoryOk = category === 'all' || s.category === category;
      return categoryOk && matchesSearch(s, words);
    });

    switch (sortSelect.value) {
      case 'price-asc':
        results.sort(function (a, b) { return a.priceFrom - b.priceFrom; });
        break;
      case 'price-desc':
        results.sort(function (a, b) { return b.priceFrom - a.priceFrom; });
        break;
      case 'lead-asc':
        results.sort(function (a, b) { return a.leadMax - b.leadMax; });
        break;
      case 'name':
        results.sort(function (a, b) { return a.name.localeCompare(b.name); });
        break;
      default:
        break; // keep the original order
    }
    return results;
  }

  function render() {
    var results = getResults();

    list.textContent = ''; // remove the old cards
    results.forEach(function (s) { list.appendChild(buildCard(s)); });

    var n = results.length;
    countText.textContent = 'Showing ' + n + ' of ' + services.length + ' services';
    emptyMessage.hidden = n !== 0;
    list.hidden = n === 0;

    if (window.revealNewItems) { window.revealNewItems(list); }
  }

  /* ---------- events ---------- */
  var timer;
  searchInput.addEventListener('input', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(render, 150); // wait until the visitor pauses typing
  });
  categorySelect.addEventListener('change', render);
  sortSelect.addEventListener('change', render);

  resetButton.addEventListener('click', function () {
    searchInput.value = '';
    categorySelect.value = 'all';
    sortSelect.value = 'default';
    render();
    searchInput.focus();
  });

  // Fill the category drop-down from the data so it can never go out of date
  services.forEach(function (s) {
    var exists = Array.prototype.some.call(categorySelect.options, function (o) { return o.value === s.category; });
    if (!exists) {
      var option = document.createElement('option');
      option.value = s.category;
      option.textContent = s.categoryLabel;
      categorySelect.appendChild(option);
    }
  });

  // Allow links such as services.html?q=kitchen to pre-fill the search
  var params = new URLSearchParams(window.location.search);
  if (params.get('q')) { searchInput.value = params.get('q').slice(0, 60); }

  document.documentElement.classList.add('services-ready');
  render();
})();
