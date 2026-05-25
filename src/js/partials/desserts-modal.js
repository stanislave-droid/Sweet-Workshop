import { getDessert } from '/js/exported/api.js';
import { showError } from '/js/exported/helpers.js';
import spriteUrl from '/img/icons.svg';
import { refs, sweetiesDessertsList } from '/js/exported/refs.js';
import { handlerButton } from '/js/exported/handlers';
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

export async function openDessertModal(id) {
  try {
    const dessertData = await getDessert(id);

    fillModalWithData(dessertData);

    document.body.classList.add('modal-open');
    refs.overlay.classList.remove('is-hidden');
    refs.handlerOrderButton.dataset.order = id;

    window.addEventListener('keydown', onEscKeyPress);
    refs.overlay.addEventListener('click', onBackdropClick);
  } catch (error) {
    console.error('Помилка при отриманні десерту через api.js:', error.message);
    showError(
      'На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.'
    );
  }
}

function closeModal() {
  document.body.classList.remove('modal-open');
  refs.overlay.classList.add('is-hidden');

  window.removeEventListener('keydown', onEscKeyPress);
  refs.overlay.removeEventListener('click', onBackdropClick);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') closeModal();
}

function onBackdropClick(e) {
  if (e.target === refs.overlay) closeModal();
}

refs.closeBtn.addEventListener('click', closeModal);

// refs.popularList.addEventListener('click', handlerButton);
sweetiesDessertsList.addEventListener('click', handlerButton);
