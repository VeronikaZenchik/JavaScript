console.log('Привет!');
console.log(123);

// Однострочный комментарий

/*
многострочный
комментарий
*/

// переменные
// let, const, ver

let message = 'Привет' //нельзя получить к переменной до иницилизации
console.log(message);
message = 'Пока!'
console.log(message);

//var
// можно получить доступ к ней до объявления - undefined

const messageConst = 'Доброе утро' // нельзя менять

// можно объвлять сразу несколько переменных, но лучше иметь каждую свою
const 
name = 'Bob',
age = 28,
isDeveloper = true //можно также в одну строку написать

const admin = name
console.log(admin); // Bob

// если в самом начале документа JS прописать 'use strict' , весь код будет работать в строгом режиме



