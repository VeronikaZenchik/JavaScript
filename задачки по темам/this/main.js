// Задачи на ключевое слово THIS:


// Задача 1: Вызов метода объекта
// Напишите объект с методом, который выводит имя объекта. Используйте this, чтобы получить доступ к имени.

// Solution:
const person = {
  name: "Veronika",
  age: 25,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
}
person.greet()


// Задача 2: Стрелочная функция и this
// Напишите объект с методом, используя стрелочную функцию. Посмотрите, как this ведет себя в этом случае.

// Solution:
const user = {
  name: "Veronika",
  age: 25,
  tellAge: () => {
    console.log(`I'm ${this.age} years old.`);
  }
}
user.tellAge()


// Задача 3: Контекст в обработчике событий
// Создайте кнопку в HTML и напишите обработчик события, который выводит текст кнопки. Используйте this, чтобы получить доступ к кнопке.

// Solution:

{/* <button id="btn">Click me</button>

<script>
  const button = document.getElementById('btn');
  button.addEventListener('click', function () {
    console.log(`Button text: ${this.textContent}`); // Вывод: Button text: Click me
  });
</script> */}




