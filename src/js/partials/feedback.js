import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Raty from 'raty-js';
import { getFeedbacks } from '../exported/api';
import { ApiBaseURL } from '../exported/constants';

axios.defaults.baseURL = ApiBaseURL;

function createCardMarkup(item) {
  return `
    <div class="swiper-slide feedback-card">
      <div class="card-content">
        <div class="raty-stars" data-score="${item.rate}"></div>
        
        <p class="feedback-text">"${item.description}"</p>
        <p class="feedback-user-name">${item.author}</p>
      </div>
    </div>
  `;
}

async function renderFeedbackSection() {
  const container = document.getElementById('feedbacks-container');
  if (!container) return;

  try {
    const data = await getFeedbacks(1, 10);
    const feedbacksList = data.feedbacks;

    if (!feedbacksList || feedbacksList.length < 3) {
      container.innerHTML =
        '<p class="error-message">Недостатньо відгуків для відображення (мінімум 3).</p>';
      return;
    }

    container.innerHTML = feedbacksList
      .map(item => createCardMarkup(item))
      .join('');

    initFeedbackSlider();

    initLibraryStars();
  } catch (error) {
    console.error(error);
    container.innerHTML =
      '<p class="error-message">Не вдалося завантажити відгуки клієнтів.</p>';
  }
}

function initLibraryStars() {
  document.querySelectorAll('.raty-stars').forEach(el => {
    const score = parseFloat(el.getAttribute('data-score'));

    new Raty(el, {
      score: score,
      readOnly: true,
      halfShow: true,
      starType: 'svg',
    });
  });
}

function initFeedbackSlider() {
  new Swiper('.feedback-slider', {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 3,
    grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
  });
}

document.addEventListener('DOMContentLoaded', renderFeedbackSection);
