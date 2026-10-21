import { SITE } from './config.js';

const NAV = [
  ['index.html', 'Home'],
  ['team.html', 'Meet the Team'],
  ['marketing.html', 'Our Marketing'],
  ['process.html', 'Selling Process'],
  ['communities.html', 'Communities'],
  ['contact.html', 'Contact'],
];

// Current page file name, e.g. "team.html" (works with or without ".html" in the address).
let here = location.pathname.split('/').pop() || 'index.html';
if (!here.includes('.')) here += '.html';
const isHere = (href) => href === here;

const missing = (label) => `<span class="needed">[${label} needed]</span>`;
const phoneHtml = () =>
  SITE.phone ? `<a href="tel:${SITE.phone.replace(/[^\d+]/g, '')}">${SITE.phone}</a>` : missing('Phone');
const emailHtml = () => (SITE.email ? `<a href="mailto:${SITE.email}">${SITE.email}</a>` : missing('Email'));

/* ---------- Header ---------- */
const header = document.querySelector('[data-site-header]');
if (header) {
  const overHero = header.hasAttribute('data-over-hero');
  header.className = `site-header${overHero ? ' over-hero' : ''}`;
  header.innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="${SITE.teamName}, home">
        <span class="brand-name">Nadine Krisa Peckins</span>
        <span class="brand-sub">Team · Keller Williams</span>
      </a>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${NAV.map(([h, l]) => `<a href="${h}"${isHere(h) ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
        <a href="${SITE.searchUrl}" target="_blank" rel="noopener">Search Homes <span aria-hidden="true">↗</span></a>
        <a class="btn btn-brass nav-cta" href="home-value.html">Home Value</a>
      </nav>
      <button class="menu-btn" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Menu</span><span class="bars" aria-hidden="true"></span>
      </button>
    </div>`;
  const btn = header.querySelector('.menu-btn');
  btn.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
  });
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Footer ---------- */
const footer = document.querySelector('[data-site-footer]');
if (footer) {
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="wrap footer-grid">
      <div>
        <p class="footer-brand">${SITE.teamName}</p>
        <p>${SITE.brokerage}<br>${SITE.officeStreet}<br>${SITE.officeCity}</p>
      </div>
      <div>
        <p class="footer-label">Contact</p>
        <p>${phoneHtml()}<br>${emailHtml()}</p>
        <p><a href="${SITE.facebookUrl}" target="_blank" rel="noopener">Facebook</a></p>
      </div>
      <div>
        <p class="footer-label">Explore</p>
        <p>${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join('<br>')}<br>
        <a href="${SITE.searchUrl}" target="_blank" rel="noopener">Search Homes ↗</a></p>
      </div>
      <div class="footer-cta">
        <p class="footer-label">Thinking of selling?</p>
        <a class="btn btn-brass" href="home-value.html">Request your home's value</a>
      </div>
    </div>
    <div class="wrap legal">
      <p>${SITE.agentName}, Realtor® · License ${SITE.license} · ${SITE.brokerage}. Each Keller Williams® office is independently owned and operated.</p>
      <p><span class="eho">Equal Housing Opportunity</span> · We are committed to the Fair Housing Act. · <a href="privacy.html">Privacy</a> · © ${new Date().getFullYear()} ${SITE.teamName}</p>
    </div>`;
}

/* ---------- Mobile sticky call to action ---------- */
if (!document.body.hasAttribute('data-no-sticky')) {
  const bar = document.createElement('div');
  bar.className = 'sticky-cta';
  bar.innerHTML = `<a class="btn btn-brass" href="home-value.html">Request your home's value</a>${
    SITE.phone ? `<a class="btn btn-ghost-dark" href="tel:${SITE.phone.replace(/[^\d+]/g, '')}">Call</a>` : ''
  }`;
  document.body.append(bar);
}

/* ---------- Fill contact details anywhere on a page ---------- */
document.querySelectorAll('[data-phone]').forEach((el) => (el.innerHTML = phoneHtml()));
document.querySelectorAll('[data-email]').forEach((el) => (el.innerHTML = emailHtml()));
document.querySelectorAll('[data-office]').forEach((el) => (el.innerHTML = `${SITE.officeStreet}<br>${SITE.officeCity}`));
document.querySelectorAll('[data-search-link]').forEach((el) => (el.href = SITE.searchUrl));
if (!SITE.showReviewTags) document.documentElement.classList.add('hide-review');

/* ---------- Photos: show the real image once it exists, else a labeled placeholder ---------- */
document.querySelectorAll('.photo img').forEach((img) => {
  const fail = () => img.closest('.photo')?.classList.add('is-placeholder');
  img.addEventListener('error', fail);
  if (img.complete && img.naturalWidth === 0) fail();
});

/* ---------- Hero video: optional; falls back to the still image ---------- */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('video[data-hero-video]').forEach((v) => {
  if (reduce || navigator.connection?.saveData) return v.remove();
  v.addEventListener('error', () => v.remove(), true);
  v.addEventListener('canplay', () => v.classList.add('ready'));
  v.src = v.dataset.src;
});

/* ---------- Scroll reveal ---------- */
const io = 'IntersectionObserver' in window && !reduce
  ? new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
  : null;
document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

/* ---------- Lead forms ---------- */
document.querySelectorAll('form[data-lead-form]').forEach((form) => {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const say = (msg, kind) => {
    status.textContent = msg;
    status.dataset.kind = kind;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // hidden spam trap was filled in by a bot

    if (!SITE.formAccessKey) {
      say('This form isn’t connected yet. (Site setup: add the form key in src/config.js.)', 'error');
      return;
    }

    button.disabled = true;
    say('Sending…', 'pending');
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.formAccessKey,
          subject: `${form.dataset.leadForm} — new request from the website`,
          from_name: SITE.teamName + ' website',
          form: form.dataset.leadForm,
          page: location.href,
          ...data,
        }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || out.success === false) throw new Error(out.message || res.statusText);
      form.reset();
      form.classList.add('sent');
      say(form.dataset.thanks || 'Thank you — we’ll be in touch shortly.', 'ok');
    } catch {
      say(
        `Sorry — that didn’t go through. Please try again${SITE.phone ? ` or call ${SITE.phone}` : ''}.`,
        'error'
      );
    } finally {
      button.disabled = false;
    }
  });
});
