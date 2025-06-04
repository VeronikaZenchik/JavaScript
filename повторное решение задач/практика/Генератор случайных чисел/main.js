// Задание: Генератор случайных чисел
// Напишите функцию getRandomNumber(min, max).
// Она должна возвращать случайное целое число между min и max.
// Используйте Math.random() и Math.floor().

// const getRandomNumber = (min, max) => {
// return Math.floor(Math.random() *  (max - min + 1)) + min;
// }
// console.log(getRandomNumber(50,100));


// Почему +1?
// max - min + 1 → 7 - 3 + 1 = 5 (количество возможных чисел: 3,4,5,6,7).
// Math.random() * 5 → число от 0 до 4.999....
// Math.floor(...) → целые числа от 0 до 4.
// ... + min → 0+3=3, 1+3=4, ..., 4+3=7.
// Итоговый диапазон: 3, 4, 5, 6, 7 (включая оба конца!).




//HTML

const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("myLabel")
const min = 1
const max = 10
let randomNum;

myButton.onclick = function() {
  randomNum =  Math.floor(Math.random() *  (max - min + 1)) + min;
  myLabel.textContent = randomNum
}


