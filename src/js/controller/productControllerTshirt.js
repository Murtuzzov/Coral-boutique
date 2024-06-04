import {
  goToNewPage,
  receivingTheProductsTshirt,
} from "../model/productModelTshirt";
import { displayProductsTshirt } from "../view/productViewTshirt";

export const loadingProductsTshirt = async () => {
  const sectionTopProductsTshirtBtn = document.querySelector(
    ".section-top__products-tshirt"
  );
  if (sectionTopProductsTshirtBtn) {
    sectionTopProductsTshirtBtn.addEventListener("click", goToNewPage);
  }
  if (document.querySelector(".list-product__t-shirt")) {
    const products = await receivingTheProductsTshirt();
    displayProductsTshirt(products);
  }
};
