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

// function showThis(a, b){
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4,5);
// showThis(5,5);

let obj = {
  a:20,
  b:15,
  sum: function() {
    console.log(this);
    function shout() {
      console.log(this);
    }
    shout();
  }
}

obj.sum();

//* 1) Просто вызов функции - window/undefined
//* 2) Метод обьекта - this = объект 