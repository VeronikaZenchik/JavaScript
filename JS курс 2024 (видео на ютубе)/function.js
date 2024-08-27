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

// return без данных будет undefined

// FUCTION DECLARATION
// функцию можно использвовать раньше, чем она объявлена в коде
// функцию можно перезаписать




// функцию можно вызвать след образом - FUCTION EXPRESSION

const logHello1 = function() {
  console.log('Hello!');
}
// такую фунцию нельзя переопределить(перезаписать), но если let то можно
// такую фцнкцитю нельзя ее использовать до ее объявления



// ARROW FUNCTION (стрклочная функция)

const logBye = (parametr) => {
  console.log('Привет!');
}

// нельзя до объявения в коде
// в стрельчной конструкции нет своего контекста - this
// монжо реализовать в одну строку
const sum2 = (a, b) => a + b
console.log(sum(1, 2));


const logMessage2 = (actionBefore, actionAfter) => {
  actionBefore()
  console.log('Hello!');
  actionAfter()
}

const fn1 = () => console.log('before');
const fn2 = () => console.log('after');
logMessage2(fn1, fn2) // наши констакты используем в качестве аргументов

// ответ будет
// before
// Hello!
// after


