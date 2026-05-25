import iziToast from 'izitoast';
import { getFeedbacks } from '/js/exported/api.js';
import { refs } from '/js/exported/refs.js';
import 'css-star-rating/css/star-rating.css';
import 'izitoast/dist/css/iziToast.min.css';
import { showError } from '/js/exported/helpers.js';

export function createDessertsMarkup(desserts, classes) {
  if (classes.li === undefined) {
    classes.li = '';
  }
  if (classes.img === undefined) {
    classes.img = '';
  }
  if (classes.content === undefined) {
    classes.content = '';
  }
  if (classes.contentHeader === undefined) {
    classes.contentHeader = '';
  }
  if (classes.category === undefined) {
    classes.category = '';
  }
  if (classes.nameWrapper === undefined) {
    classes.nameWrapper = '';
  }
  if (classes.name === undefined) {
    classes.name = '';
  }
  if (classes.description === undefined) {
    classes.description = '';
  }
  if (classes.priceWrapper === undefined) {
    classes.priceWrapper = '';
  }
  if (classes.price === undefined) {
    classes.price = '';
  }
  if (classes.button === undefined) {
    classes.button = '';
  }
  if (classes.svg === undefined) {
    classes.svg = '';
  }

  const markup = desserts
    .map(dessert => {
      return `
      <li data-id="${dessert._id}" class="${classes.li}">
        <img src="${dessert.image}" alt="${dessert.name}" class="${classes.img}" >
        <div class="${classes.content}">
          <div class="${classes.contentHeader}">
            <p class="${classes.category}">${dessert.category.name}</p>
            <div class="${classes.nameWrapper}">
              <h3 class="${classes.name}">${dessert.name}</h3>
              <p class="${classes.description}">${dessert.description}</p>
            </div>
          </div>
          <div class="${classes.priceWrapper}">
            <p class="${classes.price}">${dessert.price} грн</p>
            <button class="${classes.button}">
              <svg class="${classes.svg}" width="24" height="24">
                <use href="/img/icons.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      `;
    })
    .join('');

  return markup;
}

export function createFeedbacksMarkup(feedbacks, classes) {
  if (classes.li === undefined) {
    classes.li = '';
  }
  if (classes.content === undefined) {
    classes.content = '';
  }
  if (classes.rate === undefined) {
    classes.rate = '';
  }
  if (classes.description === undefined) {
    classes.description = '';
  }
  if (classes.author === undefined) {
    classes.author = '';
  }

  const markup = feedbacks
    .map(feedback => {
      return `
      <li data-id="${feedback._id}" data-rate="${feedback.rate}" class="${classes.li}">
        <div class="${classes.content}">
          <div class="${classes.rate}"></div>
          <p class="${classes.description}">${feedback.description}</p>
        </div>
        <p class="${classes.author}">${feedback.author}</p>
      </li>
      `;
    })
    .join('');

  return markup;
}

function createStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  let stars = '';

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="black" d="M14.513 0.98c0.55-1.306 2.423-1.306 2.973 0l3.246 7.71c0.232 0.551 0.756 0.927 1.358 0.975l8.426 0.667c1.427 0.113 2.006 1.873 0.919 2.793l-6.419 5.432c-0.459 0.388-0.659 0.997-0.519 1.577l1.961 8.123c0.332 1.376-1.183 2.464-2.405 1.727l-7.213-4.353c-0.515-0.311-1.163-0.311-1.678 0l-7.214 4.353c-1.222 0.737-2.738-0.35-2.405-1.727l1.961-8.123c0.14-0.58-0.060-1.189-0.519-1.577l-6.42-5.432c-1.088-0.92-0.509-2.68 0.919-2.793l8.426-0.667c0.602-0.048 1.126-0.424 1.358-0.975l3.246-7.71z"/>
</svg>
      `;
    } else if (i === fullStars + 1 && hasHalf) {
      stars += `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path d="M31.829 11.312l0.128 0.4c0.105 0.302 0.017 0.637-0.223 0.848l-7.755 6.64 2.298 9.952c0.078 0.318-0.042 0.652-0.303 0.848l-0.351 0.24c-0.136 0.107-0.305 0.164-0.479 0.16-0.146 0.003-0.29-0.036-0.415-0.112l-8.728-5.328-8.68 5.328c-0.125 0.076-0.269 0.115-0.415 0.112-0.173 0.004-0.342-0.053-0.479-0.16l-0.399-0.24c-0.262-0.196-0.381-0.53-0.303-0.848l2.298-9.952-7.739-6.624c-0.252-0.209-0.348-0.554-0.239-0.864l0.176-0.4c0.093-0.316 0.374-0.54 0.702-0.56l10.196-0.816 3.909-9.424c0.125-0.313 0.43-0.516 0.766-0.512h0.415c0.333-0.007 0.634 0.198 0.75 0.512l3.973 9.424 10.196 0.816c0.328 0.020 0.609 0.244 0.702 0.56zM22.574 25.696l-1.787-7.488 5.856-5.008-7.675-0.608-2.968-7.136v16.224l6.574 4.016z"></path>
</svg>
      `;
    } else {
      stars += `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path
    fill="none"
    stroke="black"
    stroke-width="2"
    d="M15.436 1.367c0.207-0.489 0.922-0.489 1.129 0l3.246 7.711c0.379 0.899 1.232 1.507 2.201 1.584l8.426 0.666c0.559 0.044 0.741 0.703 0.351 1.033l-6.42 5.434c-0.744 0.63-1.073 1.624-0.844 2.574l1.961 8.123c0.116 0.479-0.425 0.932-0.916 0.637l-7.215-4.354c-0.833-0.502-1.878-0.503-2.711 0l-7.215 4.354c-0.491 0.295-1.032-0.157-0.916-0.637l1.961-8.123c0.229-0.951-0.099-1.944-0.844-2.574l-6.42-5.434c-0.389-0.33-0.207-0.989 0.352-1.033l8.426-0.666c0.97-0.077 1.822-0.684 2.201-1.584l3.246-7.711z"
  />
</svg>
      `;
    }
  }

  return stars;
}

export function createCardMarkup(item) {
  return `
    <div class="swiper-slide feedback-card">
      <div class="card-content">

        <div class="feedback-stars">
          ${createStars(item.rate)}
        </div>

        <p class="feedback-text">
          "${item.description}"
        </p>

        <p class="feedback-user-name">
          ${item.author}
        </p>

      </div>
    </div>
  `;
}

export function createCardsMarkup(feedbacksList) {
  return feedbacksList.map(item => createCardMarkup(item)).join('');
}

export async function renderFeedbackSection(initFeedbackSlider) {
  const { container } = refs;

  if (!container) return;

  try {
    const data = await getFeedbacks(1, 10);
    const feedbacksList = data.feedbacks;

    if (!feedbacksList || feedbacksList.length < 3) {
      showError('Недостатньо відгуків для відображення.');
      return;
    }

    container.innerHTML = createCardsMarkup(feedbacksList);

    initFeedbackSlider();
  } catch (error) {
    console.error(error);

    showError('Не вдалося завантажити відгуки клієнтів.');
  }
}
