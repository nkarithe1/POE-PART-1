/* ==========================================================
   Thembisa and Son Woodworks - map.js (contact page only)
   Interactive map built with Leaflet (self-hosted in js/vendor)
   and OpenStreetMap tiles. Shows both locations with pop-ups,
   and two buttons that fly the map to each location.
   NOTE: coordinates are approximate - check them against the
   real street addresses on Google Maps before submitting.
   ========================================================== */
(function () {
  'use strict';

  var mapBox = document.getElementById('location-map');
  if (!mapBox || typeof L === 'undefined') { return; } // no Leaflet = keep the fallback link

  var locations = {
    workshop: {
      name: 'Workshop \u2014 Linden',
      address: '14 Kloof Road, Linden, Johannesburg, 2195',
      hours: 'Mon\u2013Fri, 07:30\u201316:30 \u00B7 Site visits by appointment',
      coords: [-26.1364, 28.0030]
    },
    showroom: {
      name: 'Showroom \u2014 Melville',
      address: '22 7th Street, Melville, Johannesburg, 2109',
      hours: 'Tue\u2013Sat, 10:00\u201317:00 \u00B7 No appointment needed',
      coords: [-26.1757, 28.0059]
    }
  };

  mapBox.textContent = ''; // remove the "needs JavaScript" fallback text

  var map = L.map(mapBox, { scrollWheelZoom: false }).setView([-26.156, 28.0045], 12);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer">OpenStreetMap</a> contributors'
  }).addTo(map);

  var markers = {};

  Object.keys(locations).forEach(function (key) {
    var place = locations[key];

    // Pop-up content built with DOM methods so no HTML string is needed
    var popup = document.createElement('div');
    var title = document.createElement('strong');
    title.textContent = place.name;
    var address = document.createElement('p');
    address.textContent = place.address;
    var hours = document.createElement('p');
    hours.textContent = place.hours;
    popup.appendChild(title);
    popup.appendChild(address);
    popup.appendChild(hours);

    markers[key] = L.marker(place.coords, { title: place.name, alt: place.name }).addTo(map).bindPopup(popup);
  });

  // Buttons under the map
  document.querySelectorAll('[data-map-target]').forEach(function (button) {
    button.addEventListener('click', function () {
      var key = button.getAttribute('data-map-target');
      var place = locations[key];
      if (!place) { return; }

      map.flyTo(place.coords, 16, { duration: 1.2 });
      markers[key].openPopup();

      document.querySelectorAll('[data-map-target]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === button));
      });
    });
  });

  // Scroll-wheel zoom only after the visitor clicks the map (stops the page "sticking")
  map.on('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('blur', function () { map.scrollWheelZoom.disable(); });

  mapBox.classList.add('is-ready');
})();
