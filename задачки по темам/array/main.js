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
const addElementsIf = (arr, elements, condition) => {
  // Фильтруем элементы из второго массива, которые удовлетворяют условию
  const filteredElements = elements.filter(condition);

  // Добавляем отфильтрованные элементы в конец первого массива
  arr.push(...filteredElements);

  // Возвращаем обновленный массив
  return arr;
};

// Пример использования
const arr = [1, 2, 3];
const newElements = [4, 5, 6];
const isEvenAdd = (el) => el % 2 === 0;

console.log(addElementsIf(arr, newElements, isEvenAdd));


// Задача 11: Удаление элементов с условием
// Напишите функцию removeElementsIf, которая принимает массив и функцию-условие. Функция удаляет все элементы, которые удовлетворяют условию.

// Solution:
const removeElementsIf = (arr, condition) => {
  const filteredArray = arr.filter((el) => !condition(el))
  return filteredArray
}
const arrRemove = [1, 2, 3, 4, 5, 6]
const isEvenRemove = (el) => el % 2 === 0
console.log(removeElementsIf(arrRemove, isEvenRemove))



// const filterArrayRemove = (arr, condition) => {
//   return arr.filter(condition)
// }
// const arrRemove = [1, 2, 3, 4, 5]
// const isEven = (el) => el % 2 === 0
// const removeElementsIf = filterArrayRemove(arrRemove, isEven)

// console.log(removeElementsIf);



// Задача 12: Замена элемента в массиве
// Напишите функцию replaceElement, которая принимает массив, индекс и новый элемент, и заменяет элемент по указанному индексу на новый элемент.


// Solution:
const replaceElement = (arr, index, el) => {
  arr.splice(index, 1, el)
  return arr
}
console.log(replaceElement([1, 2, 3], 1, 10));





// Задачи на методы JOIN и SPLIT для работы с массивами:


// Задача 1: Преобразование массива в строку
// Напишите функцию arrayToString, которая принимает массив и символ-разделитель, и возвращает строку, соединяя элементы массива с помощью указанного разделителя.


// Solution:
const arrayToString = (arr, separator) => {
return arr.join(separator)
}

console.log(arrayToString(["apple", "banana", "cherry"], ", "));



// Задача 2: Разделение строки на массив
// Напишите функцию stringToArray, которая принимает строку и символ-разделитель, и возвращает массив, состоящий из подстрок, разделенных указанным символом.

// Solution:
const stringToArray = (str, sep) => {
  return str.split(sep)
  }
  const str2 = "apple, banana, cherry"
  console.log(stringToArray(str2, ", "));


// Задача 3: Объединение и разделение строки
// Напишите функцию reverseString, которая принимает строку, разделяет её на массив слов, переворачивает массив и затем объединяет его обратно в строку.

// Solution:
const reverseString = (str) => {
let result = str.split(" ").reverse().join(" ")
return result
}
const str3 = "Hello world"
console.log(reverseString(str3));


// Задача 4: Удаление дубликатов из строки
// Напишите функцию removeDuplicates, которая принимает строку, разделяет её на массив слов, удаляет дубликаты и возвращает строку с уникальными словами.

// Solution:
const removeDuplicates = (str) => {
let result = []
let arr = str.split(" ")
for(let i = 0; i < arr.length; i++){
  if(!result.includes(arr[i])){
    result.push(arr[i])
  }
}
return result.join(" ")
}
const str4 = "apple apple banana cherry banana";
console.log(removeDuplicates(str4));




// Задачи на поиск элементов в массивах

// Задача 1: Поиск элемента в массиве
// Напишите функцию findElement, которая принимает массив и элемент, и возвращает true, если элемент присутствует в массиве, и false, если отсутствует.

// Solution:
const findElement = (arr, el) => {
  return arr.includes(el)
}
console.log(findElement([1, 2, 3, 4, 5], 3)); 


// Задача 2: Поиск индекса элемента
// Напишите функцию findIndex, которая принимает массив и элемент, и возвращает индекс первого вхождения элемента в массиве. Если элемент не найден, верните -1.

// Solution:
const findIndex = (arr, el) => {
  return arr.indexOf(el)
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); 


// Задача 3: Поиск максимального элемента
// Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный элемент.

// Solution:
const findMax = (arr) => {
return Math.max(...arr)
}
console.log(findMax([10, 20, 5, 30]));


