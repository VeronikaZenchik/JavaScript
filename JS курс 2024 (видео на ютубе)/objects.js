const firstObject = {}
const secondObject = new Object () // так тоже можно создать объект


const user = {
  login:'iamhero',
  password: 'qwerty',
  'last-auth': '05.04.2024', //если имя через пробел или черех тире, то нужно брать в кавычки
  age: 33,
  sayhi: () => console.log('Hello!'), // в объекте можем использовать функцию, но в объекте ее такэе называют метожом
}
user.sayhi() //вызываем
user.name = 'Bob' // добавение значения в объект

console.log(user);

user.name = 'Aser' // изменяем значение своейства

console.log(user);

delete user.age // удаляемп свойсвто

console.log(user);

// проверка свойства в объекте

console.log('name' in user);

//перебрать свойства объекта через цикл

for (const key in user){
  console.log(key);
}

// объект ссылочный тип данных, у каждоого объекта уникальный ссылка для объекта памяти

// const obj1 = {name: 'Bob'}
// const obj2 = obj1

// obj2.name = 'Aser'

// console.log(obj1); // aser, перезаписали


//сравниваем два объекта
const obj1 = {
  name: 'Bob',
  age: 28,
}

const obj2 = {
  name: 'Bob',
  age: 28,
}

const areObjectEqual = (object1, object2) => {
  const keys1 = Object.keys(object1) //это метод в JS, который возвращает массив строк, представляющих имена (ключи) всех перечисляемых свойств объекта
  const keys2 = Object.keys(object2)

  console.log('Длина keys1:', keys1.length); //длина объекта
  console.log('Длина keys2:', keys2.length);
  
  if (keys1.length !== keys1.length) { // если наши объекты не равны
    return false
  }

  for (const key in object1){ // перебираем свойства в объекта
    if (object1[key] !== object2[key]){ // если свойсва не одинаковы
      return false
    }
  }

  return true // и если прошли все проверки
}

console.log(
  'Равны ли объекты obj1 и obj2:' ,
  areObjectEqual(obj1, obj2)
);




// клонирование объекта
 const objects1 = {name: 'Bob'}
 const oblects2 = {}

 for(const key in objects1){
  oblects2[key] = objects1[key]
 }

// можно записать это следующим образом

const objects2 = Object.assign({}, objects1) // метод используется для копирования значений всех перечисляемых свойств из одного объекта в другой объект (можно несколько объектов передавать)
const oblc2  = {... objects1} // для копированич объектов, оператор расширения

oblects2.name = 'Aser'

console.log(objects1);
console.log(oblects2);



// объединенин объектов

const firstOb = {name: 'Bob'}
const secondOb = {age: 23}


const userTogether = Object.assign({}, firstOb, secondOb) // с помощью этого метода также может объединить
const usersTogether = {...firstOb, ...secondOb} // также для объединения может использовать этот оператор


console.log('user:' , userTogether);

console.log(user.address.city); // у нас может не быть или быть city и тогда высветиться ошибка, то есть если объект опциональный
console.log(user.address?.city); // опциональнвя цепочка, чтоб код работал


// Деструктуризация объекта

const userObject1 = {
  name: 'Pop',
  age: 25,
  isDeveloper: true,
}

const {
  name,
  age,
  isDeveloper
} = userObject1 // можем сделать вместо того чтобы вызывать каждую отльную переменную


const firstUser = {
  name: "Roma",
  age: 28,
  city: "Moscow",
}

const secondUser = {
  name: "Max",
  age: 5,
}

const {city = 'не указан'} = user2 // деструктуризация со значением по умолчанию, мы может так написать, что если в нашем обхекте не будет узакаон, то в консоле будет не указан,  а если есть то в консле будет значение объекта

console.log('Город:', city);

// Деструктуризация с переименованием

const user8 = {
  name: 'Bob',
}

const admin = {
  name: 'Sosiski',
}

const {name: userName} = user // переименовываем наше значение
const {name: userAdmin} = admin