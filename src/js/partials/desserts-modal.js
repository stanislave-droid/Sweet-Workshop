import { getDessert } from '/js/exported/api.js';
import { showError } from '/js/exported/helpers.js';
import spriteUrl from '/img/icons.svg';
import { refs } from '/js/exported/refs.js';

// --- ЗАВАНТАЖЕННЯ БІБЛІОТЕКИ RATY-JS ---
// function loadRatyLibrary() {
//   return new Promise(resolve => {
//     if (window.Raty) return resolve(window.Raty);

//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://jsdelivr.net';
//     document.head.appendChild(link);

//     const script = document.createElement('script');
//     script.src = 'https://jsdelivr.net';
//     script.onload = () => resolve(window.Raty);
//     document.body.appendChild(script);
//   });
// }

function fillModalWithData(dessert) {
  refs.modalImg.src = dessert.img;
  refs.modalImg.alt = dessert.name;

  refs.modalTitle.textContent = dessert.name;
  refs.modalPrice.textContent = `${dessert.price} грн`;
  refs.modalDescription.textContent = dessert.description;
  refs.modalIngredients.textContent = Array.isArray(dessert.ingredients)
    ? dessert.ingredients.join(', ')
    : dessert.ingredients || 'Secret ingredients';

  refs.orderBtn.dataset.id = dessert._id || dessert.id;
}

// --- ІНІЦІАЛІЗАЦІЯ RATY-JS ---
// async function initRatyStars(ratingScore) {
//   if (!refs.starsContainer) return;
//   refs.starsContainer.innerHTML = '';

//   const RatyLib = await loadRatyLibrary();

//   if (RatyLib) {
//     const ratyInstance = RatyLib(refs.starsContainer, {
//       score: ratingScore,
//       readOnly: true,
//       halfShow: true,
//       starType: 'i',
//     });

//     ratyInstance.init();
//   }
// }

export async function openDessertModal(id) {
  try {
    const dessertData = await getDessert(id);

    fillModalWithData(dessertData);

    document.body.classList.add('modal-open');
    refs.overlay.classList.remove('is-hidden');

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

refs.popularList.addEventListener('click', handlerButton);

function handlerButton(event) {
  if (event.target.dataset.button === 'btn') {
    const cardElement = event.target.closest('.popular-card');

    if (cardElement) {
      const dessertId = cardElement.dataset.id;
      openDessertModal(dessertId);
    }
  }
}
