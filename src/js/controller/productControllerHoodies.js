// productControllerHoodies.js
import {
  goToNewPage,
  receivingTheProductsHoodies,
} from "../model/productModelHoodies.js";
import { displayProductsHoodies } from "../view/productViewHoodies.js";

export const loadingProductsHoodies = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    const sectionTopProductsHoodiesBtn = document.querySelector(
      ".section-top__products-hoodies"
    );
    if (sectionTopProductsHoodiesBtn) {
      sectionTopProductsHoodiesBtn.addEventListener("click", goToNewPage);
    }
    if (document.querySelector(".list-product__hoodies")) {
      const products = await receivingTheProductsHoodies();
      displayProductsHoodies(products);
    }
  });
};
