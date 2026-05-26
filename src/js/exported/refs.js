export const refs = {
  container: document.getElementById('feedbacks-container'),
  body: document.querySelector('body'),
  headerMenu: document.querySelector(".header"),
  headerMenuButton: document.querySelector("#header-menu-button"),
  overlay: document.querySelector('[data-dessert-modal]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  starsContainer: document.querySelector('#dessert-raty-stars'),
  modalImg: document.querySelector('[data-modal-img]'),
  modalTitle: document.querySelector('[data-modal-title]'),
  modalPrice: document.querySelector('[data-modal-price]'),
  modalDescription: document.querySelector('[data-modal-description]'),
  modalIngredients: document.querySelector('[data-modal-ingredients]'),
  orderBtn: document.querySelector('[data-order-btn]'),
  popularList: document.querySelector('.popular-list'),
  modalReitStars: document.querySelector('.rating-container'),
  modalOverlay: document.querySelector('.order-modal-overlay'),
  closeModalBtn: document.querySelector('.order-modal-close-btn'),
  orderForm: document.querySelector('.order-form'),
};
export const sweetiesCategoryList = document.querySelector(
  '.sweeties-category-list'
);
export const sweetiesCategorySelect = document.querySelector(
  '#sweeties-category-select'
);
export const sweetiesCategoryLoader = document.querySelector(
  '.sweeties-category-loader'
);
export const sweetiesDessertsList = document.querySelector(
  '.sweeties-desserts-list'
);
export const sweetiesLoadMoreBtn = document.querySelector(
  '.sweeties-load-more-btn'
);
export const sweetiesDessertsLoader = document.querySelector(
  '.sweeties-desserts-loader'
);