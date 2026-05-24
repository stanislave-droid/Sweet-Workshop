import { getPopularDesserts } from '../exported/api';
import { createDessertsMarkup } from '../exported/render-functions';
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import {showError} from `../exported/helpers`

const classes = {
  li: 'popular-card swiper-slide',
  img: 'popular-img',
  contentHeader: 'popular-content-header',
  category: 'popular-paragraph',
  description: 'popular-paragraph',
  nameWrapper: 'popular-name-wraper',
  name: 'popular-name',
  priceWrapper: 'popular-price-wrapper',
  price: 'popular-price',
  button: 'popular-button',
  description: 'popular-description',
  content: 'popular-content',
};

const loader = document.querySelector('.popular-loader');
loader.classList.remove('hidden');

getPopularDesserts()
  .then(({ desserts }) => {
    const popularList = document.querySelector('.popular-list');
    popularList.insertAdjacentHTML(
      'beforeend',
      createDessertsMarkup(desserts, classes)
    );
    runSwiper()

    //---- event---

    popularList.addEventListener('click', handlerButton);

    //---example hamdler---

    function handlerButton(event) {
      if (event.target.dataset.button === 'btn') {
        console.log(event.target.closest(`.popular-card`).dataset.id);
        // return event.target.closest(`.popular-card`).dataset.id
      }
    }
  })
  .catch(error => {
    // showError(error.message);
  })
  .finally(() => {
    loader.classList.add('hidden');
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
