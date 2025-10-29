// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.menu-backdrop');
const body = document.body;

if (toggle && menu) {
  const setExpanded = (state) => {
    toggle.setAttribute('aria-expanded', state ? 'true' : 'false');
    toggle.setAttribute('aria-label', state ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.setAttribute('aria-hidden', state ? 'false' : 'true');
  };

  const closeMenu = () => {
    menu.classList.remove('menu--open');
    body.classList.remove('is-menu-open');
    backdrop?.classList.remove('is-visible');
    setExpanded(false);
  };

  const openMenu = () => {
    menu.classList.add('menu--open');
    body.classList.add('is-menu-open');
    backdrop?.classList.add('is-visible');
    setExpanded(true);
  };

  setExpanded(false);

  toggle.addEventListener('click', () => {
    const opened = menu.classList.contains('menu--open');
    opened ? closeMenu() : openMenu();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  backdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', closeMenu);

  window.matchMedia('(min-width:1021px)').addEventListener('change', closeMenu);
}

// Header sticky FLUIDE (vert -> beige) quand on sort du hero
const header = document.querySelector('.site-header');
if (header) {
  let ticking = false;
  const updateHeaderState = () => {
    const shouldStick = window.scrollY > 32;
    header.classList.toggle('is-sticky', shouldStick);
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderState);
      ticking = true;
    }
  };
  updateHeaderState();
  window.addEventListener('scroll', onScroll, { passive: true });
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