// Задача 4: Поиск минимального элемента
// Напишите функцию findMin, которая принимает массив чисел и возвращает минимальный элемент.


// Solution:
const findMin = (arr) => {
  return Math.min(...arr)
  }
  console.log(findMin([10, 20, 5, 30]));


// Задача 5: Поиск среднего значения
// Напишите функцию findAverage, которая принимает массив чисел и возвращает среднее значение элементов массива.

// Solution:
const findAverage = (arr) => {
let result = 0
for (let i = 0; i < arr.length; i++) {
  result += arr[i]
}
return result / arr.length
  }
  console.log(findAverage([10, 20, 30, 40]));


  
// Задача 6: Поиск уникальных элементов
// Напишите функцию findUniqueElements, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы.

// Solution:
const findUniqueElements = (arr) => {
let result = []
for (let i = 0; i < arr.length; i++) {
  if(!result.includes(arr[i])){
    result.push(arr[i])
  }
}
return result
}
console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]));


// Задача 7: Поиск элемента с условием
// Напишите функцию findElementByCondition, которая принимает массив и функцию-условие, и возвращает первый элемент, удовлетворяющий условию. Если такого элемента нет, верните null.

// Solution:
const findElementByCondition = (arr, condition) => {
  return arr.find(condition)
}
const arr7 = [1, 2, 3, 4, 5]
console.log(findElementByCondition(arr7, (el) => el > 3))


// Задача 8: Поиск всех элементов с условием
// Напишите функцию findAllByCondition, которая принимает массив и функцию-условие, и возвращает массив всех элементов, удовлетворяющих условию.

// Solution:
const findAllByCondition = (arr, condition) => {
  return arr.filter(condition)
}
const arr8 = [1, 2, 3, 4, 5, 6]
console.log(findAllByCondition(arr8, (el) => el % 2 === 0))


// Задача 9: Поиск элемента с наибольшим количеством вхождений ------
// Напишите функцию findMostFrequentElement, которая принимает массив и возвращает элемент, который встречается в массиве чаще всего.

// Solution:
const findMostFrequentElement = (arr) => {
  const counts = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  for (let el of arr) {
    counts[el] = (counts[el] || 0) + 1;
    if (counts[el] > maxCount) {
      maxCount = counts[el];
      mostFrequentElement = el;
    }
  }

  return mostFrequentElement;
};
const arr9 = [1, 2, 2, 3, 3, 3, 4];
console.log(findMostFrequentElement(arr9)); 


// Задача 10: Поиск элемента по индексу 
// Напишите функцию getElementByIndex, которая принимает массив и индекс, и возвращает элемент по указанному индексу. Если индекс выходит за пределы массива, верните null.

// Solution:
const getElementByIndex = (arr, index) => {
  // Проверяем, находится ли индекс в пределах массива
  if (index >= 0 && index < arr.length) {
    // Если да, возвращаем элемент по указанному индексу
    return arr[index];
  } else {
    // Если нет, возвращаем null
    return null;
  }
}
const arr10 = [10, 20, 30, 40]
console.log(getElementByIndex(arr10, 2))


// Задача 11: Поиск элемента в отсортированном массиве 
// Напишите функцию findInSortedArray, которая принимает отсортированный массив и элемент, и возвращает true, если элемент присутствует в массиве, и false, если отсутствует. Используйте алгоритм бинарного поиска.

// Solution:
const findInSortedArray = (arr, el) => {
return arr.some((els) => els === el)
}
const arr11 = [1, 2, 3, 4, 5];
console.log(findInSortedArray(arr11, 3));

// Задача 12: Поиск элементов в диапазоне
// Напишите функцию findElementsInRange, которая принимает массив чисел, минимальное и максимальное значение, и возвращает массив элементов, которые находятся в указанном диапазоне (включительно).

// Solution:
const findElementsInRange = (arr, min, max) => {
  return arr.filter((el) => el >= min && el <= max);
};
console.log(findElementsInRange([10, 20, 30, 40, 50], 20, 40)); 


// Задачи на методы SPLICE и SLICE для работы с массивами:


// Задача 1: Удаление элементов из массива
// Напишите функцию removeElements, которая принимает массив и два индекса (start и end), и удаляет элементы из массива, начиная с индекса start и заканчивая индексом end (не включая end).

// Solution:
const removeElements = (arr, indexOne, indexTwo) => {
arr.splice(indexOne, indexTwo - indexOne)
return arr
}
console.log(removeElements([1, 2, 3, 4, 5], 1, 3));


