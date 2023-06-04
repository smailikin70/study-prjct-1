const burger = document.querySelector('.burger__btn');
const menu = document.querySelector('.nav');
const menuLinks = menu.querySelectorAll('.nav__link');
const tabsBtn = document.querySelectorAll('.stage__btn-link');
const tabsItem = document.querySelectorAll('.stage__slider');
const search = document.querySelector('.search__line');
const searchbtn = document.querySelector('.search__btn');
const searchexit = document.querySelector('.search__exit');


const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: true,
});

new Accordion('.accordion-container');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger__active');

    menu.classList.toggle('nav__active');

    document.body.classList.toggle('stop-scroll')
  });

searchbtn.addEventListener('click',

  function () {

    search.classList.toggle('search__active');

    document.body.classList.toggle('stop-scroll')

  });

searchexit.addEventListener('click',

  function () {

    search.classList.toggle('search__active');

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
});
