// Site behaviour. Replaces webflow.js and the Webflow site's custom script
// (aha-site-v14.js). Everything that only depended on CMS data (links,
// hidden empty sections, dates, tables of contents) is now done at build
// time; what remains here is interaction.
import { initTabs } from './tabs.js';
import { initForms } from './form.js';
import { initWork } from './work.js';
import { initIntegrate } from './integrate.js';
import { initShare, initBackLink } from './article.js';

function initMenu() {
  const btn = document.querySelector('.nav_menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
}

initMenu();
initTabs();
initForms();
initWork();
initIntegrate();
initShare();
initBackLink();
