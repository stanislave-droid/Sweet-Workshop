import {
  sweetiesDessertsList,
  sweetiesLoadMoreBtn,
  sweetiesCategoryLoader,
  sweetiesDessertsLoader,
  refs,
} from '/js/exported/refs';
import { getDesserts } from '/js/exported/api';
import { createDessertsMarkup } from '/js/exported/render-functions';
import { sweetiesCardClasses } from '/js/exported/constants';
import { showError, checkBoundariesForLoadMoreBtn } from '/js/exported/helpers';

let pageCount = 1;
let categoryId;

export function onCategoryChange(id) {
  sweetiesDessertsLoader.hidden = false;
  sweetiesCategoryLoader.hidden = false;
  getDesserts(1, id)
    .then(({ desserts, ...args }) => {
      sweetiesDessertsList.innerHTML = createDessertsMarkup(
        desserts,
        sweetiesCardClasses
      );

      categoryId = id;
      pageCount = 1;

      if (checkBoundariesForLoadMoreBtn(args)) {
        sweetiesLoadMoreBtn.classList.remove('is-hidden');
        sweetiesLoadMoreBtn.addEventListener('click', onLoadMoreBtn);
      } else {
        sweetiesLoadMoreBtn.classList.add('is-hidden');
        sweetiesLoadMoreBtn.removeEventListener('click', onLoadMoreBtn);
      }
    })
    .catch(error => {
      showError(error.message);
    })
    .finally(() => {
      sweetiesDessertsLoader.hidden = true;
      sweetiesCategoryLoader.hidden = true;
    });
}

export function onLoadMoreBtn() {
  sweetiesDessertsLoader.hidden = false;
  sweetiesLoadMoreBtn.disabled = true;
  getDesserts(++pageCount, categoryId)
    .then(({ desserts, ...args }) => {
      sweetiesDessertsList.insertAdjacentHTML(
        'beforeend',
        createDessertsMarkup(desserts, sweetiesCardClasses)
      );
      if (!checkBoundariesForLoadMoreBtn(args)) {
        sweetiesLoadMoreBtn.classList.add('is-hidden');
        sweetiesLoadMoreBtn.removeEventListener('click', onLoadMoreBtn);
      }
    })
    .catch(error => {
      showError(error.message);
    })
    .finally(() => {
      sweetiesDessertsLoader.hidden = true;
      sweetiesLoadMoreBtn.disabled = false;
    });
}

export function handleHeaderMenuEscape(ev) {
  if (ev.key === "Escape") {
    refs.headerMenu.classList.remove('header--open');
  }
}

export function handleHeaderMenuClick(ev) {
  if (ev.target.closest("button") === refs.headerMenuButton) {
    refs.headerMenu.classList.toggle('header--open');
  } else if (ev.target.closest("a")) {
    refs.headerMenu.classList.remove('header--open');
  }
}