/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let result = 0
let numEven = 1
while (numEven <= 20) {
  if (numEven % 2 !== 0) {
    result += numEven
  }
  numEven++
}
console.log(result);

