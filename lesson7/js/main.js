let start = document.getElementById('start'),
  tbl = document.querySelectorAll('.result-table > div:nth-child(even)'),
  inpt = document.getElementsByClassName('expenses-item'),
  btn = document.getElementsByTagName('button'),
  itemOpt = document.querySelectorAll('.optionalexpenses-item'),
  choseInc = document.querySelector('.choose-income'),
  savings = document.querySelector('#savings'),
  sum = document.querySelector('.choose-sum'),
  percent = document.querySelector('.choose-percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value'),
  btnExp = btn[0],
  btnOpt = btn[1],
  btnCnt = btn[2];

console.log(percent);