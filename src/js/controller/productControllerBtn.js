import { goToNewPage, receivingTheProducts } from "../model/productModelBtn";
import { displayProducts } from "../view/productViewBtn";

export const loadingProductsBtn = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    const brandBannerBtn = document.querySelector(".brand-banner__btn");
    if (brandBannerBtn) {
      brandBannerBtn.addEventListener("click", goToNewPage);
    }

    if (document.querySelector(".list-product")) {
      const products = await receivingTheProducts();
      displayProducts(products);
    }
  });
};
