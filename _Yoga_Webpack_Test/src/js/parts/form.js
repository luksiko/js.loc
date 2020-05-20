function form() {
   let form = document.querySelector('.main-form'),
      contactForm = document.querySelector('#form'),
      statusMessage = document.createElement('div');

   let sendForm = function (inputForm) {
      let message = {
         loading: 'Загрузка',
         sucsess: 'Спасибо! Скоро мы с вами свяжемся!',
         failure: 'Что-то пошло не так...'
      };

      let input = inputForm.getElementsByTagName('input');
      statusMessage.classList.add('status');

      inputForm.addEventListener('submit', function (event) {
         event.preventDefault();
         inputForm.appendChild(statusMessage);

         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');

         request.setRequestHeader('Content-type', 'applecation/json; charset=utf-8');

         let formData = new FormData(inputForm);

         let obj = {};
         formData.forEach(function (value, key) {
            obj[key] = value;
         });
         let json = JSON.stringify(obj);
         console.log(obj);

         request.send(json);
         request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
               statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
               statusMessage.innerHTML = message.sucsess;
            } else {
               statusMessage.innerHTML = message.failure;
            }
            setTimeout(closeModal, 5000);
         });
         for (let i = 0; i < input.length; i++) {
            input[i].value = '';
         }
      });

   };
   sendForm(form);
   sendForm(contactForm);
}


module.exports = form;