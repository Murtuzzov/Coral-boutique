import axios from "axios";

export const productsFunc = async () => {
  const API_KEY_PRODUCTS = "http://localhost:3000/products?_limit=4";
  try {
    const response = await axios.get(API_KEY_PRODUCTS);
    const sliderListProducts = document.querySelector(".slider-list__products");
    sliderListProducts.innerHTML = "";
    response.data.forEach((product) => {
      const sliderListItem = document.createElement("li");
      sliderListItem.classList.add("slider-list__item");
      sliderListItem.innerHTML = `
        <div class="slider-list__item-inner">
          <div class="slider-list__products-add-cart">
             <img 
                src="./images/slider-products/icons-heart.png"
                alt="HEART" width="24" height="24"/>
          </div>
              <img class="slider-list__items-img" src="${product.photo}" alt="Products" width="312" height="400" />
              <p class="slider-list__items-name">${product.name}</p>
                <div class="slider-list__products-info">
                  <p class="slider-list__items-type">${product.type}</p>
                  <p class="slider-list__items-price">${product.price}</p>
            </div>
        </div>
      `;
      sliderListProducts.appendChild(sliderListItem);
    });
  } catch (error) {
    console.log("Ошибка при получении данных:", error);
  }
};
