import { getDessert } from '../exported/api.js';
import { showError } from '../exported/helpers.js';
import spriteUrl from '../../img/icons.svg';

const refs = {
  overlay: document.querySelector('[data-dessert-modal]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  starsContainer: document.querySelector('#dessert-raty-stars'),
};

// --- ЗАВАНТАЖЕННЯ БІБЛІОТЕКИ RATY-JS ---
function loadRatyLibrary() {
  return new Promise(resolve => {
    if (window.Raty) return resolve(window.Raty);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://jsdelivr.net';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://jsdelivr.net';
    script.onload = () => resolve(window.Raty);
    document.body.appendChild(script);
  });
}

function fillModalWithData(dessert) {
  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalPrice = document.querySelector('[data-modal-price]');
  const modalDescription = document.querySelector('[data-modal-description]');
  const modalIngredients = document.querySelector('[data-modal-ingredients]');
  const orderBtn = document.querySelector('[data-order-btn]');

  if (modalImg) {
    modalImg.src = dessert.img;
    modalImg.alt = dessert.name;
  }
  if (modalTitle) modalTitle.textContent = dessert.name;
  if (modalPrice) modalPrice.textContent = `${dessert.price} грн`;
  if (modalDescription) modalDescription.textContent = dessert.description;

  if (modalIngredients) {
    modalIngredients.textContent = Array.isArray(dessert.ingredients)
      ? dessert.ingredients.join(', ')
      : dessert.ingredients || 'Secret ingredients';
  }

  if (orderBtn) {
    orderBtn.dataset.id = dessert._id || dessert.id;
  }
}

// --- ІНІЦІАЛІЗАЦІЯ RATY-JS ---
async function initRatyStars(ratingScore) {
  if (!refs.starsContainer) return;
  refs.starsContainer.innerHTML = '';

  const RatyLib = await loadRatyLibrary();

  if (RatyLib) {
    const ratyInstance = RatyLib(refs.starsContainer, {
      score: ratingScore,
      readOnly: true,
      halfShow: true,
      starType: 'i',
    });

    ratyInstance.init();
  }
}

export async function openDessertModal(id) {
  try {
    const dessertData = await getDessert(id);

    fillModalWithData(dessertData);
    await initRatyStars(dessertData.rating);

    document.body.classList.add('modal-open');
    if (refs.overlay) refs.overlay.classList.remove('is-hidden');

    window.addEventListener('keydown', onEscKeyPress);
    if (refs.overlay) refs.overlay.addEventListener('click', onBackdropClick);
  } catch (error) {
    console.error('Помилка при отриманні десерту через api.js:', error.message);
    showError(
      'На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.'
    );
  }
}

function closeModal() {
  document.body.classList.remove('modal-open');
  if (refs.overlay) refs.overlay.classList.add('is-hidden');

  window.removeEventListener('keydown', onEscKeyPress);
  if (refs.overlay) refs.overlay.removeEventListener('click', onBackdropClick);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') closeModal();
}

function onBackdropClick(e) {
  if (e.target === refs.overlay) closeModal();
}

if (refs.closeBtn) refs.closeBtn.addEventListener('click', closeModal);

const popularList = document.querySelector('.popular-list');

if (popularList) {
  popularList.addEventListener('click', handlerButton);
}

function handlerButton(event) {
  if (event.target.dataset.button === 'btn') {
    const cardElement = event.target.closest('.popular-card');

    if (cardElement) {
      const dessertId = cardElement.dataset.id;
      openDessertModal(dessertId);
    }
  }
}
