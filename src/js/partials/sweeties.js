import {
  sweetiesCategoryList,
  sweetiesCategorySelect,
  sweetiesCategoryLoader,
} from '/js/exported/refs';
import {
  createMarkupForCategoryButtons,
  createMarkupForSelect,
} from '/js/exported/render-functions';
import { getCategories, getDesserts } from '/js/exported/api';
import { multiApiRequests } from '/js/exported/helpers';

sweetiesCategorySelect.innerHTML =
  "<option value='' selected>Всі десерти</option>";
sweetiesCategoryList.innerHTML = `<label class="sweeties-category-label">
        <input
          type="radio"
          value=""
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
          checked
        />
        <div class="sweeties-category-button">Всі десерти</div>
      </label>`;

multiApiRequests(getCategories, getDesserts)
  .then(([getCategories, getDesserts]) => {
    sweetiesCategorySelect.insertAdjacentHTML(
      'beforeend',
      createMarkupForSelect(getCategories)
    );
    sweetiesCategoryList.insertAdjacentHTML(
      'beforeend',
      createMarkupForCategoryButtons(getCategories)
    );
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    sweetiesCategoryLoader.hidden = true;
  });
