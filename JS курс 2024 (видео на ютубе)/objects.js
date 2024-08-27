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






