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