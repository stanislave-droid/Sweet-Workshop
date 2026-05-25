import { getPopularDesserts } from '/js/exported/api';
import { createDessertsMarkup } from '/js/exported/render-functions';
import { handlerButton } from '/js/exported/handlers';
import { classesPopular } from '/js/exported/constants';
import { loaderPopular, popularList } from '/js/exported/refs';
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {showError} from `/js/exported/helpers`

loaderPopular.classList.remove('hidden');

getPopularDesserts()
  .then(({ desserts }) => {
    popularList.insertAdjacentHTML(
      'beforeend',
      createDessertsMarkup(desserts, classesPopular)
    );
    runSwiper();

    popularList.addEventListener('click', handlerButton);
  })
  .catch(error => {
    showError(error.message);
  })
  .finally(() => {
    loaderPopular.classList.add('hidden');
  });

function runSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination, Navigation],
    slidesPerGroup: 1,
    cssMode: true,
    nested: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.navigation-next',
      prevEl: '.navigation-previus',
    },
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'popular-bullet',
      bulletActiveClass: 'popular-bullet-active',
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
