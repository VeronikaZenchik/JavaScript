// Деструктурирующее присваивание и массивы

const data = ['Bob', 28]

const [name, age] = data
console.log('name:', name);
console.log('age:', age);

// перебор массиива

// for (let i = 0; i < array.length; i++) {
// }

const letters = ["A", "B", "C", "D", "E"]

letters.forEach((element, index, array) => { // перебираем массив
console.log(element); // a,b.c.d.e
// index -  перебор
// array - ссылка на сам переберамисмый массив
})


// indexOf - поиск индекса элемента в массиве / lastIndexOf - ищет с конца


// findIndex - осущетсвляет поиск эемента сложного элемента. например массив с объектом (запись похожая как у forEach)


// includes - проверка наличия элемента в массиве

const price = [100, 200, 444, 500, 444, 700]
console.log(price.includes(500, 4 )); // вторым номер в includes можно передать индекс с которого начнется поиск

// some - проверка наличия сложного элемента в массиве, хотя бы один элемент ли соотвествует

const users = [
  {
    name: 'Bob',
    age: 28,
  },
  {
    name: 'Nasty',
    age: 95,
  },
  {
    name: 'Cergy',
    age: 15,
  },
  ]

  console.log(
    users.some((user) => user.name === 'Bob')
  );


// every -  проверяет на соотвествие всех элеметов массива, если один хотя не соотвествует то будет false

// find - поиск элемента в массиве, находит первый эемент 

// filter - поиск элемента в массиве, находит все элементы удовлетворяющие условий


//map - перерать исходный массив и модифицировать

const usersMap = [
  {
    name: 'Bob',
    age: 28,
    city: 'Minsk'
  },
  {
    name: 'Nasty',
    age: 95,
    city: 'Grodno'
  },
  {
    name: 'Cergy',
    age: 15,
    city: 'Grodno'
  },
  ]

  const usersFormatted = users.map((element, index, array) => {
    return element
  })
  console.log(usersFormatted);

// reduce - заключается в том, что он проходит по всем элементам коллекции и применяет заданную функцию к каждому элементу, аккумулируя (или сводя) результаты в одно итоговое значение не мутрируем исходный массив


// reverse() - переворачивает массив, данный метод мутируем исходную сущность, это означает что он меняет наш изначальный users

const reverseUsers = users.reverse()
console.log(reverseUsers);

// если мы не хоти мутировать наш массив то можем сделать так
// const reverseUsers = [...users].reverse() -- то есть мы создаем копию

// sort() - сортирует исхрдный массив меняя порядок элментов, мутрируем исходный массив

const names = ['Bob', 'Pop', 'Cergy', 'Badef']

const sortednames = names.sort() //здесь можно указать функцию

console.log('Отсортированный имена:', sortednames);
