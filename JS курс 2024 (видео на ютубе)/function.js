const message = 'Глобальный привет!'

function logHello() {
  const message = 'Локальный привет!'
console.log(message);

for (let i = 0; i < 3; i++) {
  const message = `Итерация цмкла№${i}`
  console.log(message);
  
}
}

logHello()
console.log(message);

function logMessage(message, count) {
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
}

logMessage('Привет!', 2)

function sum(a, b) {
  return a + b
  // функции написанные после return не выполнятся
}

const result = sum(100, 1)
console.log(result);


function getAgeType(age) {
  if (typeof age !== 'number') { // если тип переменной не равент числу то ретерн
    return 'Возраст указан некорректно'
  } 
  if (age < 1 || age > 125) {
    return 'Такого возраста не может быть'
  }

  if (age < 18) {
    return 'Несовершеннолетний'
  }

  return 'Взрослый'
}

console.log(getAgeType(14));
