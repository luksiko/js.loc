//* интерполяция в ES6
let name = 'Ivan',
  age = 30,
  mail = 'ex@mai.ru';

document.write(`Пользователю ${name} ${age} лет и его email: ${mail}`);

function makeArray() {
  var items = [];

  for (let i = 0; i < 10; i++) {
    var item = function () {
      console.log(i);
    };
items.push(item);
  }

  return items;
}

var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();