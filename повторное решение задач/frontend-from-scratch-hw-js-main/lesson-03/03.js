// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
if (num1 > num2 && num1 > num3) {
  return num1
} else if (num2 > num1 && num2 > num3){
  return num2
}
return num3
}
console.log(findLargest(8, 2, 3));


// Можно проще
// function findLargest(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// console.log(findLargest(10, 20, 30));
