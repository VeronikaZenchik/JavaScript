/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = ""
for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === " ") {
    result += str[i].toUpperCase()
  } else {
    result += str[i]
  }
}
return result
}
console.log(capitalizeWords("hello world from javascript"));

// function capitalizeWords(str) {
//   return str
//     .split(" ") // Разделяем строку на слова
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Делаем первую букву каждого слова заглавной
//     .join(" "); // Объединяем слова обратно в строку
// }
// console.log(capitalizeWords("hello world from javascript"));
