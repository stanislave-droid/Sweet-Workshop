const openModalBtn = document.querySelector('.open-order-modal-btn');

const modalOverlay = document.querySelector('.order-modal-overlay');

const closeModalBtn = document.querySelector('.order-modal-close-btn');

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function openModal() {
  modalOverlay.classList.remove('is-hidden');

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('is-hidden');

  document.body.style.overflow = '';
}
