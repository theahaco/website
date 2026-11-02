// Contact form without Webflow's form backend.
//
// The endpoint lives in src/data/site.ts (contact.formEndpoint) and is
// rendered into the form's `action`. Any service that accepts a POST of form
// fields and answers JSON works (Formspree, Basin, Getform, a Cloudflare
// Worker...). Until one is configured the form falls back to opening the
// visitor's email client with the message prefilled, so nothing is lost.
//
// Markup keeps Webflow's structure and classes:
//   .w-form > form + .w-form-done + .w-form-fail
export function initForms(root = document) {
  root.querySelectorAll('.w-form form').forEach((form) => {
    const wrap = form.closest('.w-form');
    const done = wrap.querySelector('.w-form-done');
    const fail = wrap.querySelector('.w-form-fail');
    const submit = form.querySelector('[type="submit"]');
    const endpoint = form.getAttribute('action') || '';
    const mailto = form.dataset.mailto || '';

    // Answers carried over from the Integrate questionnaire (/contact?what=...)
    const params = new URLSearchParams(location.search);
    const labels = { what: 'What goes onchain', who: 'Who may read the ledger', where: 'Users and liquidity today', fund: 'Funding' };
    const answers = Object.keys(labels).filter((k) => params.get(k)).map((k) => `${labels[k]}: ${params.get(k)}`);
    const message = form.querySelector('textarea');
    if (answers.length && message && !message.value) {
      message.value = `From the Integrate page:\n${answers.join('\n')}\n\n`;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (fail) fail.style.display = 'none';
      const data = new FormData(form);
      const label = submit ? (submit.value || submit.textContent) : '';
      const wait = submit && submit.dataset.wait;
      if (submit && wait) {
        if (submit.tagName === 'INPUT') submit.value = wait; else submit.textContent = wait;
      }
      try {
        if (endpoint && /^https?:/i.test(endpoint)) {
          const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
        } else if (mailto) {
          const lines = [];
          for (const [k, v] of data.entries()) {
            if (typeof v === 'string' && v.trim() && !k.startsWith('_')) lines.push(`${k}: ${v}`);
          }
          const subject = encodeURIComponent(form.dataset.subject || 'Website enquiry');
          window.location.href = `mailto:${mailto}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
        } else {
          throw new Error('No form endpoint configured');
        }
        form.style.display = 'none';
        if (done) done.style.display = 'block';
      } catch (err) {
        console.error(err);
        if (fail) fail.style.display = 'block';
      } finally {
        if (submit && wait) {
          if (submit.tagName === 'INPUT') submit.value = label; else submit.textContent = label;
        }
      }
    });
  });
}
