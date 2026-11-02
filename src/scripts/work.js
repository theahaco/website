import { href } from './base.js';

// Work page: Case studies / Articles views and the audience and network filters.
const AUDS = ['All', 'Institutions', 'Protocols and products', 'Ecosystems and open source'];
const NETS = ['All', 'Stellar', 'XRPL', 'Canton', 'Multi-network'];
const COPY = {
  articles: {
    eyebrow: 'Blog',
    h1: 'Notes from the engineers.',
    lede: 'What we learned taking regulated assets, protocol integrations and developer tooling to mainnet. Switch to Case studies for the work itself.',
    title: 'Blog: notes from the engineers | The Aha Company',
  },
  cases: {
    eyebrow: 'Work',
    h1: 'Named clients, live systems, public code.',
    lede: 'Case studies, filtered by who the work was for and the network it runs on. Switch to Articles for the writing that came out of them.',
    title: 'Work: case studies | The Aha Company',
  },
};

export function initWork() {
  const casesWrap = document.querySelector('[data-wk="cases"]');
  const artsWrap = document.querySelector('[data-wk="articles"]');
  if (!casesWrap || !artsWrap) return;
  const eyeEl = document.querySelector('[data-wk="eyebrow"]');
  const h1El = document.querySelector('[data-wk="h1"]');
  const ledeEl = document.querySelector('[data-wk="lede"]');
  const countEl = document.querySelector('[data-wk="count"]');
  const emptyEl = document.querySelector('[data-wk="empty"]');
  const tabs = document.querySelectorAll('.wk_tab');
  const state = {
    view: new URLSearchParams(location.search).get('view') === 'articles' ? 'articles' : 'cases',
    aud: 'All',
    net: 'All',
  };

  function chips(group, vals) {
    const g = document.querySelector(`[data-wk="${group}"]`);
    if (!g) return;
    vals.forEach((v) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wk_chip' + (v === 'All' ? ' is-on' : '');
      b.textContent = v;
      b.setAttribute('aria-pressed', v === 'All' ? 'true' : 'false');
      b.setAttribute('data-val', v);
      b.addEventListener('click', () => {
        state[group] = v;
        g.querySelectorAll('.wk_chip').forEach((c) => {
          const on = c.getAttribute('data-val') === v;
          c.classList.toggle('is-on', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        render();
      });
      g.appendChild(b);
    });
  }
  chips('aud', AUDS);
  chips('net', NETS);

  function render() {
    const isArt = state.view === 'articles';
    const copy = COPY[state.view];
    casesWrap.style.display = isArt ? 'none' : '';
    artsWrap.style.display = isArt ? '' : 'none';
    if (eyeEl) eyeEl.textContent = copy.eyebrow;
    if (h1El) h1El.textContent = copy.h1;
    if (ledeEl) ledeEl.textContent = copy.lede;
    document.title = copy.title;
    tabs.forEach((t) => {
      const on = t.getAttribute('data-view') === state.view;
      t.classList.toggle('is-on', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('a.nav_link, a.nav_menu-link').forEach((a) => {
      const h = a.getAttribute('href');
      if (h === href('/work/')) {
        if (isArt) a.removeAttribute('aria-current'); else a.setAttribute('aria-current', 'page');
      }
      if (h === href('/work/?view=articles')) {
        if (isArt) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      }
    });
    const active = isArt ? artsWrap : casesWrap;
    let n = 0;
    active.querySelectorAll('.work_item').forEach((it) => {
      const okA = state.aud === 'All' || it.getAttribute('data-fa') === state.aud;
      const okN = state.net === 'All' || it.getAttribute('data-fn') === state.net;
      const show = okA && okN;
      it.style.display = show ? '' : 'none';
      if (show) n++;
    });
    if (countEl) countEl.textContent = n + (n === 1 ? ' item' : ' items');
    if (emptyEl) emptyEl.classList.toggle('is-shown', n === 0);
  }

  tabs.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      state.view = t.getAttribute('data-view');
      history.replaceState(null, '', state.view === 'articles' ? href('/work/?view=articles') : href('/work/'));
      render();
    });
  });
  const clearBtn = document.querySelector('[data-wk="clear"]');
  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      state.aud = 'All';
      state.net = 'All';
      document.querySelectorAll('.wk_chip').forEach((c) => {
        const on = c.getAttribute('data-val') === 'All';
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      render();
    });
  }
  render();
}
