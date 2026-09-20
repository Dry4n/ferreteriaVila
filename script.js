const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 800px)');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.dataset.collapsed = String(mobile.matches && !open);
}

toggle.hidden = false;
setMenu(false);
toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', () => setMenu(false));

const headerCall = document.querySelector('.header-call');
const scrollTopButton = document.querySelector('.scroll-top');
function updateHeaderCall() {
  headerCall.hidden = window.scrollY <= 40;
  scrollTopButton.hidden = window.scrollY <= 40;
}
window.addEventListener('scroll', updateHeaderCall, { passive: true });
window.addEventListener('pageshow', updateHeaderCall);
updateHeaderCall();
scrollTopButton.addEventListener('click', () => {
  setMenu(false);
  document.querySelector('.brand').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

const contactForm = document.querySelector('.contact-form');
const formStatus = contactForm.querySelector('.form-status');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = contactForm.dataset.success;
});
contactForm.addEventListener('input', () => {
  formStatus.textContent = '';
});
contactForm.querySelector('button[type="submit"]').disabled = false;
