/* Renick Carpentry — progressive enhancement. Works without a framework runtime.
 * Uses event delegation so it keeps working across client-side navigations. */
(function () {
  'use strict';
  // Mobile navigation
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-nav-toggle]');
    if (t) {
      var header = t.closest('[data-header]');
      var open = header.classList.toggle('nav-open');
      t.setAttribute('aria-expanded', String(open));
      var l = t.querySelector('[data-nav-label]'); if (l) l.textContent = open ? 'Close' : 'Menu';
      return;
    }
    // close the mobile menu after choosing a link
    var link = e.target.closest && e.target.closest('#mobile-nav a');
    if (link) { var h = document.querySelector('[data-header]'); if (h) { h.classList.remove('nav-open'); var b = h.querySelector('[data-nav-toggle]'); if (b) b.setAttribute('aria-expanded', 'false'); } }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { var h = document.querySelector('[data-header].nav-open'); if (h) { h.classList.remove('nav-open'); var b = h.querySelector('[data-nav-toggle]'); b.setAttribute('aria-expanded', 'false'); b.focus(); } }
  });

  // Before / after comparison
  document.addEventListener('input', function (e) {
    if (e.target.matches && e.target.matches('.ba > input[type=range]')) {
      e.target.parentElement.style.setProperty('--pos', e.target.value + '%');
    }
  });

  // Enquiry form validation + submission (Netlify Forms)
  var MAX_FILES = 5, MAX_TOTAL = 8 * 1024 * 1024; // Netlify Forms limit is 8 MB per submission
  function setError(form, name, msg) {
    var field = form.querySelector('[name="' + name + '"]');
    var err = form.querySelector('[data-error-for="' + name + '"]');
    if (field) { if (msg) field.setAttribute('aria-invalid', 'true'); else field.removeAttribute('aria-invalid'); }
    if (err) err.textContent = msg || '';
    return !msg;
  }
  function validate(form) {
    var v = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
    var ok = true, first = null;
    function check(name, msg) { var good = setError(form, name, msg); if (!good) { ok = false; if (!first) first = name; } }
    check('name', v('name') ? '' : 'Please enter your name.');
    var phone = v('phone').replace(/[\s()-]/g, '');
    check('phone', !phone ? 'Please enter a phone number so Alister can call you back.' : (/^(\+?61|0)[2-478]\d{8}$/.test(phone) ? '' : 'Please enter a valid Australian phone number, e.g. 0400 000 000.'));
    var email = v('email');
    check('email', !email ? 'Please enter your email address.' : (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please check your email address — it should look like name@example.com.'));
    check('suburb', v('suburb') ? '' : 'Please tell us the suburb or town of the property.');
    check('renovation_type', v('renovation_type') ? '' : 'Please choose the type of project.');
    check('description', v('description').length >= 10 ? '' : 'Please add a short description of your project (a sentence or two is fine).');
    var files = form.querySelector('[name="photos"]');
    if (files && files.files) {
      var total = 0; for (var i = 0; i < files.files.length; i++) total += files.files[i].size;
      check('photos', files.files.length > MAX_FILES ? 'Please attach up to ' + MAX_FILES + ' photos.' : (total > MAX_TOTAL ? 'Photos total more than 8 MB. Please choose fewer or smaller images, or email them instead.' : ''));
    }
    return { ok: ok, first: first };
  }
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.matches || !form.matches('[data-enquiry-form]')) return;
    e.preventDefault();
    var status = form.querySelector('[data-form-status]');
    var res = validate(form);
    if (!res.ok) {
      var summary = form.querySelector('[data-error-summary]');
      if (summary) { summary.hidden = false; summary.focus(); }
      var f = form.querySelector('[name="' + res.first + '"]'); if (f && !summary) f.focus();
      return;
    }
    var summaryEl = form.querySelector('[data-error-summary]'); if (summaryEl) summaryEl.hidden = true;
    var btn = form.querySelector('[type=submit]');
    var endpoint = form.getAttribute('data-endpoint');
    // Preview / unconfigured hosting: never pretend a message was sent.
    if (!endpoint || window.location.protocol === 'file:' || form.hasAttribute('data-preview')) {
      status.hidden = false; status.className = 'mt-6 p-5 rounded-[4px] border-2 border-dashed border-[#A07A1F] bg-[#FFF1C9] text-[#5A3E00]';
      status.innerHTML = '<strong>Preview only — this enquiry was not sent.</strong> Your details passed validation. The form delivers once the site is deployed on Netlify with form notifications switched on. In the meantime, please call or email Alister directly.';
      status.focus(); return;
    }
    btn.disabled = true; btn.textContent = 'Sending…';
    fetch(endpoint, { method: 'POST', body: new FormData(form) })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); window.location.href = form.getAttribute('action') || '/contact/thank-you/'; })
      .catch(function () {
        btn.disabled = false; btn.textContent = 'Send enquiry';
        status.hidden = false; status.className = 'mt-6 p-5 rounded-[4px] border-2 border-[#A3261B] bg-white text-ink';
        status.innerHTML = '<strong>Sorry — your enquiry could not be sent.</strong> Please try again, or call Alister on <a href="tel:+61409423724">0409 423 724</a> or email <a href="mailto:Alister@RenickCarpentary.com.au">Alister@RenickCarpentary.com.au</a>.';
        status.focus();
      });
  });
  // Clear an individual error as soon as it's fixed
  document.addEventListener('change', function (e) {
    var form = e.target.closest && e.target.closest('[data-enquiry-form]');
    if (form && e.target.name && e.target.getAttribute('aria-invalid') === 'true') validate(form);
  });
})();

/* Pre-select project type from ?type=… (service page CTAs). */
(function () {
  try {
    var t = new URLSearchParams(window.location.search).get('type');
    if (!t) return;
    var sel = document.querySelector('[data-enquiry-form] select[name="renovation_type"]');
    if (!sel) return;
    var map = { 'Home Renovations': 'Home renovation', 'Bathroom Renovations': 'Bathroom renovation', 'Kitchen Renovations': 'Kitchen renovation', 'Outdoor Living & Entertaining': 'Outdoor living / entertaining area', 'Custom Carpentry & Finishing': 'Custom carpentry & finishing' };
    var want = map[t] || t;
    for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text === want) { sel.selectedIndex = i; break; }
  } catch (e) {}
})();
