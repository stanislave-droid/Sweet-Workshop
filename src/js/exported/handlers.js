import {
  sweetiesDessertsList,
  sweetiesLoadMoreBtn,
  sweetiesCategoryLoader,
  sweetiesDessertsLoader,
  refs,
} from '/js/exported/refs';
import { getDesserts, postOrder } from '/js/exported/api';
import { createDessertsMarkup } from '/js/exported/render-functions';
import { sweetiesCardClasses } from '/js/exported/constants';
import {
  showError,
  checkBoundariesForLoadMoreBtn,
  showOrderError,
  showOrderSuccess,
} from '/js/exported/helpers';
import { openDessertModal, closeModal } from '/js/partials/desserts-modal';
import { openModal, currentDessertId } from '/js/partials/order-modal';

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
export function handlerButton(event) {
  if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'svg') {
    openDessertModal(event.target.closest('.dessert-card').dataset.id);
  }
}
export function handlerOrderButton(event) {
  if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'svg') {
    openModal(event.target.closest('[data-order-btn]').dataset.id);
    closeModal();
  }
}

export function closeOrderModal(event) {
  if (event.target.classList.contains('order-modal-close-btn')) {
    closeOrder();
  }
}

export function onEscKeyPress(e) {
  if (e.code === 'Escape') closeOrder();
}

export function closeOrder() {
  refs.modalOverlay.classList.add('is-hidden');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.modalOverlay.removeEventListener('click', onBackdropClick);
  refs.orderForm.removeEventListener('submit', handlerOrderSubmit);
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);
}

export function onBackdropClick(e) {
  if (e.target.classList.contains('order-modal-overlay')) closeOrder();
}

export function handlerOrderSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const data = {
    name: elements.name.value.trim(),

    phone: elements.phone.value.trim(),

    comment: elements.comment.value.trim(),

    dessertId: currentDessertId,
  };

  // NAME

  if (data.name.length < 2 || data.name.length > 48) {
    showOrderError("Ім'я повинно містити від 2 до 48 символів");

    return;
  }

  // PHONE

  if (data.phone.length !== 12) {
    showOrderError('Номер телефону повинен містити 12 цифр');

    return;
  }

  // COMMENT

  if (data.comment.length < 2 || data.comment.length > 256) {
    showOrderError('Коментар повинен містити від 2 до 256 символів');

    return;
  }

  postOrder(data)
    .then(({ orderNum }) => {
      showOrderSuccess(orderNum);
      closeOrder();
    })
    .catch(error => {
      showOrderError(error.message);
    })
    .finally(() => {
      event.target.reset();
    });
}
