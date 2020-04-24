// let money = "Ваш бюджет на месяц?";

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

let money = +prompt("Ваш бюджет на месяц в $?", "300", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", year + "-" + month + "-" + day, "");


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

  if ( (typeof(a)) === 'string' &&   (typeof(a)) != null &&   (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
      console.log("done");
  appData.expenses[a] = b;
  } else {
    let a = prompt('Пожалуйста обязательную статью расходов в этом месяце', ''),
      b = prompt('А Во сколько обойдется?', '');
  }
};

appData.moneyPerDay = appData.budget / 30;

alert('Ваш бюджет на сегодня: ' + appData.moneyPerDay + '$');

if (appData.moneyPerDay < 100) {
 console.log("Минимальный уровень достатка"); 
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка"); 
 } else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка"); 
 } else {
  console.log("Произошла ошибка!");
}