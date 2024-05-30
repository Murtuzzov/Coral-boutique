import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { productsFunc } from "./slider-list-products";

productsFunc()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err);
  });
