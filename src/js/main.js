import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { loadingProducts } from "../js/controller/productController";
import { ff } from "./page";

document.addEventListener("DOMContentLoaded", () => {
  const brandBannerBtn = document.querySelector(".brand-banner__btn");
  brandBannerBtn.addEventListener("click", ff);
});

loadingProducts()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err);
  });
