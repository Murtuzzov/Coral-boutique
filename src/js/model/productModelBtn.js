// // ФУНКЦИЯ ПОЛУЧАЕТ НА ЛИНК НОВУЮ СТРАНИЦУ
import axios from "axios";
export const goToNewPage = () => {
  try {
    location.href = "/collection.html";
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};
// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНЯИ ЗАПРОСА
export const receivingTheProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};
