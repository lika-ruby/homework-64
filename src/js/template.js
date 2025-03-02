export const createTemplate = (textList, cars) => {
  for (const {
    id,
    model,
    brand,
    type,
    color,
    price,
    number,
    country,
    description,
  } of cars) {
    textList += `
    <li id="${id}" class="product-item">
      <h2 class="model">Model: ${model}</h2>
      <div class="content">
        <p class="brand">Brand: ${brand}</p>
        <p class="type">Type: ${type}</p>
      </div>
      <div class="content">
        <p class="price">Price: ${price}</p>
        <p class="color">Color: ${color}</p>
      </div>
      <div class="content">
        <p class="number">Number: ${number}</p>
        <p class="country">Country: ${country}</p>
      </div>
      <p class="description">Description: ${description}</p>
    </li>
  `;
  }
  return textList;
};
