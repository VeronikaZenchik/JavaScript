// Методы у чисел

// toFixed - округляет число до указанного числа знаков после запятой

const price = 99.555

console.log('Округление до 1 знака после запятой:', price.toFixed()); 100
console.log('Округление до 1 знака после запятой:', price.toFixed(1)); 99.6
console.log('Округление до 1 знака после запятой:', price.toFixed(4)); 99.5550


console.log(100..toFixed(2)); // точки ты может применять для целых чисел, если число нецелое, то оборачиваем в скобки (5.2)


// toPrecision - позволяет округлить число до определенного знака, учет ведет с самой первой цифры

const num = 100.055

console.log(num.toPrecision(4)); // 100.1
console.log(num.toFixed(4)); // 100.0550


// toString -приводит число в формат строки

const number = 100
const numberAsString = number.toString()
console.log('Число:', number);

console.log('Число в виде строки:', numberAsString);


// Math

// Math.random() - получение случайного числа 0 до 1, не включая 1
console.log(Math.random());


// Math.abs() - абсолютное значение.  отбросится отрицательное значение
console.log(Math.abs(-1)); //1
console.log(Math.abs(100)); //100


// Math.pow - возведение в степень
console.log(Math.pow(2, 10));

// Math.sqrt - квадратный корень числа
console.log(Math.sqrt(16)); //4


// Math.cqrt - кубический корень числа
console.log(Math.cbrt(125)); //5

// Math.min - минимальное число
console.log(Math.min(1,2,5,-5)); // -5

// Math.max - максимальное число
console.log(Math.max(1,2,9,-5)); //9

// Math.round- до ближайшего целого 
console.log(Math.round(3.56)); // 4
console.log(Math.round(3.4)); // 3

// Math.floor - округляет вниз 
console.log(Math.floor(3.4)); // 3

// Math.ceil -до ближайшего целого вверх
console.log(Math.ceil(3.356)); // 4

// Math.trunc - округляет в меньшую сторону без учета знака
console.log(Math.trunc(3.56)); // 3

//parseInt -  используется для преобразования строки в целое число, если строка начинается со слов то вернет Nan
const numberString = "100px"
console.log(parseInt(numberString)); //100

//parseFloat - используется для преобразования строки в целое число, если у нас нецелое число
const numberFloat = "100.5px"
console.log(parseFloat(numberFloat)); //100.5



