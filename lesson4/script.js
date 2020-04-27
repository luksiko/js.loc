// let money = "Ваш бюджет на месяц?";

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц в $?", "300", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", year + "-" + month + "-" + day, "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в $?", "300", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay + '$');
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка!");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с депозита " + appData.monthIncome);
    }
  },
  optionalExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let a = prompt('Статьи необязательных расходов N' + i, '');
      appData.optionalExpenses[i] = a;

      // if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
      //   console.log("done");
      // } 
    }
  },
  chooseIncome: function () {
    for (let i = 1; i < 2; i++) {
      let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', "");
      appData.income = items.split(',');
      appData.income.push(prompt(" Может чтото еще ?", ""));
      appData.income.sort();
    
      // arr.forEach(function(item, i, mass) {
      //   console.log(i + ': ' + item + " (массив: " + mass + ")");
      // });

      if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
        console.log("items.done");
      } else {
        i = i - 1;
      }
    }

    appData.income.forEach(function(value, index ) {
     alert("Способ доп. заработка N" + (index + 1) + ': ' + value);
    });
  }
};

for(var prop in appData) {
  console.log("Наша программа включает в себя данные: " + prop + " = " + appData[prop]);
}


appData.chooseExpenses();
appData.optionalExpenses();
appData.checkSavings();
appData.detectDayBudget();
appData.detectLevel();
appData.chooseIncome();

