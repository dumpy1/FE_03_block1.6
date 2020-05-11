import Swiper from 'swiper';
'use strict';
    const breakpoint = window.matchMedia('(min-width: 767px)');
    let mySwiper;
    console.log('mySwiper: ', mySwiper);
    let swiperWrapper = document.querySelector('.slider');

    let swiperItem = document.querySelectorAll('.slider-item');

    const breakpointChecker = function () {
      console.log('mySwiper в функции: ', mySwiper);
        if (breakpoint.matches) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            swiperWrapper.classList.remove('swiper-wrapper');
            for (var i =0; i < swiperItem.length; i++) {
    swiperItem[i].classList.remove('swiper-slide');
}
            return;
        } else if (!breakpoint.matches) {
            return enableSwiper();
        }
    };
    const enableSwiper = function () {
swiperWrapper.classList.add('swiper-wrapper');

for (var i =0; i < swiperItem.length; i++) {
    swiperItem[i].classList.add('swiper-slide');
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
            let showToggle = document.querySelector('.show-toggle');
            let hiddenItem = document.querySelector('.brands__slider');
            showToggle.addEventListener('click', () => {

                hiddenItem.style.height = 100 + '%';
                if (showToggle.textContent == 'Показать все') {
                    showToggle.textContent = 'Скрыть';
                    showToggle.classList.add('show-toggle--rotate');
                } else {
                    hiddenItem.style.height = 200 + 'px';
                    showToggle.textContent = 'Показать все';
                    showToggle.classList.remove('show-toggle--rotate');

                }
            })
