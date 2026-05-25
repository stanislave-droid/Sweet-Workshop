import { refs } from '/js/exported/refs.js';
import { handleHeaderMenuClick, handleHeaderMenuEscape } from '/js/exported/handlers.js';

refs.headerMenu.addEventListener('click', handleHeaderMenuClick);
document.addEventListener('keydown', handleHeaderMenuEscape);