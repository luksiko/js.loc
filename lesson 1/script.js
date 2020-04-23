// let money = "Ваш бюджет на месяц?";

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

let money = prompt("Ваш бюджет на месяц в $?", "300", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", year + "-" + month + "-" + day, "");

let article = prompt('Введите обязательную статью расходов в этом месяце', "Статья", "");
let cost = prompt('Во сколько обойдется?', "300$", "");

let appData = {
  bujet: money,
  date: time,
  expenses: {
    article : cost
    },
  optionalExpenses: null,
  income: null,
  savings: false,
};
alert('Ваш бюджет на сегодня: '+money/30+'$');