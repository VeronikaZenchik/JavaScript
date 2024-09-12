const name = "Bob"
console.log((name[0])); // получаем первыц символ из строки
console.log(name[name.length - 1]); //последняя буква

// метод at - метод, который позволяет получать элемент из массива или строки по его индексу, можно писать отрицательный индекс
console.log(name.at(0)); //B
console.log(name.at(-1)); //b -последнее число с конца


// toLowerCase / toUpperCase - изменение регистра

// trim - образка пробелов в начаеле и в конце строки, если пробелы будут не в начале или в конеце, то они уже обрезаться не будут
const message = '    Hello!'
console.log(`Строка ${message} имеет длину ${message.length} символов`); // 10 символов

const messageFormatted = message.trim()
console.log(`Сообщение ${messageFormatted} имеет длину ${messageFormatted.length} символов`); //6

// trim-end / trim-start - более точечная обрезка


// indexOf - позволяет получить индекс первого! символва строки подстроки
const messageIndexOf = 'Попробуем найти ~это выражение~ в этом предлжении'

console.log(messageIndexOf.indexOf('~это выражение~')); //16

// startsWith / endsWith - проверяет начало и конец строки
const messageWith = "Начало строки и конец"
console.log(messageWith.startsWith('Нач')); //true
console.log(messageWith.endsWith('нец')); // true


// substring(indexStart, indexEnd) - используется для извлечения подстроки из строки

// - indexStart: Индекс, с которого начинается извлечение (включительно).
// - indexEnd: Индекс, на котором заканчивается извлечение (не включая его).

const str = 'JavaScript'

console.log((str.substring(0,4)));

// repeat - повторяет строку

console.log(str.repeat(3));


// replace - заменить часть строки, принимает два аргумента что меняем и на что меняем, будет менять только первое обнаруженое
// replaceAll - меняет все, а не первое найденное

const messageReplace = 'Я изучаю бэкенд'

console.log(messageReplace.replace('бэкенд', 'фронтенд'));





