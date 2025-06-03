// Задание: Сумматор
// Создайте функцию calculateSum(numbers).
// Она должна принимать массив чисел.
// Возвращать сумму всех элементов массива.
// Вызовите функцию с массивом [10, 20, 30] и выведите результат в консоль.

const calculateSum = (numbers) => {
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i]
}
return result
}
console.log(calculateSum([10, 20, 30]));
