import { renovationTypes, timingOptions, budgetOptions, planOptions, FORM_NAME } from '@/lib/enquiry';
import { allAreas } from '@/lib/site';

/**
 * Enquiry form — Netlify Forms (multipart, supports photo uploads).
 * Netlify detects the form from /public/__forms.html at deploy time; JS posts FormData there.
 * Spam protection: honeypot field + Netlify's built-in Akismet filtering. See docs/LAUNCH_CHECKLIST.md.
 * Validation lives in /public/js/site.js (progressive enhancement; native HTML validation is the fallback).
 */
export default function EnquiryForm() {
  const preview = process.env.NEXT_PUBLIC_PREVIEW === 'true';
  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/contact/thank-you/"
      encType="multipart/form-data"
      data-enquiry-form
      data-endpoint={preview ? '' : '/__forms.html'}
      {...(preview ? { 'data-preview': '' } : {})}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true"><label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

      <div data-error-summary hidden tabIndex={-1} role="alert" className="border-2 border-[#A3261B] rounded-[4px] p-4 bg-white font-semibold text-[#A3261B]">
        Please check the highlighted fields below.
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field sm:col-span-2">
          <label htmlFor="f-name">Your name <span aria-hidden="true">*</span></label>
          <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="e-name" />
          <p id="e-name" className="error" data-error-for="name" aria-live="polite"></p>
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone <span aria-hidden="true">*</span></label>
          <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-describedby="e-phone" />
          <p id="e-phone" className="error" data-error-for="phone" aria-live="polite"></p>
        </div>
        <div className="field">
          <label htmlFor="f-email">Email <span aria-hidden="true">*</span></label>
          <input id="f-email" name="email" type="email" autoComplete="email" required aria-describedby="e-email" />
          <p id="e-email" className="error" data-error-for="email" aria-live="polite"></p>
        </div>
        <div className="field">
          <label htmlFor="f-suburb">Suburb or town of the property <span aria-hidden="true">*</span></label>
          <input id="f-suburb" name="suburb" type="text" list="area-list" autoComplete="address-level2" required aria-describedby="e-suburb" />
          <datalist id="area-list">{allAreas.map((a) => <option key={a} value={a} />)}</datalist>
          <p id="e-suburb" className="error" data-error-for="suburb" aria-live="polite"></p>
        </div>
        <div className="field">
          <label htmlFor="f-type">Type of project <span aria-hidden="true">*</span></label>
          <select id="f-type" name="renovation_type" required defaultValue="" aria-describedby="e-type">
            <option value="" disabled>Please choose…</option>
            {renovationTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <p id="e-type" className="error" data-error-for="renovation_type" aria-live="polite"></p>
        </div>
      </div>

      <fieldset className="field">
        <legend>Where are you up to? <span className="font-normal text-muted">(optional)</span></legend>
        <div className="mt-2 space-y-2">
          {planOptions.map((p, i) => (
            <label key={p} className="flex items-center gap-3 !font-medium cursor-pointer min-h-[44px]">
              <input type="radio" name="plans" value={p} className="w-5 h-5 accent-forest" id={`f-plans-${i}`} /> {p}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="f-desc">Tell Alister about your project <span aria-hidden="true">*</span></label>
        <p className="hint" id="h-desc">What would you like to change, and what would a great outcome look like? A few sentences is plenty.</p>
        <textarea id="f-desc" name="description" required aria-describedby="h-desc e-desc"></textarea>
        <p id="e-desc" className="error" data-error-for="description" aria-live="polite"></p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="f-timing">Approximate timing <span className="font-normal text-muted">(optional)</span></label>
          <select id="f-timing" name="timing" defaultValue="">
            <option value="">Not sure</option>
            {timingOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-budget">Budget range <span className="font-normal text-muted">(optional)</span></label>
          <select id="f-budget" name="budget" defaultValue="Prefer not to say">
            {budgetOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-photos">Photos of the space <span className="font-normal text-muted">(optional)</span></label>
        <p className="hint" id="h-photos">Up to 5 images, 8 MB in total. Phone photos are perfect.</p>
        <input id="f-photos" name="photos" type="file" accept="image/*" multiple aria-describedby="h-photos e-photos" className="file-input block w-full text-base" />
        <p id="e-photos" className="error" data-error-for="photos" aria-live="polite"></p>
      </div>

      <p className="text-[0.9375rem] text-muted">Your details are only used to respond to your enquiry. See our <a href="/privacy/">privacy notice</a>.</p>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">Send enquiry</button>
      <div data-form-status hidden tabIndex={-1} role="status" aria-live="polite"></div>
    </form>
  );
}
