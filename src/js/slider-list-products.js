import axios from "axios";

export const productsFunc = async () => {
  const API_KEY_PRODUCTS = "http://localhost:3000/products?_limit=3";
  try {
    const response = await axios.get(API_KEY_PRODUCTS);
    const sliderListProducts = document.querySelector(".slider-list__products");
    sliderListProducts.innerHTML = "";
    response.data.forEach((product) => {
      const sliderListItem = document.createElement("li");
      sliderListItem.classList.add("slider-list__item");
      sliderListItem.innerHTML = `
        <img src="${product.photo}" alt="Cart">
        <div class="slider-list__item-inner">
          <div>
          <p class="slider-list__items-name">${product.name}</p>
          <p class="slider-list__items-type">${product.type}</p>
          </div>
          <p class="slider-list__items-price">${product.price}</p>
        </div>
      `;
      sliderListProducts.appendChild(sliderListItem);
    });
  } catch (error) {
    console.log("Ошибка при получении данных:", error);
  }
};
