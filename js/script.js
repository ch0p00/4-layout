const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const container = document.querySelector('.header__container')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
    container.classList.toggle('open')
});

// Hide the menu when a link is clicked
menu.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    menu.classList.remove('open');
});
