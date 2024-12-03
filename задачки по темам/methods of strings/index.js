// Задача 1: Преобразование строки в верхний регистр
// Описание: Объявите переменную str и присвойте ей значение "hello world". Напишите код, который преобразует эту строку в верхний регистр и выведите результат в консоль.

// Solution:
let str1 = "hello world"
let result1 = str1.toUpperCase()
console.log(result1)


// Задача 2: Преобразование строки в нижний регистр
// Описание: Объявите переменную str и присвойте ей значение "HELLO WORLD". Напишите код, который преобразует эту строку в нижний регистр и выведите результат в консоль.

// Solution:
let str2 = "HELLO WORLD"
console.log(str2.toLowerCase())


// Задача 3: Извлечение подстроки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который извлекает подстроку "is awesome" из этой строки и выведите результат в консоль.

// Solution:
let str3 =  "JavaScript is awesome"
let result3 = str3.slice(11)
console.log(result3);


// Задача 4: Поиск подстроки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который проверяет, содержит ли эта строка подстроку "awesome". Выведите результат в консоль.

// Solution:
let srt4 = "JavaScript is awesome"
let result4 = srt4.includes("awesome")
console.log(result4);


// Задача 5: Замена подстроки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который заменяет подстроку "awesome" на "great" и выведите результат в консоль.

// Solution:
let str5 = "JavaScript is awesome"
let result5 = str5.replace("awesome", "great")
console.log(result5);


// Задача 6: Разделение строки на массив
// Описание: Объявите переменную str и присвойте ей значение "JavaScript,Python,Ruby". Напишите код, который разделяет эту строку на массив по запятой и выведите результат в консоль.

// Solution:
let str6 = "JavaScript,Python,Ruby"
let result6 = str6.split(",")
console.log(result6);


// Задача 7: Объединение массива в строку
// Описание: Объявите переменную arr и присвойте ей значение ["JavaScript", "Python", "Ruby"]. Напишите код, который объединяет элементы этого массива в строку, разделяя их запятыми, и выведите результат в консоль.

// Solution:
let arr7 =  ["JavaScript", "Python", "Ruby"]
let result7 = arr7.join(",")
console.log(result7);


// Задача 8: Удаление пробелов в начале и конце строки
// Описание: Объявите переменную str и присвойте ей значение " Hello World ". Напишите код, который удаляет пробелы в начале и конце строки и выведите результат в консоль.

// Solution:
let str8 =  " Hello World "
let result8 = str8.trim()
console.log(result8);


// Задача 9: Проверка на пустую строку
// Описание: Объявите переменную str и присвойте ей значение "". Напишите код, который проверяет, является ли эта строка пустой, и выведите результат в консоль.

// Solution:
let str9 = ""
let result9 = str9.length === 0
console.log(result9);


// Задача 10: Получение длины строки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript". Напишите код, который вычисляет длину этой строки и выведите результат в консоль.

// Solution:
let str10 = "JavaScript"
let result10 = str10.length
console.log(result10);


// Задача 11: Поиск индекса подстроки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который находит индекс подстроки "is" и выведите результат в консоль.

// Solution:
let str11 = "JavaScript is awesome"
let result11 = str11.indexOf("is")
console.log(result11);


// Задача 12: Извлечение символа по индексу
// Описание: Объявите переменную str и присвойте ей значение "JavaScript". Напишите код, который извлекает символ по индексу 4 и выведите результат в консоль.

// Solution:
let str12 = "JavaScript"
let result12 = str12.at(4)
console.log(result12);


// Задача 13: Проверка на начало строки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который проверяет, начинается ли эта строка с подстроки "Java" и выведите результат в консоль.

// Solution:
let str13 = "JavaScript is awesome"
let result13 = str13.startsWith("Java")
console.log(result13);


// Задача 14: Проверка на конец строки
// Описание: Объявите переменную str и присвойте ей значение "JavaScript is awesome". Напишите код, который проверяет, заканчивается ли эта строка на подстроку "awesome" и выведите результат в консоль.

// Solution:
let str14 = "JavaScript is awesome"
let result14 = str14.endsWith("awesome")
console.log(result14);


// Задача 15: Повторение строки
// Описание: Объявите переменную str и присвойте ей значение "abc". Напишите код, который повторяет эту строку 3 раза и выведите результат в консоль.

// Solution:
let str15 = "abc"
let result15 = str15.repeat(3)
console.log(result15);