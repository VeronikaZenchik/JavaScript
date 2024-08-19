// ТИПЫ ДАННЫЧ


// примитивные типы данных
const name = 'Bob' // string
const age = 28 // number
const isDeveloper = true / false // boolean
const power = 99999999999n //bigint
const sign = Symbol()
const something = undefined


// специальные типы данные 
const user = {   // Objects
  login: '123',
  password: 'qwerty'
}

const data = null


// Bigint

console.log(990000000000091 + 1); // 92
console.log(990000000000092 + 1); // 94

// если мы используем так, то первый консоль посчитает верно, а второй нет
//чтобы такого не было добавляем n

console.log(990000000000091n + 1n);
console.log(990000000000092n + 1n); 


// Boolean

const ageBoolean = 38
const isChild = ageBoolean < 18
console.log(isChild); // false



// проверка типов данных, оператор typoof

const message = '23'

console.log(typeof message);


const num = 111
const str = '222'
const result = num + str

console.log(result);
console.log(typeof result);

console.log(typeof ('16' / '8')); // плохая практика

// Преобразовпние типов

const ageString = 11

console.log(ageString);
console.log(String(ageString)); // преобразовывает в строку

// String() - преобразовывает в строку


const strNumber = '1000'
const numNumber = Number(strNumber) // преобразовывает в число

console.log(numNumber);
console.log(typeof numNumber);

//Number() - преобразовыает в число

// Boolean ()  - преобразовывает в true / false
// если числа то все будет true,  кроме 0, он будет false
// строки все будут true (ноль и проблел тоже true), кроме если она пустая - false

// Преобразуются в FALSE

console.log(Boolean(0) );
console.log(Boolean(NaN) );
console.log(Boolean('') );
console.log(Boolean(null) );
console.log(Boolean(undefined) );

//Все остальное преобразовывается в TRUE





