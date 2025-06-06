// Задание: Объект "Книга"
// Создайте объект book с свойствами:
// title (название)
// author (автор)
// year (год издания)
// Добавьте метод getInfo(), который возвращает строку:
// "Название: [title], Автор: [author], Год: [year]".


let book = {
  title: "Купи себе эти чертовы лилии",
  author: "Тара Шустер",
  year: 2022,
  getInfo(){
    return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
  }
}
console.log(book.getInfo());