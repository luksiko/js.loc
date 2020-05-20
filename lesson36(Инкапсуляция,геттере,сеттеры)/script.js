//* Инкапсуляция - скрытие внутренностей программы от пользвателя.
//* закрытые коды и данные недоступны для тех частей программы, 
//* которые существуют вне объекта


/* function User(name, age) {
   this.name = name;

   // добавляем данные в обьект
   let userAge = age;

   // создаем Геттер для получения данных из обьекта
   this.getAge = function () {
      return userAge;
   };
   // создаем Сеттер с проверкой на введенные данные. Безопаснее
   this.setAge = function (age) {
      if (typeof age === 'number' && age > 0 && age < 110) {
         userAge = age;
      } else {
         console.log("Недопустимое значение");
      }
   };

   this.say = function () {
      console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
   };
}

let user = new User('Ivan', 111); */

//* можно легко изменить заданые параметры user и age, это опасно для програмы.
//* будем использовать set и get
/* user.name = 'Alex';
user.age = 30
user.say() */

/* console.log(user.name);
console.log(user.userAge);
user.say();
console.log(user.getAge());
user.setAge('30'); //Недопустимое значение (не 'number')
console.log(user.getAge()); //111 */

// ! преимущества использования МОДУЛЕЙ: 
// * 1. Независимость и самодостаточность\
// * 2. Чистота глобального пространства(область видимости) - 
// * нет переменных которые перебивают друг друга
// * 3. Модули можно использовать в других проектах, т.к. они независимые.active


//? Function Expresion
/* let number = 1;
(function () { // всё выражение в скобках = Function Expresion - анонимная функция
   let number = 2;
   console.log(number);
   return console.log(number + 3);
}());
console.log(number); */

// ? Обьектный интерфейс

// внутри переменной есть функции которые выполняются только внутри 
// и без обьявления получить доступ к ниим мы не можем
let user = (function () {
   let privat = function () {
      console.log("I'm privat");
   };
   let sayHello = function () {
      console.log("Hello!");
   };
   return {
      sayHello: sayHello
   };
}());

console.log(user);
console.log(user.sayHello());