// Задача 2: Вставка элементов в массив
// Напишите функцию insertElements, которая принимает массив, индекс (index) и массив элементов (elements), и вставляет элементы в массив по указанному индексу.

// Solution:
const insertElements = (arr, index, elements) => {
  arr.splice(index, 0, ...elements)
  return arr
}
const arr23 = [1, 2, 3, 4, 5];
const newElementsArr = [10, 20, 30];
console.log(insertElements(arr23, 2, newElementsArr)); 


// Задача 3: Замена элементов в массиве
// Напишите функцию replaceElements, которая принимает массив, индекс (index) и массив элементов (elements), и заменяет элементы в массиве, начиная с указанного индекса, на элементы из массива elements.

// Solution:
const replaceElements = (arr, index, el) => {
  arr.splice(index, el.length, ...el)
  return arr
}
const arr33 = [1, 2, 3, 4, 5];
console.log(replaceElements(arr33, 1, [10, 20]))


// Задача 4: Копирование части массива
// Напишите функцию copyPartOfArray, которая принимает массив и два индекса (start и end), и возвращает новый массив, содержащий элементы из исходного массива, начиная с индекса start и заканчивая индексом end (не включая end).

// Solution:
const copyPartOfArray = (arr, indexOne, indexTwo) => {
  return arr.slice(indexOne, indexTwo)
}
console.log(copyPartOfArray([1, 2, 3, 4, 5], 1, 4));


// Задача 5: Удаление и вставка элементов
// Напишите функцию removeAndInsert, которая принимает массив, индекс (index), количество удаляемых элементов (count) и массив элементов (elements), и удаляет указанное количество элементов, начиная с указанного индекса, а затем вставляет элементы из массива elements на их место.

// Solution:
const removeAndInsert = (arr, index, count, elements) => {
arr.splice(index, count, ...elements)
return arr
}
const arr25 = [1, 2, 3, 4, 5];
console.log(removeAndInsert(arr25, 1, 2, [10, 20]));


// Задача 6: Разделение массива на две части
// Напишите функцию splitArray, которая принимает массив и индекс (index), и возвращает два новых массива: первый содержит элементы до указанного индекса, а второй — элементы после указанного индекса (включая элемент с указанным индексом).

// Solution:
const splitArray = (arr, index) => {
  const firstPart = arr.slice(0, index);
  const secondPart = arr.slice(index);
  return [firstPart, secondPart];
}
const arr26 = [1, 2, 3, 4, 5];
console.log(splitArray(arr26, 2))


// Задача 7: Удаление последнего элемента и добавление в начало
// Напишите функцию moveLastToFirst, которая принимает массив, удаляет последний элемент и добавляет его в начало массива.

// Solution:
const moveLastToFirst = (arr) => {
  // Удаляем последний элемент с помощью splice
  const lastElement = arr.splice(-1, 1)[0];
  // Добавляем удаленный элемент в начало массива с помощью unshift
  arr.unshift(lastElement);
  // Возвращаем измененный массив
  return arr;
}
const arr27 = [1, 2, 3, 4, 5];
console.log(moveLastToFirst(arr27));


// Задача 8: Удаление первого элемента и добавление в конец
// Напишите функцию moveFirstToLast, которая принимает массив, удаляет первый элемент и добавляет его в конец массива.

// Solution:
const moveFirstToLast = (arr) => {
  const fitsrEL = arr.shift()
  arr.push(fitsrEL)
  return arr
}
const arr28 = [1, 2, 3, 4, 5];
console.log(moveFirstToLast(arr28));


// Задача 9: Удаление всех элементов до указанного индекса
// Напишите функцию removeBeforeIndex, которая принимает массив и индекс (index), и удаляет все элементы до указанного индекса (не включая элемент с указанным индексом).

// Solution:
const removeBeforeIndex = (arr, index) => {
return arr.slice(index)
}
const arr29 = [1, 2, 3, 4, 5];
console.log(removeBeforeIndex(arr29, 2));


// Задача 10: Удаление всех элементов после указанного индекса
// Напишите функцию removeAfterIndex, которая принимает массив и индекс (index), и удаляет все элементы после указанного индекса (включая элемент с указанным индексом).

// Solution:
const removeAfterIndex = (arr, index) => {
  return arr.slice(0, index)
}
const arr30 = [1, 2, 3, 4, 5];
console.log(removeBeforeIndex(arr30, 2));



