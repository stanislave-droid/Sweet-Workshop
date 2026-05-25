import spriteUrl from '../../img/icons.svg';

const refs = {
  overlay: document.querySelector('[data-dessert-modal]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  testBtn: document.querySelector('[data-test-modal-btn]'),
  starsContainer: document.querySelector('#dessert-raty-stars'),
  // Елементи контенту ми прибрали звідси, щоб уникнути помилки null
};

const BASE_URL = 'https://goit.study';

// --- ДИНАМІЧНЕ ЗАВАНТАЖЕННЯ БІБЛІОТЕКИ RATY-JS ---
function loadRatyLibrary() {
  return new Promise(resolve => {
    if (window.Raty) return resolve(window.Raty);

    // 1. Виправляємо шлях до стилів CDN
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://jsdelivr.net';
    document.head.appendChild(link);

    // 2. Виправляємо шлях до скрипту CDN
    const script = document.createElement('script');
    script.src = 'https://jsdelivr.net';
    script.onload = () => resolve(window.Raty);
    document.body.appendChild(script);
  });
}

// --- ЗАПИТ ДО API (З автоматичною заглушкою) ---
async function fetchDessertById(id) {
  try {
    const response = await fetch(`${BASE_URL}/deserts/${id}`);
    if (!response.ok) throw new Error(`Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('Сервер недоступний або 404. Вмикаємо Mock-дані:', error);
    return {
      name: 'Шоколадний фондан',
      // Виправляємо посилання на реальне зображення фондану
      img: 'https://unsplash.com',
      price: '145 грн',
      rating: 4.5,
      description:
        'Класичний французький десерт із крихкою скоринкою та гарячим рідким шоколадом усередині. Подається з кулькою ванільного морозива.',
      ingredients: 'Чорний шоколад, Вершкове масло, Борошно, Яйця, Цукор',
    };
  }
}

// --- ЗАПОВНЕННЯ ТВОГО HTML ДАНИМИ ---
function fillModalWithData(dessert) {
  // Вставляємо хрестик у кнопку за відносним шляхом Vite
  if (refs.closeBtn) {
    refs.closeBtn.innerHTML = `
      <svg class="modal-close-icon" width="24" height="24">
        <use href="${spriteUrl}#icon-close"></use>
      </svg>
    `;
  }

  // Знаходимо елементи всередині розмітки безпосередньо в момент виклику функції
  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalPrice = document.querySelector('[data-modal-price]');
  const modalDescription = document.querySelector('[data-modal-description]');
  const modalIngredients = document.querySelector('[data-modal-ingredients]');

  // Безпечно заповнюємо твою готову HTML верстку текстом
  if (modalImg) {
    modalImg.src = dessert.img;
    modalImg.alt = dessert.name;
  }
  if (modalTitle) modalTitle.textContent = dessert.name;
  if (modalPrice) modalPrice.textContent = dessert.price;
  if (modalDescription) modalDescription.textContent = dessert.description;
  if (modalIngredients)
    modalIngredients.textContent = dessert.ingredients || 'Secret ingredients';
}

// --- ІНІЦІАЛІЗАЦІЯ RATY-JS ---
async function initRatyStars(ratingScore) {
  if (!refs.starsContainer) return;
  refs.starsContainer.innerHTML = '';

  const RatyLib = await loadRatyLibrary();

  if (RatyLib) {
    const ratyInstance = new RatyLib(refs.starsContainer, {
      score: ratingScore,
      readOnly: true,
      halfShow: true,
      starType: 'i',
    });
    ratyInstance.init();
  }
}

// --- КЕРУВАННЯ МОДАЛКОЮ ---
export async function openDessertModal(id) {
  const dessertData = await fetchDessertById(id);

  fillModalWithData(dessertData);
  await initRatyStars(dessertData.rating);

  document.body.classList.add('modal-open');
  if (refs.overlay) refs.overlay.classList.remove('is-hidden');

  window.addEventListener('keydown', onEscKeyPress);
  if (refs.overlay) refs.overlay.addEventListener('click', onBackdropClick);
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

if (refs.testBtn) {
  refs.testBtn.addEventListener('click', () => openDessertModal('any-id'));
}

window.openDessertModal = openDessertModal;
