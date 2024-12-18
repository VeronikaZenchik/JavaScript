// Задача 1: Определение дня недели
// Напишите программу, которая по номеру дня недели (1–7) выводит его название.

// Solution:
let day = 3

switch (day) {
  case 1: 
  console.log("Понедельник");
    break;
  case 2: 
  console.log("Вторник");
    break;
  case 3: 
  console.log("Среда");
    break;
  case 4: 
  console.log("Четверг");
    break;
  case 5: 
  console.log("Пятница");
    break;
  case 6: 
  console.log("Суббота");
    break;
  case 7: 
  console.log("Воскресенье");
    break;
    default:
        console.log("Неизвестный день");
}


// Задача 2: Определение времени суток
// Напишите программу, которая по часам (0–23) определяет время суток:
// 6–11: "Утро"
// 12–17: "День"
// 18–23: "Вечер"
// 0–5: "Ночь"


// Solution:
let hour = 3

switch (true) {
  case hour >= 6 && hour <= 11: 
  console.log("Утро");
    break;
  case hour >= 12 && hour <= 17: 
  console.log("День");
    break;
  case hour >= 18 && hour <= 23: 
  console.log("Вечер");
    break;
  case hour >= 0 && hour <= 5: 
  console.log("Ночь");
    break;
    default:
        console.log("Неизвестное время");
}


// Задача 3: Определение месяца
// Напишите программу, которая по номеру месяца (1–12) выводит его название.

// Solution:
let month = 3

switch (month) {
  case 1: 
  console.log("Январь");
    break;
  case 2: 
  console.log("Февраль");
    break;
  case 3: 
  console.log("Март");
    break;
  case 4: 
  console.log("Апрель");
    break;
  case 5: 
  console.log("Май");
    break;
  case 6: 
  console.log("Июнь");
    break;
  case 7: 
  console.log("Июль");
  break;
  case 8: 
  console.log("Август");
    break;
  case 9: 
  console.log("Сентябрь");
    break;
  case 10: 
  console.log("Октябрь");
    break;
  case 11: 
  console.log("Ноябрь");
    break;
  case 12: 
  console.log("Декабрь");
    break;
    default:
        console.log("Неизвестный месяц");
}


// Задача 4: Определение сезона
// Напишите программу, которая по номеру месяца (1–12) определяет сезон:
// 12, 1, 2: "Зима"
// 3, 4, 5: "Весна"
// 6, 7, 8: "Лето"
// 9, 10, 11: "Осень"

// Solution:
let monthDay = 3

switch (true) {
  case monthDay === 12 || monthDay === 1 || monthDay === 2: 
  console.log("Зима");
    break;
  case monthDay === 3 || monthDay === 4 || monthDay === 5: 
  console.log("Весна");
    break;
  case monthDay === 6 || monthDay === 7 || monthDay === 8: 
  console.log("Лето");
    break;
  case monthDay === 9 || monthDay === 10 || monthDay === 11: 
  console.log("Осень");
    break;
    default:
        console.log("Неизвестный месяц");
}


// Задача 5: Определение оценки по баллам
// Напишите программу, которая по количеству баллов выдает оценку:
// 90 и выше: "Отлично"
// 70–89: "Хорошо"
// 50–69: "Удовлетворительно"
// Ниже 50: "Неудовлетворительно"

// Solution:
let mark = 3

switch (true) {
  case mark >= 90: 
  console.log("Отлично");
    break;
  case mark >= 70: 
  console.log("Хорошо");
    break;
  case mark >= 50: 
  console.log("Удовлетворительно");
    break;
  case mark <= 49: 
  console.log("Неудовлетворительно");
    break;
    default:
        console.log("Неизвестная оценка");
}


// Задача 6: Определение типа треугольника
// Напишите программу, которая по типу треугольника (1 — равносторонний, 2 — равнобедренный, 3 — разносторонний) выводит его описание.

// Solution:
let triangle = 3

switch (triangle) {
  case 1: 
  console.log("Равносторонний");
    break;
  case 2: 
  console.log("Равнобедренный");
    break;
  case 3: 
  console.log("Разносторонний");
    break;
    default:
        console.log("Неизвестное значение");
}


// Задача 7: Определение оператора
// Напишите программу, которая по символу оператора (+, -, *, /) выполняет соответствующую операцию с двумя числами.

// Solution:
let a = 5, b = 10;
let operation = "subtract";

switch (operation) {
    case "add":
        console.log(`Сумма: ${a + b}`);
        break;
    case "subtract":
        console.log(`Разность: ${a - b}`);
        break;
    case "multiply":
        console.log(`Произведение: ${a * b}`);
        break;
    case "division":
        console.log(`Деление: ${a / b}`);
        break;
    default:
        console.log("Неизвестная операция");
}


// Задача 8: Определение дня месяца
// Напишите программу, которая по номеру дня месяца (1–31) определяет, какая это часть месяца:
// 1–10: "Начало месяца"
// 11–20: "Середина месяца"
// 21–31: "Конец месяца"

// Solution:
let period = 3

switch (true) {
  case period >= 1 && period <= 10: 
  console.log("Начало месяца");
    break;
  case period >= 11 && period <= 20: 
  console.log("Середина месяцаеньСередина месяца");
    break;
  case period >= 21 && period <= 31: 
  console.log("Конец месяца");
    break;
    default:
        console.log("Неизвестное значение");
}


// Задача 9: Определение типа фигуры
// Напишите программу, которая по типу фигуры (1 — круг, 2 — квадрат, 3 — треугольник) выводит её название.

// Solution:
let figure = 3

switch (figure) {
  case 1: 
  console.log("Круг");
    break;
  case 2: 
  console.log("Квадрат");
    break;
  case 3: 
  console.log("Треугольник");
    break;
    default:
        console.log("Неизвестная фигура");
}


// Задача 10: Определение дня недели по строке
// Напишите программу, которая по строке с названием дня недели (например, "понедельник") выводит его номер.


// Solution:
let dayOfName = "Четверг"

switch (dayOfName) {
  case "Понедельник": 
  console.log(1);
    break;
  case "Вторник": 
  console.log(2);
    break;
  case "Среда": 
  console.log(3);
    break;
  case "Четверг": 
  console.log(4);
    break;
  case "Пятница": 
  console.log(5);
    break;
  case "Суббота": 
  console.log(6);
    break;
  case "Воскресенье": 
  console.log(7);
    break;
    default:
        console.log("Неизвестный день");
}


// Задача 11: Определение цвета светофора
// Напишите программу, которая по цвету светофора ("красный", "желтый", "зеленый") выводит соответствующее действие:
// "красный": "Стоп"
// "желтый": "Приготовьтесь"
// "зеленый": "Идите"


// Solution:
let color = "зеленый"

switch (color) {
  case "красный": 
  console.log("Стоп");
    break;
  case "желтый": 
  console.log("Приготовьтесь");
    break;
  case "зеленый": 
  console.log("Идите");
    break;
    default:
        console.log("Неизвестный цвет");
}


// Задача 12: Определение типа транспорта
// Напишите программу, которая по типу транспорта (1 — автомобиль, 2 — велосипед, 3 — мотоцикл) выводит его название.


// Solution:
let transport = 3

switch (transport) {
  case 1: 
  console.log("автомобиль");
    break;
  case 2: 
  console.log("велосипед");
    break;
  case 3: 
  console.log("мотоцикл");
    break;
    default:
        console.log("Неизвестный транспорт");
}