/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Проверяем, что строка не пустая
  if (typeof str !== "string" || str.trim() === "") {
    return false;
  }

  // Преобразуем строку в число
  const number = parseFloat(str);

  // Проверяем, что результат — это число и строка полностью соответствует числу
  return !isNaN(number) && str.trim() === number.toString();
}

console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
