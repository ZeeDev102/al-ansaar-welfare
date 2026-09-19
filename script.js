const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
 const open = toggle.getAttribute('aria-expanded') !== 'true';
 toggle.setAttribute('aria-expanded', String(open));
 toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
 nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
 nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