// Задачи на методы REVERSE и SORT для работы с массивами:

// Задача 1: Перевернуть массив
// Напишите функцию reverseArray, которая принимает массив и возвращает новый массив, перевернутый в обратном порядке.

// Solution:
const reverseArray  = (arr) => {
  return arr.reverse()
}
const arr31 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr31));


// Задача 2: Сортировка чисел по возрастанию
// Напишите функцию sortAscending, которая принимает массив чисел и возвращает новый массив, отсортированный по возрастанию.

// Solution:
const sortAscending  = (arr) => {
  return arr.sort((a, b) => a - b)
}
const arr32 = [5, 3, 8, 1, 2];
console.log(sortAscending(arr32))


// Задача 3: Сортировка чисел по убыванию
// Напишите функцию sortDescending, которая принимает массив чисел и возвращает новый массив, отсортированный по убыванию.

// Solution:
const sortDescending  = (arr) => {
  return arr.sort((a, b) => b - a)
}
const arr34 = [5, 3, 8, 1, 2];
console.log(sortDescending(arr34))


// Задача 4: Сортировка строк по алфавиту
// Напишите функцию sortStrings, которая принимает массив строк и возвращает новый массив, отсортированный по алфавиту.

// Solution:
const sortStrings  = (arr) => {
  return arr.sort()
}
const arr35 = ["banana", "apple", "cherry", "date"];
console.log(sortStrings(arr35));


// Задача 5: Сортировка массива объектов
// Напишите функцию sortObjects, которая принимает массив объектов и ключ, по которому нужно сортировать объекты. Функция должна возвращать новый массив, отсортированный по указанному ключу.

// Solution:
const sortObjects  = (arr, key) => {
  return  arr.sort((a, b) => a[key] - b[key])
}
const arr36 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Alice", age: 30 }
];
console.log(sortObjects(arr36, "age"));


// Задача 6: Перевернуть строку
// Напишите функцию reverseString, которая принимает строку и возвращает новую строку, перевернутую в обратном порядке.

// Solution:
const reverseString1 = (str) => {
return str.split('').reverse().join('')
}
console.log(reverseString1("hello"));



// Задачи на методы REDUCE для работы с массивами:

// Задача 1: Сумма элементов массива
// Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех элементов.

// Solution:
const sumArrayReduce = (arr) => {
return arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
}
console.log(sumArrayReduce([1, 2, 3, 4, 5]));


// Задача 2: Произведение элементов массива
// Напишите функцию multiplyArray, которая принимает массив чисел и возвращает произведение всех элементов.

// Solution:
const multiplyArrayReduce = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  }, 0)
}
console.log(multiplyArrayReduce([1, 2, 3, 4, 5]));


// Задача 3: Поиск максимального элемента
// Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный элемент.

// Solution:
const findMaxReduce = (arr) => {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
}
console.log(findMaxReduce([10, 20, 5, 30]));




// Задачи на метод FOREACH для работы с массивами:


// Задача 1: Вывод элементов массива
// Напишите функцию printArray, которая принимает массив и выводит каждый элемент в консоль.

// Solution:
const printArray = (arr) => {
arr.forEach((num) => {console.log(num)})
}
printArray([1, 2, 3, 4, 5]);


// Задача 2: Подсчет суммы элементов массива
// Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех элементов.

// Solution:
const sumArray = (arr) => {
  arr.forEach((sum) => {
    const result = sum + sum
console.log(result);

  })
}
sumArray([1, 2, 3, 4, 5, 6])


// Задача 3: Подсчет количества элементов
// Напишите функцию countElements, которая принимает массив и возвращает объект, где ключи — это уникальные элементы массива, а значения — количество их вхождений.

// Solution:
const countElements = (arr) => {
  const result = {};
  arr.forEach((element) => {
    result[element] = (result[element] || 0) + 1;
  });
  return result;
};

const arr333 = ["apple", "banana", "apple", "cherry", "banana"];
console.log(countElements(arr333));


// Задача 4: Увеличение элементов массива
// Напишите функцию increaseArray, которая принимает массив чисел и число increment, и увеличивает каждый элемент массива на increment.

// Solution:
const increaseArray = (arr, increment) => {
  arr.forEach((element, index) => {
    arr[index] = element + increment;
  });
};

