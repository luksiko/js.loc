//* интерполяция в ES6
let name = 'Ivan',
  age = 30,
  mail = 'ex@mai.ru';

document.write(`Пользователю ${name} ${age} лет и его email: ${mail}`);

function makeArray() {
  let items = [];

  for (let i = 0; i < 10; i++) {
    let item = () => console.log(i);
    items.push(item);
  }

  return items;
}

var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();

// let fun = () => console.log(this);
// // fun();

let obj = {
  number: 5,
  sayNumber: function () {
    let say = () => console.log(this);
    say();
  }
};
obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
  let show = () => console.log(this);
  show();
});

var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(elements.map(({
  length
}) => length));

function calcOrDouble(number, basis = 2) {
  // basis = basis || 2; //* раньше в ES5 использовали так
  console.log(number * basis); // хотим чтобы вместо basis по умолчанию было 2
}
calcOrDouble(5, 3);
calcOrDouble(6);

class Rectangle {
  constructor(height, width = 20) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejornal', 'bloger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
console.log(a);
console.log(b);
console.log(c);
console.log(a+b+c);
}

let numbers = [2,5,7];
log(...numbers);
