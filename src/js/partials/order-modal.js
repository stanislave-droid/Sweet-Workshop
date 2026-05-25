import { postOrder } from '../exported/api.js';
import Swal from 'sweetalert2';

let currentDessertId = null;

const modalOverlay = document.querySelector('.order-modal-overlay');

const closeModalBtn = document.querySelector('.order-modal-close-btn');

const orderForm = document.querySelector('.order-form');

// OPEN MODAL FROM DYNAMIC DESSERT BUTTONS

document.addEventListener('click', event => {
  const button = event.target.closest('.open-order-modal-btn');

  if (!button) return;

  currentDessertId = button.dataset.id;

  openModal();
});

// CLOSE BUTTON

closeModalBtn.addEventListener('click', closeModal);

// FORM SUBMIT

orderForm.addEventListener('submit', handleOrderSubmit);

// CLOSE BY OVERLAY

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// CLOSE BY ESC

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

async function handleOrderSubmit(event) {
  event.preventDefault();

  const formData = new FormData(orderForm);

  const data = {
    name: formData.get('name').trim(),

    phone: formData.get('phone').replace(/\D/g, ''),

    comment: formData.get('comment').trim(),

    // dessertId: currentDessertId,

    dessertId: '6852a9fcb459460cb6b47748',
  };

  // NAME

  if (data.name.length < 2 || data.name.length > 48) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: "Ім'я повинно містити від 2 до 48 символів",
    });

    return;
  }

  // PHONE

  if (!/^\d{12}$/.test(data.phone)) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Номер телефону повинен містити 12 цифр',
    });

    return;
  }

  // COMMENT

  if (data.comment.length < 2 || data.comment.length > 256) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Коментар повинен містити від 2 до 256 символів',
    });

    return;
  }

  try {
    const result = await postOrder(data);

    console.log(result);

    Swal.fire({
      icon: 'success',
      title: 'Успіх',
      text: `Замовлення успішно створене! № ${result?.orderNum || '---'}`,
    });

    orderForm.reset();

    closeModal();
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: error.message,
    });
  }
}
