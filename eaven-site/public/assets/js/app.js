// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const opened = menu.classList.toggle('menu--open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

// Header sticky FLUIDE (vert -> beige) quand on sort du hero
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
if (header && hero) {
  const io = new IntersectionObserver(
    ([entry]) => header.classList.toggle('is-sticky', !entry.isIntersecting),
    { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
  );
  io.observe(hero);
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const ro = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.15 }
  );
  reveals.forEach(el => ro.observe(el));
}