const arr3336 = [1, 2, 3, 4, 5];
increaseArray(arr3336, 2);
console.log(arr3336);


const exp = [1, 2, 3, 4, 5]
exp.forEach(increase)
function increase (arr4554, el) {
  arr4554 = 
  
}


// Задача 5: Подсчет количества элементов, удовлетворяющих условию
// Напишите функцию, которая принимает массив чисел и возвращает количество элементов, которые больше 10.

// Solution:
const countGreaterThanTen = (arr) => {
  let count = 0; // Объявляем переменную для подсчета

  arr.forEach((el) => {
    if (el > 10) {
      count++; // Увеличиваем счетчик, если элемент больше 10
    }
  });

  return count; // Возвращаем результат после завершения цикла
};

console.log(countGreaterThanTen([1, 6, 89, 78, 10]));


// Задача 4: Преобразование массива строк в массив длин строк
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий длины каждой строки.

// Solution:
const stringLengths = (arr) => {
  let result = []
arr.forEach((el) => {
  result.push(el.length);
  
})
return result
}
console.log(stringLengths(['apple', 'banana', 'cherry']));


// Задача 5: Проверка, все ли элементы массива положительные---
// Напишите функцию, которая принимает массив чисел и возвращает true, если все элементы массива положительные, и false в противном случае.

// Solution:
const allPositive = (arr) => {
  let isPositive = true; // Инициализируем флаг
  arr.forEach((el) => {
    if(el <= 0){
      isPositive = false;  // Если элемент не положительный, меняем флаг
    }
  })
  return isPositive
}
allPositive([1, 2, 3, 4, 5]);


// Задача 6: Подсчет количества четных чисел
// Напишите функцию, которая принимает массив чисел и возвращает количество четных чисел в массиве.

// Solution:
const countEvenNumbers = (arr) => {
  let count = 0
arr.forEach((el) => {
  if(el % 2 === 0) {
    count++
  }
})
return count
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]))


// Задача 7: Преобразование массива чисел в массив строк
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий строковые представления каждого числа.

// Solution:
const numbersToString = (arr) => {
  const result = []; 

  arr.forEach((el) => {
    result.push(el.toString()); // Преобразуем каждое число в строку и добавляем в массив result
  });

  return result; 
}
numbersToString([1, 2, 3, 4, 5]);


// Задача 8: Подсчет суммы квадратов элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает сумму квадратов всех элементов массива.

// Solution:
const sumOfSquares = (arr) => {
  let sum = 0
arr.forEach((el, index, arr) => {
  // arr[index] = el ** 2
  // sum += arr[index]
  sum += el ** 2
})
return sum
}

console.log(sumOfSquares([1, 2, 3, 4, 5]));


// Задача 9: Проверка, есть ли в массиве отрицательные числа-----
// Напишите функцию, которая принимает массив чисел и возвращает true, если в массиве есть хотя бы одно отрицательное число, и false в противном случае.

// Solution:
const hasNegative = (arr) => {
  let hasNeg = false
  arr.forEach((el) => {
    if(el < 0){
      hasNeg =  true
    }
  })
  return hasNeg
}
hasNegative([1, 2, 3, 4, 5]);


// Задача 10: Преобразование массива строк в массив первых букв
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий первую букву каждой строки

// Solution:
const firstLetters = (arr) => {
  let res = []
  arr.forEach((el) => {
    res.push(el[0])
  })
  return res
}

console.log(firstLetters(['apple', 'banana', 'cherry']));




// Задачи на метод MAP для работы с массивами:


// Задача 1: Удвоение чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент удвоен.

// Solution:
const doubleNumbers = (arr) => {
  return arr.map((num) => num * 2)
}
console.log(doubleNumbers([1, 2, 3, 4, 5]));


// Задача 2: Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, где каждая строка преобразована в верхний регистр.

// Solution:
const uppercaseStrings = (arr) => {
  return arr.map((el) => {
    return el.toUpperCase()
  })
}
console.log(uppercaseStrings(['apple', 'banana', 'cherry']));


// Задача 3: Преобразование чисел в строки
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждое число преобразовано в строку.

// Solution:
const numbersToStringMap = (arr) => {
  return arr.map((el) => {
    return el.toString()
  })
}
console.log(numbersToStringMap([1, 2, 3, 4, 5]));


// Задача 4: Получение квадратов чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент — это квадрат соответствующего числа.

