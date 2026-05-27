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

  refs.orderForm.name.removeEventListener('input', handleNameValidation);

  refs.orderForm.phone.removeEventListener('input', handlePhoneValidation);

  refs.orderForm.comment.removeEventListener('input', handleCommentValidation);
}

export function onBackdropClick(e) {
  if (e.target.classList.contains('order-modal-overlay')) closeOrder();
}

function validateName(name) {
  return name.length >= 2 && name.length <= 48;
}

function validatePhone(phone) {
  const cleanedPhone = phone.replace(/\D/g, '');

  return cleanedPhone.length === 12;
}

function validateComment(comment) {
  return comment.length >= 2 && comment.length <= 256;
}

export function handleNameValidation(event) {
  const isValid = validateName(event.target.value.trim());

  // if (isValid) {
  //   event.target.classList.remove('is-invalid');
  //   event.target.classList.add('is-valid');
  // } else {
  //   event.target.classList.remove('is-valid');
  //   event.target.classList.add('is-invalid');
  // }

  const errorElement =
    event.target.parentElement.querySelector('.order-form-error');

  if (isValid) {
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');

    errorElement.textContent = '';
    errorElement.classList.remove('visible');
  } else {
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');

    errorElement.textContent = "Ім'я повинно містити від 2 до 48 символів";

    errorElement.classList.add('visible');
  }
}

export function handlePhoneValidation(event) {
  const isValid = validatePhone(event.target.value.trim());

  // if (isValid) {
  //   event.target.classList.remove('is-invalid');
  //   event.target.classList.add('is-valid');
  // } else {
  //   event.target.classList.remove('is-valid');
  //   event.target.classList.add('is-invalid');
  // }

  const errorElement =
    event.target.parentElement.querySelector('.order-form-error');

  if (isValid) {
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');

    errorElement.textContent = '';
    errorElement.classList.remove('visible');
  } else {
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');

    errorElement.textContent = 'Номер телефону повинен містити 12 цифр';

    errorElement.classList.add('visible');
  }
}

export function handleCommentValidation(event) {
  const isValid = validateComment(event.target.value.trim());

  // if (isValid) {
  //   event.target.classList.remove('is-invalid');
  //   event.target.classList.add('is-valid');
  // } else {
  //   event.target.classList.remove('is-valid');
  //   event.target.classList.add('is-invalid');
  // }

  const errorElement =
    event.target.parentElement.querySelector('.order-form-error');

  if (isValid) {
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');

    errorElement.textContent = '';
    errorElement.classList.remove('visible');
  } else {
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');

    errorElement.textContent = 'Коментар повинен містити від 2 до 256 символів';

    errorElement.classList.add('visible');
  }
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

  // if (data.name.length < 2 || data.name.length > 48)
  if (!validateName(data.name)) {
    showOrderError("Ім'я повинно містити від 2 до 48 символів");

    return;
  }

  // PHONE

  // if (data.phone.length !== 12)
  if (!validatePhone(data.phone)) {
    showOrderError('Номер телефону повинен містити 12 цифр');

    return;
  }

  // COMMENT

  // if (data.comment.length < 2 || data.comment.length > 256)
  if (!validateComment(data.comment)) {
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
