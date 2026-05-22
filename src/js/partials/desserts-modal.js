const BASE_URL = 'https://goit.study';

const refs = {
  overlay: document.querySelector('.desserts-modal-overlay'),
  modal: document.querySelector('.desserts-modal'),
  body: document.body,
};

async function fetchDessertById(id) {
  try {
    const response = await fetch(`${BASE_URL}/deserts/${id}`);
    if (!response.ok)
      throw new Error(`Помилка завантаження: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Помилка при запиті до API:', error);
    return null;
  }
}

function createRatingStars(rating) {
  const roundedRating = Math.round(rating);
  let starsHtml = '';

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= roundedRating;
    starsHtml += `
      <svg class="star-icon ${isFilled ? 'filled' : ''}" width="18" height="18">
        <use href="./src/img/icons.svg#icon-star"></use>
      </svg>
    `;
  }
  return `
    <div class="rating-container">
      ${starsHtml}
      <span class="rating-value">${rating}</span>
    </div>
  `;
}

function renderModalInnerContent(dessert) {
  const { name, img, image, price, description, ingredients, rating } = dessert;
  const dessertImg = img || image;

  const starsMarkup = createRatingStars(rating);
  const ingredientsMarkup = ingredients.map(ing => `<li>${ing}</li>`).join('');

  refs.modal.innerHTML = `
    <button type="button" class="modal-close-btn" aria-label="Close modal">
      <svg class="modal-close-icon" width="14" height="14">
        <use href="./src/img/icons.svg#icon-close"></use>
      </svg>
    </button>

    <div class="desserts-modal-wrapper">
      <div class="modal-thumb">
        <img src="${dessertImg}" alt="${name}" class="modal-img" />
      </div>
      
      <div class="modal-info">
        <h2 class="modal-title">${name}</h2>
        ${starsMarkup}
        <p class="modal-price">${price} ₴</p>
        
        <p class="modal-section-title">Опис</p>
        <p class="modal-description">${description}</p>
        
        <p class="modal-section-title">Склад</p>
        <ul class="modal-ingredients">${ingredientsMarkup}</ul>
        
        <button type="button" class="order-btn" id="go-to-order-btn">Перейти до замовлення</button>
      </div>
    </div>
  `;

  refs.modal
    .querySelector('.modal-close-btn')
    .addEventListener('click', closeModal);
  document
    .getElementById('go-to-order-btn')
    .addEventListener('click', onOrderBtnClick);
}

async function openDessertModal(dessertId) {
  const dessertData = await fetchDessertById(dessertId);
  if (!dessertData) return;

  renderModalInnerContent(dessertData);

  refs.overlay.classList.remove('is-hidden');
  refs.body.classList.add('modal-open');

  window.addEventListener('keydown', onEscKeyPress);
  refs.overlay.addEventListener('click', onOverlayClick);
}

function closeModal() {
  refs.overlay.classList.add('is-hidden');
  refs.body.classList.remove('modal-open');
  refs.modal.innerHTML = '';

  window.removeEventListener('keydown', onEscKeyPress);
  refs.overlay.removeEventListener('click', onOverlayClick);
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function onOrderBtnClick() {
  closeModal();

  if (typeof openOrderFormModal === 'function') {
    openOrderFormModal();
  } else {
    console.warn('Функція команди openOrderFormModal() ще на стадії розробки.');
    alert(
      'Поточне вікно закрите! Тут має відкритись форма зворотного зв’язку від ваших колег.'
    );
  }
}

const galleryList = document.querySelector('.desserts-list');

if (galleryList) {
  galleryList.addEventListener('click', onGalleryClick);
}

async function onGalleryClick(event) {
  const clickedCard = event.target.closest('.dessert-item');

  if (!clickedCard) return;

  const dessertId = clickedCard.dataset.id;

  if (dessertId) {
    await openDessertModal(dessertId);
  }
}
