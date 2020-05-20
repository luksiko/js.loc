function tabs() {
   // переключение табов-вкладок
   let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

   let hideTabContent = (a) => {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show'); //* classList производит дествия с классами 
         tabContent[i].classList.add('hide');
      }
   };
   hideTabContent(1);

   let showTabContent = (b) => {
      if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.replace('hide', 'show');
      }
   };

   info.addEventListener('click', event => {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTabContent(0);
               showTabContent(i);
               break;
            }
         }
      }
   });
}

module.exports = tabs;