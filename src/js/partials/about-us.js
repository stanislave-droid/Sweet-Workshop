import { Swiper } from 'swiper';

const swiper = new Swiper('.about-us__swiper', {
  enabled: false,
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    786: {
      enabled: true,
    },
  },
});