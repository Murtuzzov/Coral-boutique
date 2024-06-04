import axios from "axios";

export const goToNewPage = () => {
  try {
    location.href = "/t-shirt.html";
  } catch (error) {
    console.error("Ошибка при переходе на новую страницу:", error);
  }
};

export const receivingTheProductsTshirt = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
