function modal() {

   let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.getElementsByClassName('description-btn');

   function showModal() {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
   }

   let closeModal = () => {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
      statusMessage.innerHTML = '';
      for (let i = 0; i < descriptionBtn.length; i++) {
         descriptionBtn[i].classList.remove('more-splash');
      }
   };

   for (let i = 0; i < descriptionBtn.length; i++) {
      descriptionBtn[i].addEventListener('click', showModal);
   }

   more.addEventListener('click', showModal);
   close.addEventListener('click', closeModal);
}

module.exports = modal;