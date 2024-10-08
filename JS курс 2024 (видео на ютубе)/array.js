// Массив - это не какой-то отдельный тип данный, это специальная структура, в котором элементы хранятся в том порядке в котором их поместили

const array = ['Hello', 100, true] // так выглядит массив

// индекс в массиве не может быть меньше нуля


const arr = [
  'Hello', 
  100, 
  true,
  {name: 'Bob'},
  () => console.log('xaxa'),
  [true, true, true]
]
console.log(arr);

console.log(arr[3].name); // так мы обращаемя в нашем массиве к объекту

arr[4]() //а так мы вызовем функцию
console.log(arr[5][0]); //а так мы обратились к нашему массиву внутри и к его первом элементу

arr[0] = 'Bye' // таким образом мы поменяем значение

console.log(arr);

// полученипе последнего элемента в массиве

// length - 1
console.log(arr[arr.length - 1]);

// at
console.log(arr.at(-1));


//pop() -  не нужно ничего писать в скобках, он сам удаляет послений эемент в массиве, и если его в консоль то мы увидим то что он удалил / shif такой же только удаляет в начале



// join - используется для объединения всех элементов массива в одну строку
// array.join(separator);  -- `separator`: (необязательный) Строка, которая будет использоваться как разделитель. Если данный параметр не указан, используется запятая (`,`).

const words = ['Hello', 'World'];
const sentence = words.join(' '); // Разделитель — пробел
console.log(sentence); // Вывод: "Hello World"


// копирование массивов

const arr1 = ['A', 'B', 'C']
const arr2 = [...arr1] // так же можно с помощью slice
const arr3 = ['D', 'E']

console.log(arr1);
console.log(arr2);


// объединить массивы
const totalArr = [...arr1, ...arr2] //  с помощью спреда объединаем массив
console.log(totalArr);

// метод concat -  также объединяет массивы

const totalConcat = arr1.concat(arr2, arr3) // перечислять можно сколько угодно
console.log(totalConcat);

