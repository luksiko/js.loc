let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.wrapper .heart'), // ! можно делать вложеность
  oneHeart = document.querySelector('.heart'), // TODO берет первый элемент
  wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; 1 < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) { //* не обязательно использвоать свойства 2 и 3 (i, hearts)
//   item.style.backgroundColor = 'blue';
// }); // ! один результат с циклом выше. Но этот цикл более локаничен при больших значениях


let div = document.createElement('div'),
  text = document.createTextNode('я был тут');

div.classList.add('black'); //TODO classList часто испольуется метот togle, для переключения классов в зависимости от действия на стр.

// document.body.appendChild(div);
// wrapper.appendChild(div); // поместили в родителя

// div.innerHTML = '<h1>Hello World!</h1>' //* HTML 
div.textContent = 'Hello People!'; //* только текст
document.body.insertBefore(div, circle[0]);
wrapper.removeChild(heart[0]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);