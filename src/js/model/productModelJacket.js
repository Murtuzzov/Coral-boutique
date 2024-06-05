import axios from "axios";

export const goToNewPage = () => {
  try {
    location.href = "/jackets.html";
  } catch (error) {
    console.error("Ошибка при переходе на новую страницу:", error);
  }
};

export const receivingTheProductsJackets = async () => {
  try {
    const response = await axios.get("http://localhost:3000/bestsellers");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};
