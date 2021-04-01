const toggleBar = document.querySelector('.toggle-bar');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const header = document.querySelector('header');

// GSAP
const profileGsap = gsap.fromTo('.hero__image', { x: 250 }, { duration: 2, x: 0 });
const profileInfoGsap = gsap.fromTo('.hero__content', { x: -250 }, { duration: 2, x: 0 });

const toggleMenu = () => {
  toggleBar.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('fixed-height');
};

// EVENT LISTENER
toggleBar.addEventListener('click', () => {
  toggleMenu();
});
nav.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('nav__link')) {
    toggleMenu();
  }
});
window.addEventListener('DOMContentLoaded', () => {
  profileGsap.play();
  profileInfoGsap.play();
});
window.addEventListener('scroll', () => {
  if (window.scrollY >= window.outerHeight - 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  if (window.scrollY === header.offsetTop) {
    console.log('hello');
    profileGsap.restart(true);
    profileInfoGsap.restart(true);
  }
});
