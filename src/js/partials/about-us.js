import { Swiper } from 'swiper';

const swiper = new Swiper('.about-us__swiper', {
  enabled: false,
  breakpoints: {
    786: {
      enabled: true,
    },
  },
});