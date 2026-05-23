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
import SlimSelect from 'slim-select';
import 'slim-select/styles';

const slimSelect = new SlimSelect({
  select: sweetiesCategorySelect,
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
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    sweetiesCategoryLoader.hidden = true;
  });

getDesserts()
  .then(desserts => {})
  .catch(error => {
    console.log(error);
  })
  .finally(() => {});
