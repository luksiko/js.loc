let startBtn = document.getElementById('start'),
  // tbl = document.querySelectorAll('.result-table > div:nth-child(even)'),

  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.getElementsByClassName('expenses-item'),
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  savingsInput = document.getElementById('savingsinput'),
  btn = [optionalExpensesBtn, expensesBtn, countBtn],

  d = new Date(),
  day = d.getDate(),
  month = d.getMonth() + 1,
  year = d.getFullYear(),
  money, time;

for (let i = 0; i < btn.length; i++) {
  // btn[i].style.opacity = '0.6';
  // btn[i].style.cursor = 'not-allowed';
}

startBtn.addEventListener('click', function () {
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.opacity = '';
    btn[i].style.cursor = '';
  }

  time = prompt("Введите дату в формате YYYY-MM-DD", year + "-" + month + "-" + day, "");
  money = +prompt("Ваш бюджет на месяц в $?", "300", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в $?", "300", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

let sum = 0;
expensesBtn.addEventListener('click', function () {

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
      
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function () {
  console.log(sum);

  if (appData.budget != undefined) {

    appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка!";
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(',');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
    savingsInput.style.display = 'none'; //! моя идея
  } else {
    appData.savings = true;
    savingsInput.style.display = 'block';
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  optionalExpenses: {},
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};