// Solution:
const squareNumbers = (arr) => {
  return arr.map((el) => {
    return el ** 2
  })
}
console.log(squareNumbers([1, 2, 3, 4, 5]));


// Задача 5: Получение длин строк
// Напишите функцию, которая принимает массив строк и возвращает новый массив, где каждый элемент — это длина соответствующей строки.

// Solution:
const stringLengthsMap = (arr) => {
  return arr.map((el) => {
    return el.length
  })
}
console.log(stringLengthsMap(['apple', 'banana', 'cherry']));


// Задача 6: Преобразование объектов
// Напишите функцию, которая принимает массив объектов и возвращает новый массив, где каждый объект содержит только одно свойство — имя.

// Solution:
const getNames = (arr) => {
  return arr.map((el) => {
    return el.name
  })
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
console.log(getNames(users)); 


// Задача 7: Преобразование массива в HTML-список
// Напишите функцию, которая принимает массив строк и возвращает новый массив, где каждая строка обернута в тег <li>.

// Solution:
const createListItems = (arr) => {
  return arr.map((el) => {
    return `<li> ${el} </li>`
  })
}
const fruits = ['apple', 'banana', 'cherry'];
console.log(createListItems(fruits));

// Задача 8: Преобразование температуры
// Напишите функцию, которая принимает массив температур в градусах Цельсия и возвращает новый массив, где каждая температура преобразована в градусы Фаренгейта по формуле: F = C * 1.8 + 32.

// Solution:
const convertToFahrenheit = (arr) => {
  return arr.map((el) =>  el * 1.8 + 32)
}
console.log(convertToFahrenheit([0, 10, 20, 30]));


// Задача 9: Фильтрация четных чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент — это строка "четное" или "нечетное" в зависимости от значения числа.

// Solution:
const evenOrOdd = (arr) => {
return arr.map((el) => {
  if (el % 2 === 0 ) {
    return "четное"
  }
  return "нечетное"
})
}
console.log(evenOrOdd([1, 2, 3, 4, 5]));


// Задача 10: Увеличение возраста
// Напишите функцию, которая принимает массив объектов с полями name и age и возвращает новый массив, где возраст каждого человека увеличен на 1.

// Solution:
const increaseAge = (arr) => {
  return arr.map((el) => ({
    ...el, // Копируем все свойства объекта
    age: el.age + 1 // Увеличиваем возраст на 1
  }));
};

const users10 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
console.log(increaseAge(users10))



// Задачи на метод FILTER для работы с массивами:


// Задача 1: Фильтрация четных чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// Solution:
const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0)
  }
  console.log(filterEvenNumbers([1, 2, 3, 4, 5]));


// Задача 2: Фильтрация строк по длине
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, длина которых больше 5 символов.

// Solution:
const filterLongStrings = (arr) => {
  return arr.filter((el) => el.length > 5)
  }
  console.log(filterLongStrings(['apple', 'banana', 'cherry', 'kiwi']));


// Задача 3: Фильтрация положительных чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.

// Solution:
const filterPositiveNumbers = (arr) => {
  return arr.filter((num) => num > 0)
  }
  console.log(filterPositiveNumbers([-2, -1, 0, 1, 2, 3]));


// Задача 4: Фильтрация объектов по возрасту
// Напишите функцию, которая принимает массив объектов с полями name и age и возвращает новый массив, содержащий только объекты, у которых возраст больше 30.

// Solution:
const filterByAge = (arr) => {
  return arr.filter((num) => num.age > 30)
  }
  const users4 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 40 }
  ];
  
console.log(filterByAge(users4));


// Задача 5: Фильтрация чисел больше заданного значения
// Напишите функцию, которая принимает массив чисел и число threshold и возвращает новый массив, содержащий только числа, которые больше threshold.

// Solution:
const filterGreaterThan = (arr, threshold) => {
  return arr.filter((num) => num > threshold)
  }
  console.log(filterGreaterThan([1, 2, 3, 4, 5], 3));


// Задача 6: Фильтрация строк, содержащих определенную подстроку
// Напишите функцию, которая принимает массив строк и строку substring и возвращает новый массив, содержащий только строки, которые содержат substring.

// Solution:
const filterBySubstring = (arr, substring) => {
  return arr.filter((str) => str.includes(substring))
  }
  console.log(filterBySubstring(['apple', 'banana', 'cherry', 'grape'], 'ap'));
