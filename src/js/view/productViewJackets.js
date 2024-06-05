export const displayProductsJackets = (products) => {
  const productsContainer = document.querySelector(".list-product__jacket");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    if ((product.type = "Jackets")) {
      const listProductItem = document.createElement("li");
      listProductItem.className = "list-product__item";
      listProductItem.innerHTML = `
      <img src="${product.photo}" alt="${product.name}" width="200" height="200">
      <p class="list-product__item-title">${product.name}</p>
      <div class="list-product__item-box">
        <p class="list-product__item-type">${product.type}</p>
        <p class="list-product__item-price">${product.price}$</p>
      </div>`;
      productsContainer.appendChild(listProductItem);
    }
  });
};
