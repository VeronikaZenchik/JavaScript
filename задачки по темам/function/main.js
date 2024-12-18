// Задача 1: Сумма двух чисел
// Напишите функцию sum, которая принимает два числа и возвращает их сумму.

// Solution:

const sum = (a, b) => a + b
console.log(sum(3, 5));


// Задача 2: Проверка на четность
// Напишите функцию isEven, которая принимает число и возвращает true, если число четное, и false, если нечетное.

// Solution:
const isEven = (num) => num % 2 === 0 ? true : false
console.log(isEven(5));


// Задача 3: Возведение в степень
// Напишите функцию pow, которая принимает два числа: основание и показатель степени, и возвращает результат возведения в степень.


// Solution:
function pow(a, b) {
  return a ** b
}
console.log(pow(5, 5));


// Задача 4: Факториал числа
// Напишите функцию factorial, которая принимает число и возвращает его факториал (произведение всех чисел от 1 до этого числа).

// Solution:
const factorial = function(num) {
  if (num < 0) {
    return "Факториал определен только для неотрицательных чисел";
}

if (num === 0 || num === 1) {
    return 1;
}

return num * factorial(num - 1);
}
console.log(factorial(5));


// Задача 5: Проверка на простое число
// Напишите функцию isPrime, которая принимает число и возвращает true, если число простое, и false, если нет.

// Solution:
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return true;
}
console.log(isPrime(7));


// Задача 6: Подсчет количества цифр в числе
// Напишите функцию countDigits, которая принимает число и возвращает количество цифр в этом числе.

// Solution:
const countDigits = (num) => {
  return Math.abs(num).toString().length;
};
console.log(countDigits(12345));


// Задача 7: Сумма элементов массива
// Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех элементов.

// Solution:
const sumArray = (arr) => {
let sun = 0
for (let i = 0; i < arr.length; i++) {
  sun += arr[i]
}
return sun
}
console.log(sumArray([1, 2, 3, 4, 5]));


// Задача 8: Поиск максимального элемента в массиве
// Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный элемент.


// Solution:
const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([10, 20, 5, 30]));


// Задача 9: Проверка на палиндром
// Напишите функцию isPalindrome, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково слева направо и справа налево), и false, если нет.


// Solution:
const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};
console.log(isPalindrome("racecar"));


// Задача 10: Генерация чисел Фибоначчи
// Напишите функцию fibonacci, которая принимает число n и возвращает массив с первыми n числами Фибоначчи.


// Solution:
const result = [0, 1];
for (let i = 2; i < n; i++) {
  result.push(result[i - 1] + result[i - 2]);
}
return result.slice(0, n);



// Задача 11: Сортировка массива
// Напишите функцию sortArray, которая принимает массив чисел и возвращает отсортированный массив в порядке возрастания.

// Solution:
const sortArray = (arr) => {
return arr.sort()
}
console.log(sortArray([5, 3, 8, 1, 2]));


// Задача 12: Подсчет гласных в строке
// Напишите функцию countVowels, которая принимает строку и возвращает количество гласных букв в ней (a, e, i, o, u).

// Solution:
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("hello world")); 
