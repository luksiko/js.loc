function calc() {

   let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personSum = 0,
      daysSum = 0,
      total = 0;

   totalValue.innerHTML = 0;

   persons.addEventListener('change', function () {
      personSum = this.value;
      total = (daysSum + personSum) * 4000;

      if (persons.value == '' || restDays.value == '') { // проверяем второй импут на заполнение
         totalValue.innerHTML = 0;
      } else {
         totalValue.innerHTML = total;
      }
   });

   restDays.addEventListener('change', function () {
      daysSum = this.value;
      total = (daysSum + personSum) * 4000;

      if (persons.value == '' || restDays.value == '') { //проверяем первый импут на заполнение
         totalValue.innerHTML = 0;
      } else {
         totalValue.innerHTML = total;
      }
   });

   place.addEventListener('change', function () {
      if (persons.value == '' || restDays.value == '') {
         totalValue.innerHTML = 0;
      } else {
         let a = total; // создаем техническую переменную, чтобы total не сумировалось
         // берем значение value из place селектора и умножаем на него тотал
         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
   });
}

module.exports = calc;