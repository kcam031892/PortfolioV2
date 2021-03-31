const toggleBar = document.querySelector('.toggle-bar')! as HTMLDivElement;
const nav = document.querySelector('.nav')! as HTMLElement;
const body = document.querySelector('body')! as HTMLBodyElement;
const header = document.querySelector('header') as HTMLElement;

const toggleMenu = (): void => {
  toggleBar.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('fixed-height');
};

toggleBar.addEventListener('click', () => {
  toggleMenu();
});

nav.addEventListener('click', (e) => {
  const el = e.target as HTMLElement;
  if (el.classList.contains('nav__link')) {
    toggleMenu();
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.outerHeight - 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
