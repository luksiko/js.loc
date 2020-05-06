// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello " + this.name);
//   };
// }
// User.prototype.exit = function (name) {
//   console.log("Пользователь " + this.name + ' ушёл');
// };

// let ivan = new User('Ivan', 23),
//   alex = new User('Alex', 20);

// ivan.exit();
// 'use strict';
//! 1) 
/* function showThis(a, b) {
  console.log(this);

  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThis(4, 5);
showThis(5, 5); */

//! 2)
/* let obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);

    function shout() {
      console.log(this);
    }
    shout();
  }
};

obj.sum(); */

//! 4)

/* let user= {
  name: "John",
};

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith')); //* принимает аргументы в виде строки
console.log(sayName.apply(user, ['Snow', 'Smit'])); //* принимает в виде массива

function count(number) {
  return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10)); */

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log(this);
  this.style.backgroundColor = 'red';
  function showThis() {
    console.log(this);
  }
  showThis();
});

//* 1) Просто вызов функции - window/undefined
//* 2) Метод обьекта - this = объект 
//* 3) Коструктор (new) - this = новый созданный объект
//* 4) Указание конкретного контекста -call, apply, bind
