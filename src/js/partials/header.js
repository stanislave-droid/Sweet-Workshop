import { refs } from '../exported/refs.js';
import { handleHeaderMenuClick, handleHeaderMenuEscape } from '../exported/handlers.js';

refs.headerMenu.addEventListener('click', handleHeaderMenuClick);
document.addEventListener('keydown', handleHeaderMenuEscape);