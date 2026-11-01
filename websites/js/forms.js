/* ==========================================================
   Thembisa and Son Woodworks - forms.js (enquiry + contact pages)

   Client-side validation (shared by both forms):
     - required fields, length limits, email and SA phone formats
     - inline error messages, aria-invalid, focus on first error
   enquiry.html  -> validates, works out a cost / availability
                    response, then sends the data with AJAX (fetch)
   contact.html  -> validates, compiles the message into an email
                    for RECIPIENT and lets the visitor send it
   ========================================================== */
(function () {
  'use strict';

  /* The email address the contact form is addressed to */
  var RECIPIENT = 'hello@thembisaandson.co.za';

  /* ---------- validation rules ---------- */
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // South African numbers: 0821234567 or +27821234567 (spaces, dashes, brackets are ignored)
  var PHONE_PATTERN = /^(?:\+27|0)[1-9]\d{8}$/;
  var NAME_PATTERN = /^[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F\s'\u2019.\-]*$/;

  var RULES = {
    name: {
      required: true, min: 2, max: 80, pattern: NAME_PATTERN,
      messages: {
        required: 'Please enter your full name.',
        min: 'Your name must be at least 2 characters.',
        pattern: 'Use letters only in your name (spaces, hyphens and apostrophes are fine).'
      }
    },
    email: {
      required: true, max: 120, pattern: EMAIL_PATTERN,
      messages: {
        required: 'Please enter your email address.',
        pattern: 'Enter a valid email address, for example name@example.co.za.'
      }
    },
    phone: {
      required: false, pattern: PHONE_PATTERN, strip: /[\s()\-]/g,
      messages: { pattern: 'Enter a South African number, for example 082 123 4567 or +27 82 123 4567.' }
    },
    suburb: { required: false, max: 60, messages: { max: 'Keep the suburb under 60 characters.' } },
    service: { required: true, messages: { required: 'Please choose the service you are interested in.' } },
    budget: { required: false },
    timeline: { required: false },
    details: {
      required: true, min: 20, max: 1000,
      messages: {
        required: 'Please tell us about the piece.',
        min: 'Please give us a little more detail (at least 20 characters).',
        max: 'Please keep this under 1000 characters.'
      }
    },
    subject: { required: true, messages: { required: 'Please choose what your message is about.' } },
    message: {
      required: true, min: 10, max: 1000,
      messages: {
        required: 'Please type your message.',
        min: 'Your message is a little short (at least 10 characters).',
        max: 'Please keep your message under 1000 characters.'
      }
    }
  };

  /* Returns an error message, or '' when the value is fine */
  function checkField(name, rawValue) {
    var rule = RULES[name];
    if (!rule) { return ''; }

    var value = String(rawValue || '').trim();
    if (rule.strip) { value = value.replace(rule.strip, ''); }

    if (!value) {
      return rule.required ? rule.messages.required : '';
    }
    if (rule.min && value.length < rule.min) { return rule.messages.min; }
    if (rule.max && value.length > rule.max) { return rule.messages.max; }
    if (rule.pattern && !rule.pattern.test(value)) { return rule.messages.pattern; }
    return '';
  }

  function showError(field, message) {
    var wrapper = field.closest('.field');
    var errorBox = document.getElementById(field.id + '-error');
    if (!wrapper || !errorBox) { return; }

    errorBox.textContent = message;
    wrapper.classList.toggle('has-error', Boolean(message));
    if (message) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  }

  /* Validate every field in a form. Returns the first invalid field or null. */
  function validateForm(form) {
    var firstInvalid = null;
    var errorCount = 0;

    Array.prototype.forEach.call(form.elements, function (field) {
      if (!field.name || !RULES[field.name]) { return; }
      var message = checkField(field.name, field.value);
      showError(field, message);
      if (message) {
        errorCount += 1;
        if (!firstInvalid) { firstInvalid = field; }
      }
    });

    return { firstInvalid: firstInvalid, errorCount: errorCount };
  }

  /* Live feedback: check a field when the visitor leaves it, then keep
     checking as they type so the message disappears as soon as it is fixed */
  function addLiveValidation(form) {
    form.noValidate = true; // our messages replace the browser's pop-ups (without JS the browser still validates)
    Array.prototype.forEach.call(form.elements, function (field) {
      if (!field.name || !RULES[field.name]) { return; }

      field.addEventListener('blur', function () {
        field.setAttribute('data-touched', 'true');
        showError(field, checkField(field.name, field.value));
      });

      var liveEvent = field.tagName === 'SELECT' ? 'change' : 'input';
      field.addEventListener(liveEvent, function () {
        if (field.getAttribute('data-touched') === 'true' || field.closest('.field').classList.contains('has-error')) {
          showError(field, checkField(field.name, field.value));
        }
      });
    });
  }

  function clearErrors(form) {
    Array.prototype.forEach.call(form.elements, function (field) {
      if (field.name && RULES[field.name]) {
        showError(field, '');
        field.removeAttribute('data-touched');
      }
    });
  }

  /* "123 / 1000" counters under the textareas */
  function addCharCounters(form) {
    form.querySelectorAll('textarea[maxlength]').forEach(function (area) {
      var counter = document.getElementById(area.id + '-count');
      if (!counter) { return; }
      function update() { counter.textContent = area.value.length + ' / ' + area.getAttribute('maxlength'); }
      area.addEventListener('input', update);
      update();
    });
  }

  function setStatus(box, message, type) {
    box.textContent = message;
    box.className = 'form-status' + (type ? ' is-' + type : '');
    box.hidden = !message;
  }

  function formatRand(n) {
    return 'R ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text) { node.textContent = text; }
    return node;
  }

  /* ==========================================================
     ENQUIRY FORM
     ========================================================== */
  var enquiryForm = document.getElementById('enquiry-form');

  if (enquiryForm) {
    var services = window.SERVICES || [];
    var statusBox = document.getElementById('enquiry-status');
    var resultPanel = document.getElementById('enquiry-result');
    var submitButton = enquiryForm.querySelector('button[type="submit"]');

    addLiveValidation(enquiryForm);
    addCharCounters(enquiryForm);

    // Pre-select the service when we arrive from the services page
    var wanted = new URLSearchParams(window.location.search).get('service');
    if (wanted && enquiryForm.elements.service) {
      var known = Array.prototype.some.call(enquiryForm.elements.service.options, function (o) { return o.value === wanted; });
      if (known) { enquiryForm.elements.service.value = wanted; }
    }

    /* Budget and timeline drop-downs -> numbers we can compare */
    var BUDGETS = {
      'under-5000': { min: 0, max: 5000, label: 'under R 5,000' },
      '5000-15000': { min: 5000, max: 15000, label: 'R 5,000 \u2013 R 15,000' },
      '15000-40000': { min: 15000, max: 40000, label: 'R 15,000 \u2013 R 40,000' },
      '40000-plus': { min: 40000, max: Infinity, label: 'R 40,000+' }
    };
    var TIMELINES = {
      'flexible': { weeks: Infinity, label: 'no fixed date' },
      '1-3-months': { weeks: 13, label: '1\u20133 months' },
      '3-6-months': { weeks: 26, label: '3\u20136 months' },
      'urgent': { weeks: 4, label: 'under a month' }
    };

    /* Works out the cost and availability response (the "processing" step) */
    function buildEstimate(data) {
      var service = services.filter(function (s) { return s.id === data.service; })[0];
      if (!service) { return null; }

      var budget = BUDGETS[data.budget];
      var timeline = TIMELINES[data.timeline];
      var cost;
      var availability;

      // --- cost ---
      if (!budget) {
        cost = service.name + ' projects start from ' + formatRand(service.priceFrom) +
          '. We will give you a fixed quote once the measured drawing is done.';
      } else if (budget.max < service.priceFrom) {
        cost = 'Your budget (' + budget.label + ') is below our usual starting price of ' +
          formatRand(service.priceFrom) + ' for ' + service.name.toLowerCase() +
          '. We can still talk through a smaller or simpler piece, or point you to our small commissions from R 650.';
      } else if (budget.min < service.priceFrom) {
        cost = 'Your budget range (' + budget.label + ') overlaps with our starting price of ' +
          formatRand(service.priceFrom) + ' for ' + service.name.toLowerCase() +
          ', so it is workable at the upper end. The final fixed quote depends on size, wood and finish.';
      } else {
        cost = 'Good news \u2014 your budget (' + budget.label + ') is in line with our work. ' +
          service.name + ' projects start from ' + formatRand(service.priceFrom) +
          ', and the final fixed quote depends on size, wood and finish.';
      }

      // --- availability ---
      var lead = service.leadMin + '\u2013' + service.leadMax + ' weeks';
      if (!timeline) {
        availability = 'Our typical lead time for this service is ' + lead + ' from the approved drawing.';
      } else if (timeline.weeks === Infinity) {
        availability = 'Because your date is flexible, we can fit you in around our schedule. Typical lead time is ' + lead + '.';
      } else if (timeline.weeks < service.leadMin) {
        availability = 'Our typical lead time is ' + lead + ', which is longer than your timeframe (' +
          timeline.label + '). Please call us on 011 456 7890 and we will see what is possible.';
      } else if (timeline.weeks < service.leadMax) {
        availability = 'Our typical lead time is ' + lead + ', so your timeframe (' + timeline.label +
          ') may be possible, depending on our workshop schedule. We will confirm this in our reply.';
      } else {
        availability = 'Our typical lead time is ' + lead + ', which fits comfortably inside your timeframe (' +
          timeline.label + ').';
      }

      return { service: service, cost: cost, availability: availability };
    }

    /* Shows the response panel (built with textContent, never innerHTML) */
    function showResult(data, estimate, demoMode) {
      resultPanel.textContent = '';

      var title = el('h2', '', 'Thank you, ' + data.name.split(/\s+/)[0] + '!');
      title.id = 'result-title';
      resultPanel.appendChild(title);
      resultPanel.appendChild(el('p', '', 'We have received your enquiry about ' + estimate.service.name.toLowerCase() + '. Here is what to expect:'));

      var costBlock = el('div', 'result-block');
      costBlock.appendChild(el('h3', '', 'Cost'));
      costBlock.appendChild(el('p', '', estimate.cost));

      var availBlock = el('div', 'result-block');
      availBlock.appendChild(el('h3', '', 'Availability'));
      availBlock.appendChild(el('p', '', estimate.availability));

      var nextBlock = el('div', 'result-block');
      nextBlock.appendChild(el('h3', '', 'What happens next'));
      nextBlock.appendChild(el('p', '', 'We reply to ' + data.email + ' within two working days with next steps and, where possible, a rough price range.'));

      resultPanel.appendChild(costBlock);
      resultPanel.appendChild(availBlock);
      resultPanel.appendChild(nextBlock);

      if (demoMode) {
        resultPanel.appendChild(el('p', 'form-note',
          'Demo mode: the form is not connected to an email service yet, so this enquiry was not delivered.'));
      }

      var again = el('button', 'btn btn-outline', 'Send another enquiry');
      again.type = 'button';
      again.addEventListener('click', function () {
        resultPanel.hidden = true;
        enquiryForm.hidden = false;
        enquiryForm.reset();
        clearErrors(enquiryForm);
        addCharCounters(enquiryForm);
        enquiryForm.elements.name.focus();
      });
      resultPanel.appendChild(again);

      enquiryForm.hidden = true;
      resultPanel.hidden = false;
      resultPanel.focus();
    }

    /* AJAX submission: sends the data in the background with fetch() so
       the page does not reload. The endpoint is the form's action attribute. */
    function sendWithAjax() {
      var endpoint = enquiryForm.getAttribute('action') || '';

      // Until a real Formspree ID is pasted into the action attribute, run in demo mode
      if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
        return Promise.resolve({ ok: true, demo: true });
      }

      return fetch(endpoint, {
        method: 'POST',
        body: new FormData(enquiryForm),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        return { ok: response.ok, demo: false };
      });
    }

    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: real visitors never see or fill this field, bots usually do
      if (enquiryForm.elements.website && enquiryForm.elements.website.value) { return; }

      var check = validateForm(enquiryForm);
      if (check.firstInvalid) {
        setStatus(statusBox, 'Please fix ' + check.errorCount + (check.errorCount === 1 ? ' field' : ' fields') + ' marked below and try again.', 'error');
        check.firstInvalid.focus();
        return;
      }
      setStatus(statusBox, '', '');

      var data = {
        name: enquiryForm.elements.name.value.trim(),
        email: enquiryForm.elements.email.value.trim(),
        service: enquiryForm.elements.service.value,
        budget: enquiryForm.elements.budget.value,
        timeline: enquiryForm.elements.timeline.value
      };
      var estimate = buildEstimate(data);
      if (!estimate) { setStatus(statusBox, 'Please choose a service and try again.', 'error'); return; }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending\u2026';

      sendWithAjax().then(function (result) {
        if (!result.ok) { throw new Error('Request failed'); }
        showResult(data, estimate, result.demo);
      }).catch(function () {
        setStatus(statusBox, 'Sorry, we could not send your enquiry just now. Please try again, or call us on 011 456 7890.', 'error');
      }).then(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit enquiry';
      });
    });
  }

  /* ==========================================================
     CONTACT FORM
     ========================================================== */
  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    var contactStatus = document.getElementById('contact-status');
    var preview = document.getElementById('email-preview');

    addLiveValidation(contactForm);
    addCharCounters(contactForm);

    /* Turns the form data into the text of an email */
    function compileEmail(data) {
      var subjectLabel = contactForm.elements.subject.options[contactForm.elements.subject.selectedIndex].text;
      var subject = '[Website] ' + subjectLabel + ' - ' + data.name;
      var lines = [
        'Hello Thembisa and Son Woodworks,',
        '',
        data.message,
        '',
        '---',
        'Name: ' + data.name,
        'Email: ' + data.email
      ];
      if (data.phone) { lines.push('Phone: ' + data.phone); }
      lines.push('Message type: ' + subjectLabel);

      return { subject: subject, body: lines.join('\n') };
    }

    function showPreview(email) {
      preview.textContent = '';
      preview.appendChild(el('h2', '', 'Your email is ready'));
      preview.appendChild(el('p', '', 'Check it over, then press the button to open it in your email app. It is already addressed to us.'));

      var box = el('div', 'email-box');
      var rows = [['To', RECIPIENT], ['Subject', email.subject]];
      rows.forEach(function (row) {
        var p = el('p', 'email-row');
        p.appendChild(el('strong', '', row[0] + ': '));
        p.appendChild(document.createTextNode(row[1]));
        box.appendChild(p);
      });
      box.appendChild(el('pre', 'email-body', email.body));
      preview.appendChild(box);

      var actions = el('div', 'card-actions');

      var send = el('a', 'btn', 'Open in my email app');
      send.href = 'mailto:' + RECIPIENT +
        '?subject=' + encodeURIComponent(email.subject) +
        '&body=' + encodeURIComponent(email.body);

      var edit = el('button', 'btn btn-outline', 'Edit message');
      edit.type = 'button';
      edit.addEventListener('click', function () {
        preview.hidden = true;
        contactForm.hidden = false;
        contactForm.elements.message.focus();
      });

      actions.appendChild(send);
      actions.appendChild(edit);
      preview.appendChild(actions);

      preview.appendChild(el('p', 'form-note',
        'If nothing opens, send your message to ' + RECIPIENT + ' or call 011 456 7890.'));

      contactForm.hidden = true;
      preview.hidden = false;
      preview.focus();
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (contactForm.elements.website && contactForm.elements.website.value) { return; } // honeypot

      var check = validateForm(contactForm);
      if (check.firstInvalid) {
        setStatus(contactStatus, 'Please fix ' + check.errorCount + (check.errorCount === 1 ? ' field' : ' fields') + ' marked below and try again.', 'error');
        check.firstInvalid.focus();
        return;
      }
      setStatus(contactStatus, '', '');

      showPreview(compileEmail({
        name: contactForm.elements.name.value.trim(),
        email: contactForm.elements.email.value.trim(),
        phone: contactForm.elements.phone.value.trim(),
        message: contactForm.elements.message.value.trim()
      }));
    });
  }
})();
