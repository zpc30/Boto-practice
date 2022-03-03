const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const navOpen = document.querySelector('.navOpen');
const buttonX = document.querySelector('.burgerX');

burger.addEventListener('click', e => {
    navMenu.classList.toggle('navOpen');
    burger.classList.toggle('burgerX');
})