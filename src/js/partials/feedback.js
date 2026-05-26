import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { ApiBaseURL } from '/js/exported/constants.js';
import { renderFeedbackSection } from '/js/exported/render-functions.js';

axios.defaults.baseURL = ApiBaseURL;

function initFeedbackSlider() {
  new Swiper('.feedback-slider', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    spaceBetween: 24,
    grabCursor: true,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next.feedback-arrow',
      prevEl: '.swiper-button-prev.feedback-arrow',
    },

    pagination: {
      el: '.swiper-pagination.feedback-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeedbackSection(initFeedbackSlider);
});