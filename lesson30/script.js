/* let options = {
  width: 1366,
  height: 760,
  background: 'red',
  font: {
    size: '16px',
    color: '#fff'
  }
};
console.log(JSON.parse(JSON.stringify(options.font.size))); */

let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'current.json');
  request.setRequestHeader('Content-type', 'applecation/json; charset=utf-8');
  request.send();

  //* status // 404, 200, ...
  // statusText
  //respondText / responds
  //readyState

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      inputUsd.value = inputRub.value / data.usd;

    } else {
      inputUsd.value = " Чтото пошло не так!";
    }
  });
});
inputUsd.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'current.json');
  request.setRequestHeader('Content-type', 'applecation/json; charset=utf-8');
  request.send();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      inputRub.value = inputUsd.value * data.usd;

    } else {
      inputRub.value = " Чтото пошло не так!";
    }
  });
});