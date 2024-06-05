export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".list-product");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productLi = document.createElement("li");
    productLi.className = "list-product__item";
    productLi.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" width="200" height="200">
        <p class="list-product__item-title">${product.name}</p>
        <div class="list-product__item-box>
        <p class="list-product__item-type">${product.type}</p>
        <p class="list-product__item-price">${product.price}$</p>
        </div>`;
    productsContainer.appendChild(productLi);
  });
};
