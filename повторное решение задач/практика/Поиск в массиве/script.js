// Задание: Поиск в массиве
// Создайте массив строк: ["яблоко", "банан", "апельсин"].
// Напишите функцию findFruit(fruit), которая:
// Принимает название фрукта.
// Проверяет, есть ли он в массиве.
// Возвращает true если найден, false если нет.


const fruits = ["яблоко", "банан", "апельсин"];

const findFruit = (fruitList, fruitName) => {
  return fruitList.includes(fruitName);
}

console.log(findFruit(fruits, "вишня")); 
console.log(findFruit(fruits, "банан"));