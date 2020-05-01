let btn = document.querySelector('.btn'),
  elem = document.querySelector('.box');
  let pos = 5;

function myAnimation() {


  let id = setInterval(frame, 10);
  function frame () {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(event) {
      if (event.target && event.target.matches('button.first')) {
        console.log("Hello!");
      }
    });