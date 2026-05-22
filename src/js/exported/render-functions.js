export function createMarkupForSelect(dataArray) {
  return dataArray
    .map(({ _id, name }, index) => `<option value="${_id}">${name}</option>`)
    .join('');
}

export function createMarkupForCategoryButtons(dataArray) {
  return dataArray
    .map(
      ({ _id, name }) => `<label class="sweeties-category-label">
        <input
          type="radio"
          value="${_id}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
        />
        <div class="sweeties-category-button">${name}</div>
      </label>`
    )
    .join('');
}
