// Add a border to the nav once the page has scrolled past the top.
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav: hamburger toggles the link list. Tapping a link closes it.
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
  };
  navToggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
}

// Arrow-key scrolling for the work strip when it has focus.
const strip = document.querySelector('.work-strip');
if (strip) {
  strip.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const card = strip.querySelector('.project-card');
    if (!card) return;
    const step = card.getBoundingClientRect().width + 24;
    strip.scrollBy({ left: e.key === 'ArrowRight' ? step : -step, behavior: 'smooth' });
    e.preventDefault();
  });
}
