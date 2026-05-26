import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swal from 'sweetalert2';

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

export function checkBoundariesForLoadMoreBtn({ totalItems, limit, page }) {
  return totalItems - limit * page > 0;
}

export function showOrderError(message) {
  Swal.fire({
    icon: 'error',
    title: 'Помилка',
    text: message,
  });
}

export function showOrderSuccess(orderNum) {
  Swal.fire({
    icon: 'success',
    title: 'Успіх',
    text: `Замовлення успішно створене! № ${orderNum || '---'}`,
  });
}
