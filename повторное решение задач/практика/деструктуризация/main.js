//  Уровень 1: Основы

//1. Деструктуризация массива
// Извлеките первые 3 значения из массива:

const colors = ['red', 'green', 'blue', 'yellow'];
const [firstColor, secondColor, thirdColor] = colors
console.log(firstColor);


// 2.Пропуск элементов
// Извлеките только первый и третий элементы:

const numbers = [10, 20, 30, 40];
const [firstNum, ,thirdNum] = numbers
console.log(firstNum);
console.log(thirdNum);

// 3.Деструктуризация объекта
// Извлеките model и year из объекта:

const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
const {model, year} = car
console.log(model);
console.log(year);


// Уровень 2: Продвинутые техники

// 4. Значения по умолчанию
// Извлеките username (если нет, то 'Guest') и age (если нет, то 18):

const user = { username: 'Alex' }
const {username  = "Guest", age = 18} = user

console.log(username);


// 5. Переименование переменных
// Извлеките brand как carBrand и model как carModel:

const vehicle = { brand: 'BMW', model: 'X5' };
const {brand: carBrand, model: carModel} = vehicle
console.log(carBrand);


// 6.Вложенные объекты
// Извлеките city из адреса:

const person = { 
  name: 'Max', 
  address: { 
    city: 'Berlin', 
    street: 'Main' 
  } 
};

const {address: city} = person
console.log(city);

// const { address: { city } } = person; --- верное решение


//  Уровень 3: Практические задачи

// 7. Обмен переменных
// Поменяйте значения x и y местами:

let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y)

// 8. Деструктуризация в функциях
// Перепишите функцию с деструктуризацией:


function printPerson(person) {
  console.log(`${person.name}, ${person.age} years old`);
}

function printPersonDestr({name, age}) {
  console.log(`${name}, ${age} years old`);
}

// 9.Rest-оператор
// Извлеките первый элемент, а остальные сохраните в массив:

const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const [firstEl, ...otherEl] = fruits
console.log(firstEl);
console.log(otherEl);


//  Уровень 4: Реальные кейсы

// 10. Работа с API
// Извлеките status и массив posts из ответа:

const response = {
  status: 'OK',
  data: {
    posts: [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]
  }
};

const {status , data: {posts}} = response
console.log(posts);

// 11.Глубокая деструктуризация
// Извлеките title первого поста и name автора:

const blog = {
  title: 'My Blog',
  author: { 
    name: 'Jane', 
    contacts: { email: 'jane@example.com' } 
  },
  posts: [
    { id: 1, title: 'First Post' }
  ]
};

const {author: {name}, posts: [{title}]} = blog;

console.log(name);
console.log(title);
