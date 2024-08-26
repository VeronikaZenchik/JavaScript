let count = 0

while(count < 10) {
  console.log(count);
  count++
}

do { //если нам в любом случае надо выполнить код
  console.log(count);
  count++
} while (count < 10)


  for (let i = 0; i < 4; i++) { //можем выносить из скобок лет и счетчик, но нужно осталвять точку с заятой
    alert(i) 
  }