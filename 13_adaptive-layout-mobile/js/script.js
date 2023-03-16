let burger = document.querySelector('.burger__btn');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let tabsBtn = document.querySelectorAll('.stage__btn-link');
let tabsItem = document.querySelectorAll('.stage__slider');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger__active');

        menu.classList.toggle('nav__active');

        document.body.classList.toggle('stop-scroll')
    });

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger__active');

        menu.classList.remove('nav__active');

        document.body.classList.remove('stop-scroll')
    })
});

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        console.log(path);

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('stage__btn-active')
        });
        e.currentTarget.classList.add('stage__btn-active');

        tabsItem.forEach(function (element) {
            element.classList.remove('stage__active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('stage__active');
    })
})