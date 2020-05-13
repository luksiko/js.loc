// window.addEventListener('load');//!js загружается только когда вся страница загр.
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

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

  // * Timer 

  let dedline = '2020-05-11 22:10';

  let getTimeRemaining = endtime => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60)); //* Если необходимо считать только часы

    return {
      'total': t,
      hours,
      minutes,
      seconds
    };
  };

  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    let updateClock = () => {
      let t = getTimeRemaining(endtime);

      hours.textContent = ('0' + t.hours).slice(-2); //! просто обрезаем 2 симв.
      minutes.textContent = ('0' + t.minutes).slice(-2);
      seconds.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', dedline);

  // Modal

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
    for (let i = 0; i < descriptionBtn.length; i++) {
      descriptionBtn[i].classList.remove('more-splash');
    }
  };
  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', showModal);
  }

  more.addEventListener('click', showModal);
  close.addEventListener('click', closeModal);

});