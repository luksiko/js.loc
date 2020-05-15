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

      hours.textContent = ('0' + t.hours).slice(-2);
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

  // Form
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

  // Slider

  let slideIndex = 1, //параметр текущего слайда
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //   slides[i].style.display='none';   
    // }
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }

    }
  });
});