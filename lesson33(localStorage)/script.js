/*
localStorage.setItem('number', 1); // setItem - добавить данные

console.dir(localStorage.getItem('number')); // getItem - прочитать данные

localStorage.removeItem('number'); //removeItem
localStorage.clear(); // clear 
*/

window.addEventListener("DOMContentLoaded", function () {


   let checkbox = document.getElementById('rememberMe'),
      change = document.getElementById('change'),
      form = document.getElementsByTagName('form')[0];
// проверяем чекбокс в localStorage на true , то включаем его в верстке
   if (localStorage.getItem('isChecked') === "true") {
      checkbox.checked = true;
   }
   // проверяем bg и если да, красим в него форму
   if (localStorage.getItem('bg') === "changed") {
      form.style.backgroundColor = "#FF3829";
   }
   checkbox.addEventListener("click", function () {
      localStorage.setItem('isChecked', true);
   });

// клик на кнопку красит форму и пишет в localStorage
   change.addEventListener('click', function () {
      localStorage.setItem('bg', "changed");
      form.style.backgroundColor = "#FF3829";
   });

   // передача данных с localStorage
   let person = {
      name: "Alex",
      age: 23,
      tech: ["mobile", 'notebook']
   };

   let serializedPerson = JSON.stringify(person); // выравниваем обьект в json 
   localStorage.setItem(person.name, serializedPerson); // отправляем переменну в lS

   console.log(JSON.parse(localStorage.getItem(person.name))); //получаем обьект из lS json 


});