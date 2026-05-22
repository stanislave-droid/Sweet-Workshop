export function createDessertsMarkup(desserts) {
  const markup = desserts
    .map(dessert => {
      return `
      <li data-id="${dessert._id}">
        <img src="${dessert.image}" alt="${dessert.name}" >
        <div>
          <div>
            <p>${dessert.category.name}</p>
            <div>
              <p>${dessert.name}</p>
              <p>${dessert.description}</p>
            </div>
          </div>
          <div>
            <p>${dessert.price} грн</p>
            <button>
              <svg width="24" height="24">
                <use href="/img/icons.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      `;
    })
    .join('');

  return markup;
}

export function createFeedbacksMarkup(feedbacks) {
  const markup = feedbacks
    .map(feedback => {
      return `
      <li data-id="${feedback._id}" data-rate="${feedback.rate}">
        <div>
          <div></div>
          <p>${feedback.description}</p>
        </div>
        <p>${feedback.author}</p>
      </li>
      `;
    })
    .join('');

  return markup;
}
