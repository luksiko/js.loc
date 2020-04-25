// let money = "Ваш бюджет на месяц?";

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

let money, time;
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function start() {
  money = +prompt("Ваш бюджет на месяц в $?", "300", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", year + "-" + month + "-" + day, "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в $?", "300", "");
  }
}

start();



function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}

chooseExpenses();

function optionalExpenses() {
  for (let i = 1; i < 4; i++) {
    let a = prompt('Статьи необязательных расходов N' + i, '');
    appData.optionalExpenses[i] = a;
    
    // if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
    //   console.log("done");
    // } 
  }
}

optionalExpenses();

// function detectDayBudget(a / 30) {
//   money = +prompt("Ваш бюджет на месяц в $?", "300", "");
// };

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ваш бюджет на сегодня: ' + appData.moneyPerDay + '$');


function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка!");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений"),
      percent = +prompt("Под какой процент?");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с депозита " + appData.monthIncome);
  }
}

checkSavings();