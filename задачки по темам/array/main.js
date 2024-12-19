// Задачи по массивам и методам для добавления и удаления элементов в JavaScript:

// Задача 1: Добавление элемента в конец массива
// Напишите функцию addElementToEnd, которая принимает массив и элемент, и добавляет элемент в конец массива.

// Solution:
const addElementToEnd = (arr, el) => {
  arr.push(el)
  return arr
}
console.log(addElementToEnd([1, 2, 3], 4));

// Задача 2: Удаление последнего элемента массива
// Напишите функцию removeLastElement, которая удаляет последний элемент из массива.

// Solution:
const removeLastElement = (arr) => {
  arr.pop()
  return arr
}
console.log(removeLastElement([1, 2, 3]));


// Задача 3: Добавление элемента в начало массива
// Напишите функцию addElementToStart, которая принимает массив и элемент, и добавляет элемент в начало массива.

// Solution:
const addElementToStart = (arr, el) => {
  arr.unshift(el)
  return arr
}
console.log(addElementToStart([1, 2, 3], 0));


// Задача 4: Удаление первого элемента массива
// Напишите функцию removeFirstElement, которая удаляет первый элемент из массива.


// Solution:
const removeFirstElement = (arr) => {
  arr.shift()
  return arr
}
console.log(removeFirstElement([1, 2, 3]));


// Задача 5: Удаление элемента по индексу
// Напишите функцию removeElementByIndex, которая принимает массив и индекс, и удаляет элемент по указанному индексу.


// Solution:
const removeElementByIndex = (arr, index) => {
  arr.splice(index, 1)
  return arr
}
console.log(removeElementByIndex([1, 2, 3, 4, 5], 2));


// Задача 6: Добавление элемента по индексу
// Напишите функцию addElementByIndex, которая принимает массив, элемент и индекс, и добавляет элемент по указанному индексу.


// Solution:
const addElementByIndex = (arr, el, index) => {
  arr.splice(index, 0, el)
  return arr
}
console.log(addElementByIndex([1, 2, 3, 4, 5], 88, 2));


// Задача 7: Удаление нескольких элементов по индексу
// Напишите функцию removeMultipleElements, которая принимает массив, начальный индекс и количество элементов, и удаляет указанное количество элементов, начиная с указанного индекса.

// Solution:
const removeMultipleElements = (arr, index, el) => {
  arr.splice(index, el)
  return arr
}
console.log(removeMultipleElements([1, 2, 3, 4, 5], 1, 2));


// Задача 8: Добавление нескольких элементов в конец массива
// Напишите функцию addMultipleElementsToEnd, которая принимает массив и массив элементов, и добавляет все элементы из второго массива в конец первого.


// Solution:
const addMultipleElementsToEnd = (arr1, arr2) => {
  return [...arr1, ...arr2]
}
console.log(addMultipleElementsToEnd([1, 2, 3, 4, 5], [11, 10, 12, 9]));


// Задача 9: Удаление всех вхождений элемента
// Напишите функцию removeAllOccurrences, которая принимает массив и элемент, и удаляет все вхождения этого элемента из массива.


// Solution:
const removeAllOccurrences = (arr, el) => {
  return arr.filter((num) => num !== el)
}
console.log(removeAllOccurrences([1, 2, 3, 4, 5], 2));


// Задача 10: Добавление элементов в массив с условием
// Напишите функцию addElementsIf, которая принимает массив, массив элементов и функцию-условие. Функция добавляет элементы из второго массива в первый, только если они удовлетворяют условию.


// Solution:
const filterArrayAdd = (arr, condition) => {
  return arr.filter(condition)
}
const arrAdd = [1, 2, 3, 4, 5]
const isEvenAdd = arr.push(4, 5, 6), el => el % 2 === 0
const addElementsIf = filterArrayAdd(arrAdd, isEvenAdd)

console.log(addElementsIf);


// Задача 11: Удаление элементов с условием
// Напишите функцию removeElementsIf, которая принимает массив и функцию-условие. Функция удаляет все элементы, которые удовлетворяют условию.

// Solution:
const filterArrayRemove = (arr, condition) => {
  return arr.filter(condition)
}
const arrRemove = [1, 2, 3, 4, 5]
const isEven = (el) => el % 2 === 0
const removeElementsIf = filterArrayRemove(arrRemove, isEven)

console.log(removeElementsIf);


// Задача 12: Замена элемента в массиве
// Напишите функцию replaceElement, которая принимает массив, индекс и новый элемент, и заменяет элемент по указанному индексу на новый элемент.


// Solution:
const replaceElement = (arr, index, el) => {
  arr.splice(index, 1, el)
  return arr
}
console.log(replaceElement([1, 2, 3], 1, 10));