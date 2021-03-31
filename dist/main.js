"use strict";
const toggleBar = document.querySelector('.toggle-bar');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const header = document.querySelector('header');
const toggleMenu = () => {
    toggleBar.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('fixed-height');
};
toggleBar.addEventListener('click', () => {
    toggleMenu();
});
nav.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('nav__link')) {
        toggleMenu();
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= window.outerHeight - 200) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
});
//# sourceMappingURL=main.js.map