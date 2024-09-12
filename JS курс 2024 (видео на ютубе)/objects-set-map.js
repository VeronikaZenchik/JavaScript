// Object.keys() - перебор ключей объекты

// Object.values() - перебор значений объека

// Object.entries() - перебор пар объекта ключ-значение

const user = {
  name: 'Bob',
  age: 28,
  city: 'Grodno',
}

const userKeys = Object.keys(user)
const userValue = Object.values(user)
const userEntries = Object.entries(user)

console.log('ObjectKeys:', userKeys);
console.log('ObjectValues:', userValue);
console.log('ObjectEntries:', userEntries);


// Object.fromEntries - обратно из массива меняет на объект


// Коллекция MAP
// создание / синтаксис
const data = new Map()

// set - Добавление элемена в NAP коллецкию 
data.set(1, 'drgdrgdr') // первым аргументом передается имя ключа(может быть любым типом данных), второй аргумент устанавливаемое ключу значение(может быть любым типом данным)
data.set('1', 'rsdfdf')

console.log(data);

// get - получение эдемента из MAP коллекции
console.log(data.get(1));

// has -  проверка на существование эдемента в MAP коллекции
console.log(data.has('name')); //false

// delete - удаление эементов из MAP коллецкции
//data.delete('name')

// clear - очищает всю коллекцию целиком
// data.clear()

// size -  обращаемся без круглых скобок, размер MAP коллекции
console.log(data.size);

// для перебора MAP коллецкции можно также использовать - методы keys, values, entries, forEach
//data.keys()
//data.values()
//data.entries()



// Коллекция SET - хранит только значения, при том каждое значение может быть только в единственном экземпляре, только уникальные значени!
// синтаксис
const set = new Set()

const setExp = new Set([1, 2, 2, 2, 3])
console.log(setExp); // 1,2,3

// add - используется для добавления значения в коллецкцию SET
setExp.add(15)

console.log(setExp);

// Методы  SET - delete (удаляет), has(проверяет наличие значени), clear (полностью чистит коллецкию), size(размер коллекции)

// SET  использует теже методы перебора что и MAP  (keys, entries, forEach)
