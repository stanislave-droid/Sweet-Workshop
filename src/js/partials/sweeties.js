import {
  sweetiesCategoryList,
  sweetiesCategorySelect,
  sweetiesCategoryLoader,
  sweetiesDessertsLoader,
  sweetiesDessertsList,
} from '/js/exported/refs';
import {
  createMarkupForCategoryButtons,
  createMarkupForSelect,
} from '/js/exported/render-functions';
import { getCategories, getDesserts } from '/js/exported/api';
import { onCategoryChange } from '/js/exported/handlers';
import SlimSelect from 'slim-select';
import 'slim-select/styles';

const slimSelect = new SlimSelect({
  select: sweetiesCategorySelect,
  events: {
    afterChange: ([{ value }]) => {
      if (value === 'Всі десерти') {
        onCategoryChange();
        return;
      }

      onCategoryChange(value);
    },
  },
  settings: {
    showSearch: false,
    openPosition: 'down',
  },
});

getCategories()
  .then(categories => {
    slimSelect.setData([
      { text: 'Всі десерти', class: 'sw-cat-select-item' },
      ...createMarkupForSelect(categories),
    ]);

    sweetiesCategoryList.insertAdjacentHTML(
      'beforeend',
      createMarkupForCategoryButtons(categories)
    );

    sweetiesCategoryList.addEventListener('change', ({ target: { value } }) => {
      onCategoryChange(value === '' ? undefined : value);
    });
    // sweetiesDessertsList.addEventListener("click", onCardButtonClick); For modal
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    sweetiesCategoryLoader.hidden = true;
    sweetiesDessertsLoader.hidden = true;
  });
