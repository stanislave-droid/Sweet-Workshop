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

getCategories()
  .then(categories => {
    const maped = categories.map(({ _id, name }) => {
      return { text: name, value: _id };
    });
    const slimSelect = new SlimSelect({
      select: '#sweeties-category-select',
      data: [{ text: 'Всі десерти' }, ...maped],
    });

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
    sweetiesCategorySelect.hidden = false;
  });

getDesserts()
  .then(desserts => {})
  .catch(error => {
    console.log(error);
  })
  .finally(() => {});
