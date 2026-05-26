import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const aboutUsSwiper = new Swiper('.about-us__swiper', {
  enabled: false,
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 24,
  direction: 'horizontal',
  grabCursor: true,
  observer: true,
  observeParents: true,

  breakpoints: {
    786: {
      enabled: true,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next.about-us__arrow',
    prevEl: '.swiper-button-prev.about-us__arrow',
  },

  pagination: {
    el: '.swiper-pagination.about-us__pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
});