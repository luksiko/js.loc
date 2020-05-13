// let num = 20;
// function showFirstMessage(text) { //имя должно быть глаголом+над чем производится действие
//     alert(text);
//     num = 10;
//   }

//   showFirstMessage("Hello World!");
// console.log(num);

// let calc = function(a,b) {
//   return (a + b);
// }

// let calc = (a,b) => a+b; //ES6 - новая возможность сокращать код(используется не во всех)

// console.log(calc(3,4));

// console.log(calc(8,4));

// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log("Я учу " + lang);
//   callback();
// }
// // learnJS("JavaScript", function() {
// //   console.log("Я прошёл 3й урок");
// // })
// function done() {
//   console.log("Я прошёл 3й урок");
// }

// learnJS("JavaScript", done);
let p = document.querySelector('body');
class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
  }
  sayHi() {
    let div = document.createElement('div');
    div.className = 'newDiv';
    p.insertAdjacentElement('beforeend', div);
    let param = `height:${this.height}px; 
    width${this.width}px; 
    background-color:${this.bg}; 
    fontSize:${this.fontSize}px; 
    textAlign:${this.textAlign};`;
    div.style.cssText = param;
    div.textContent = 'Это новый DIV';
  }
}
console.log(p);
let option = new Options(20, 20, "red", 40, "center");
option.sayHi();