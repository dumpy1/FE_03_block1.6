import Swiper from 'swiper';
'use strict';
let mySwiper;
const breakpoint = window.matchMedia('(min-width: 767px)');
let swiperContainer = document.querySelectorAll('.swiper-container');
console.log('swiperContainer: ', swiperContainer);

let swiperWrapper;
let swiperItem;
let swiperPagination;



const breakpointChecker = function () {
  console.log('mySwiper в функции: ', mySwiper);
  if (breakpoint.matches) {

    if (mySwiper !== undefined)
      for (let i = 0; i < swiperContainer.length; i++) {
        mySwiper[i].destroy(true, true);
        swiperWrapper = swiperContainer[i].children;
        swiperWrapper[0].classList.remove('swiper-wrapper');
        swiperItem = swiperWrapper[0].children;
        for (var j = 0; j < swiperItem.length; j++) {
          swiperItem[j].classList.remove('swiper-slide');
        }
        swiperPagination = swiperContainer[i].querySelector('.swiper-pagination');
        console.log('swiperPagination: ', swiperPagination);

        swiperContainer[i].removeChild(swiperPagination);
      }
    return;
  } else if (!breakpoint.matches) {
    return enableSwiper();
  }
};

const enableSwiper = function () {

  console.log('swiperWrapper: ', swiperWrapper);
  for (let i = 0; i < swiperContainer.length; i++) {
    swiperWrapper = swiperContainer[i].children;
    swiperWrapper[0].classList.add('swiper-wrapper');
    swiperItem = swiperWrapper[0].children;
    for (var j = 0; j < swiperItem.length; j++) {
      swiperItem[j].classList.add('swiper-slide');
    }
    swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');
    swiperContainer[i].appendChild(swiperPagination);
  }
  mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

    },
  });
  console.log('mySwiper в функции: ', mySwiper.pagination);
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();


// toggler
let showToggle = document.querySelectorAll('.show-toggle');
let hiddenItem = document.querySelectorAll('.hidden-area');
console.log('hiddenItem: ', hiddenItem);

for (let i = 0; i < hiddenItem.length; i++) {
  showToggle[i].addEventListener('click', () => {

    hiddenItem[i].classList.add('hidden-area--visible');

    if (showToggle[i].textContent == 'Показать все') {
      showToggle[i].textContent = 'Скрыть';
      showToggle[i].classList.add('show-toggle--rotate');
    } else {
      hiddenItem[i].classList.remove('hidden-area--visible');
      showToggle[i].textContent = 'Показать все';
      showToggle[i].classList.remove('show-toggle--rotate');

    }
  });
}

//pop-ups open/close

let burger = document.querySelector('.button--menu');
let sideMenu = document.querySelector('.side-bar');
let sideMenuClose = sideMenu.querySelector('.button--close');
let warFog = document.querySelector('.modal-overlay');
let modal = document.querySelectorAll('.modal');
console.log('modal: ', modal);


let callButton = document.querySelectorAll('.button--call');

let chatButton = document.querySelectorAll('.button--chat');


let callback = document.querySelector('.callback');

let feedback = document.querySelector('.feedback');

burger.addEventListener('click', () => {
  event.preventDefault();
  sideMenu.classList.add('side-bar--visible');
  warFog.classList.add('side-bar--visible');
});
sideMenuClose.addEventListener('click', () => {
  event.preventDefault();
  sideMenu.classList.remove('side-bar--visible');
  warFog.classList.remove('side-bar--visible');
});
for(let i =0; i < callButton.length; i++) {
callButton[i].addEventListener('click', () => {
  event.preventDefault();
  callback.classList.add('modal--visible');
  warFog.classList.add('side-bar--visible');
});}
for(let i =0; i < chatButton.length; i++) {
chatButton[i].addEventListener('click', () => {
  event.preventDefault();
  feedback.classList.add('modal--visible');
  warFog.classList.add('side-bar--visible');
});}

for(let i =0; i < modal.length; i++) {
  let modalClose = modal[i].querySelector('.button--close');
  modalClose.addEventListener('click', () => {
    event.preventDefault();
  modal[i].classList.remove('modal--visible');
  warFog.classList.remove('side-bar--visible');
  })

}
