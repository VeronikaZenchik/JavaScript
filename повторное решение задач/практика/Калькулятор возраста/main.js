// Задание: Калькулятор возраста
// Запросите у пользователя год рождения через prompt().
// Рассчитайте возраст.
// Выведите сообщение:
// Если возраст >= 18: "Вам разрешено входить".
// Если < 18: "Вам запрещено входить".



const currentYear = new Date().getFullYear();
const birthYear = +prompt("Скажите, пожалуйста, Ваш год рождения?")


if (isNaN(birthYear)) {
  console.log("Вы ввели неверный год рождения");
} else {
  let age = currentYear - birthYear;
  
  if (age >= 18) {
    console.log("Вам разрешено входить");
  } else {
    console.log("Вам запрещено входить");
  }
}