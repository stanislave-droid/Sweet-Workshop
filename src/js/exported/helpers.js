import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.show({
    title: 'Error',
    message,
    titleColor: 'white',
    messageColor: 'white',
    position: 'topRight',
    backgroundColor: 'red',
  });
}
