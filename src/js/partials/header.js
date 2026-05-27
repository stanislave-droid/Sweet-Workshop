import { refs } from '/js/exported/refs.js';
import {
  handleHeaderMenuClick,
  handleHeaderMenuEscape,
} from '/js/exported/handlers.js';

refs.headerMenu.addEventListener('click', handleHeaderMenuClick);

export function openHeaderMenu() {
  refs.headerMenu.classList.add('header--open');
  refs.html.classList.add('prevent-scrolling');
  document.addEventListener('keydown', handleHeaderMenuEscape);
}

export function closeHeaderMenu() {
  refs.headerMenu.classList.remove('header--open');
  refs.html.classList.remove('prevent-scrolling');
  document.removeEventListener('keydown', handleHeaderMenuEscape);
}

export function isHeaderMenuOpen() {
  return refs.headerMenu.classList.contains('header--open');
}