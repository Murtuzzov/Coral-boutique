import {
  goToNewPage,
  receivingTheProductsJackets,
} from "../model/productModelJacket";
import { displayProductsJackets } from "../view/productViewJackets";

export const loadingProductsJackets = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    const sectionTopProductsJacketsBtn = document.querySelector(
      ".section-top__products-jacket"
    );
    if (sectionTopProductsJacketsBtn) {
      sectionTopProductsJacketsBtn.addEventListener("click", goToNewPage);
    }
    if (document.querySelector(".list-product__jacket")) {
      const products = await receivingTheProductsJackets();
      displayProductsJackets(products);
    }
  });
};
