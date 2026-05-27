import { refs } from '/js/exported/refs.js';
import {
  handlerOrderSubmit,
  closeOrder,
  onEscKeyPress,
  onBackdropClick,
  handleNameValidation,
  handlePhoneValidation,
  handleCommentValidation,
} from '/js/exported/handlers.js';

export let currentDessertId = null;

export function openModal(id) {
  refs.modalOverlay.classList.remove('is-hidden');
  refs.closeModalBtn.addEventListener('click', closeOrder);
  refs.orderForm.addEventListener('submit', handlerOrderSubmit);
  document.body.style.overflow = 'hidden';
  currentDessertId = id;
  window.addEventListener('keydown', onEscKeyPress);
  refs.modalOverlay.addEventListener('click', onBackdropClick);

  refs.orderForm.name.addEventListener('input', handleNameValidation);

  refs.orderForm.phone.addEventListener('input', handlePhoneValidation);

  refs.orderForm.comment.addEventListener('input', handleCommentValidation);
}
