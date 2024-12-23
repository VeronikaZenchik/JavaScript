// Задачи на работу с объектами в JavaScript:

// Задача 1: Подсчет количества свойств в объекте
// Напишите функцию, которая принимает объект и возвращает количество его свойств.

// Solution:
const countProperties = (obj) => {
  return Object.keys(obj).length
}
const obj1 = { a: 1, b: 2, c: 3 };
console.log(countProperties(obj1));


// Задача 2: Сумма значений свойств объекта---------
// Напишите функцию, которая принимает объект, где значения свойств — числа, и возвращает сумму всех значений.

// Solution:
const sumValues = (obj) => {
return Object.values(obj).map((el) => {
  el.key 
})
}
const obj2 = { a: 10, b: 20, c: 30 };
console.log(sumValues(obj2))


// Задача 3: Проверка наличия свойства
// Напишите функцию, которая принимает объект и строку (имя свойства) и возвращает true, если объект содержит это свойство, и false в противном случае.

// Solution:
const hasProperty = (obj, string) => {
  return obj.hasOwnProperty(string)
  }

const obj3 = { name: 'Alice', age: 25 };
console.log(hasProperty(obj3, 'name')); 


// Задача 4: Преобразование объекта в массив
// Напишите функцию, которая принимает объект и возвращает массив, содержащий все его ключи.

// Solution:
const objectKeysToArray = (obj) => {
  return Object.keys(obj)
}
const obj4 = { a: 1, b: 2, c: 3 };
console.log(objectKeysToArray(obj4));


// Задача 5: Объединение объектов
// Напишите функцию, которая принимает два объекта и возвращает новый объект, содержащий все свойства обоих объектов. Если свойства с одинаковыми ключами встречаются в обоих объектах, используйте значение из второго объекта.

// Solution:
const mergeObjects = (obj1, obj2) => {
return {...obj1, ...obj2}
}

const objOne = { a: 1, b: 2 };
const objTwo = { b: 3, c: 4 };
console.log(mergeObjects(objOne, objTwo));


// Задача 6: Фильтрация объекта
// Напишите функцию, которая принимает объект и возвращает новый объект, содержащий только те свойства, значения которых являются числами.

// Solution:
const filterNumbers = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => typeof value === 'number')
  );
}

const obj6 = { a: 1, b: 'hello', c: 3, d: true };
console.log(filterNumbers(obj6));



// Задача 7: Инверсия объекта
// Напишите функцию, которая принимает объект и возвращает новый объект, где ключи и значения поменялись местами.

// Solution:
const invertObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
  }

const obj7 = { a: 1, b: 2, c: 3 };
console.log(invertObject(obj7));


// Задача 8: Подсчет количества элементов в массиве объектов-----
// Напишите функцию, которая принимает массив объектов и возвращает объект, где ключи — это уникальные значения из массива, а значения — количество их вхождений.

// Solution:
const countElements = (obj) => {

  }

  const arr = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Alice' },
    { name: 'Charlie' }
  ];
  console.log(countElements(arr));


// Задача 9: Удаление свойства из объекта
// Напишите функцию, которая принимает объект и строку (имя свойства) и возвращает новый объект, из которого удалено указанное свойство.

// Solution:
const removeProperty = (obj, str) => {
let result = {...obj}
delete result[str]
return result
}

const obj9 = { a: 1, b: 2, c: 3 };
console.log(removeProperty(obj9, 'b')); 


// Задача 10: Проверка идентичности объектов-----
// Напишите функцию, которая принимает два объекта и возвращает true, если они содержат одинаковые ключи и значения, и false в противном случае.

// Solution:
const areObjectsEqual = (obj) => {

}

const obj110 = { a: 1, b: 2 };
const obj210 = { a: 1, b: 2 };
const obj310 = { a: 1, b: 3 };
console.log(areObjectsEqual(obj110, obj210)); // Вывод: true
console.log(areObjectsEqual(obj110, obj310)); // Вывод: false