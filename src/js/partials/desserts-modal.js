import { getDessert } from '/js/exported/api.js';
import { showError } from '/js/exported/helpers.js';
import spriteUrl from '/img/icons.svg';
import { refs, sweetiesDessertsList } from '/js/exported/refs.js';
import { handlerButton, handlerOrderButton } from '/js/exported/handlers';
import { createStars } from '/js/exported/render-functions';

function fillModalWithData(dessert) {
  refs.modalImg.src = dessert.image;
  refs.modalImg.alt = dessert.name;
  refs.modalReitStars.innerHTML = createStars(dessert.rate);
  refs.modalTitle.textContent = dessert.name;
  refs.modalPrice.textContent = `${dessert.price} грн`;
  refs.modalDescription.textContent = dessert.description;
  refs.modalIngredients.textContent = dessert.composition;
  refs.orderBtn.dataset.id = dessert._id || dessert.id;
}

function clearModalData() {
  if (refs.modalImg) {
    refs.modalImg.src = '';
    refs.modalImg.alt = '';
  }
  if (refs.modalReitStars) refs.modalReitStars.innerHTML = '';
  if (refs.modalTitle) refs.modalTitle.textContent = '';
  if (refs.modalPrice) refs.modalPrice.textContent = '';
  if (refs.modalDescription) refs.modalDescription.textContent = '';
  if (refs.modalIngredients) refs.modalIngredients.textContent = '';
  if (refs.orderBtn) refs.orderBtn.removeAttribute('data-id');
}

let isModalLoading = false;

export async function openDessertModal(id) {
  if (isModalLoading) return;
  try {
    isModalLoading = true;
    const dessertData = await getDessert(id);

    fillModalWithData(dessertData);

    document.body.classList.add('modal-open');
    refs.overlay.classList.remove('is-hidden');
    refs.orderBtn.dataset.id = id;

    window.addEventListener('keydown', onEscKeyPress);
    refs.overlay.addEventListener('click', onBackdropClick);
    refs.orderBtn.addEventListener('click', handlerOrderButton);
  } catch (error) {
    console.error('Помилка при отриманні десерту через api.js:', error.message);
    showError(
      'На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.'
    );
  } finally {
    isModalLoading = false; // Вимикаємо захист у будь-якому випадку (успіх чи помилка)
  }
}

export function closeModal() {
  document.body.classList.remove('modal-open');
  refs.overlay.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  refs.overlay.removeEventListener('click', onBackdropClick);
  refs.orderBtn.removeEventListener('click', handlerOrderButton);
  clearModalData();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('modal-open');
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.target === refs.overlay) {
    document.body.classList.remove('modal-open');
    closeModal();
  }
}

if (refs.closeBtn) {
  refs.closeBtn.addEventListener('click', e => {
    document.body.classList.remove('modal-open');
    closeModal();
  });
}

sweetiesDessertsList.addEventListener('click', handlerButton);
