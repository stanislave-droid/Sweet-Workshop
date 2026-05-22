export function createMarkupForSelect(dataArray) {
  const resultData = [
    "<option value='' selected>Всі десерти</option>",
    ...dataArray.map(
      ({ _id, name }) => `<option value="${_id}">${name}</option>`
    ),
  ].join('');
  return resultData;
}

export function createMarkupForCategoryButtons(dataArray) {
  const resultData = [
    `<label class="sweeties-category-label">
          <input
            type="radio"
            value=""
            name="sweeties-category-btn"
            class="sweeties-category-radio-btn"
            checked
          />
          <div class="sweeties-category-button">Всі десерти</div>
        </label>`,
    ...dataArray.map(
      ({ _id, name }) => `<label class="sweeties-category-label">
        <input
          type="radio"
          value="${_id}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
        />
        <div class="sweeties-category-button">${name}</div>
      </label>`
    ),
  ].join('');
  return resultData;
}
