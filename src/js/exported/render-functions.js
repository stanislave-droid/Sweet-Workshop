export function createDessertsMarkup(desserts, classes) {
  if (classes.li === undefined) {
    classes.li = '';
  }
  if (classes.img === undefined) {
    classes.img = '';
  }
  if (classes.content === undefined) {
    classes.content = '';
  }
  if (classes.contentHeader === undefined) {
    classes.contentHeader = '';
  }
  if (classes.category === undefined) {
    classes.category = '';
  }
  if (classes.nameWrapper === undefined) {
    classes.nameWrapper = '';
  }
  if (classes.name === undefined) {
    classes.name = '';
  }
  if (classes.description === undefined) {
    classes.description = '';
  }
  if (classes.priceWrapper === undefined) {
    classes.priceWrapper = '';
  }
  if (classes.price === undefined) {
    classes.price = '';
  }
  if (classes.button === undefined) {
    classes.button = '';
  }
  if (classes.svg === undefined) {
    classes.svg = '';
  }

  const markup = desserts
    .map(dessert => {
      return `
      <li data-id="${dessert._id}" class="${classes.li}">
        <div class="${classes.content}">
        <img src="${dessert.image}" alt="${dessert.name}" class="${classes.img}" >
          <div class="${classes.contentHeader}">
            <p class="${classes.category}">${dessert.category.name}</p>
            <div class="${classes.nameWrapper}">
              <h3 class="${classes.name}">${dessert.name}</h3>
              <p class="${classes.description}">${dessert.description}</p>
            </div>
          </div>
          <div class="${classes.priceWrapper}">
            <p class="${classes.price}">${dessert.price} грн</p>
            <button class="${classes.button}" data-button=btn>
              <svg class="${classes.svg}" width="24" height="24">
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

export function createFeedbacksMarkup(feedbacks, classes) {
  if (classes.li === undefined) {
    classes.li = '';
  }
  if (classes.content === undefined) {
    classes.content = '';
  }
  if (classes.rate === undefined) {
    classes.rate = '';
  }
  if (classes.description === undefined) {
    classes.description = '';
  }
  if (classes.author === undefined) {
    classes.author = '';
  }

  const markup = feedbacks
    .map(feedback => {
      return `
      <li data-id="${feedback._id}" data-rate="${feedback.rate}" class="${classes.li}">
        <div class="${classes.content}">
          <div class="${classes.rate}"></div>
          <p class="${classes.description}">${feedback.description}</p>
        </div>
        <p class="${classes.author}">${feedback.author}</p>
      </li>
      `;
    })
    .join('');

  return markup;
}
