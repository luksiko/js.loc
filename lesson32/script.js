let drink = 0;


function shoot(arrow) {
  console.log('вы сделали выстрел...');

  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random > 0,1 ? resolve({}) : reject("вы промахнулись");
    }, 3000);
  });
  return promise;
}

function win() {
  console.log("Вы победили!");
  (drink == 1) ? buyBeer() : giveMoney();

}

function buyBeer() {
  console.log("Вы купили пиво!");
}

function giveMoney() {
  console.log("вам заплатили!");
}

function loose() {
  console.log("Вы проиграли!");
}
shoot({})
  .then(mark => console.log("Вы попали в цель"))
  .then(win)
  .catch(loose);