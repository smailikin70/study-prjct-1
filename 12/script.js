const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');

window.addEventListener('DOMContentLoaded', () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('nav--active');
        document.body.classList.toggle('scroll-stop');
    })
})