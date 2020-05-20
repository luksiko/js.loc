$(document).ready(function () {
   $('.list-item:first').hover(function () {
      $(this).toggleClass('active');
   });
   // обработчик событий клик на третьей кнопке, скрывает четную картинку
   $('.list-item:eq(2)').on('click', function () {
      $('.image:even').fadeToggle('slow')
   });

   $('.list-item:eq(4)').on('click', function () {
      $('.image:odd').animate({
         opacity: 'toggle',
         height: 'toggle'
      }, 3000);
   });
});

// document.querySelectorAll('.list-item').forEach(); //* == $('.list-item')
// .classList
// addEventListener = .on()
// fetch = $.ajax
// .animate = Element.animate

//!_______________________________!//
//! КАК ВЫУЧИТЬ Angular !//

//! 1) node.js -> npm
//! 2) TypeScript
//! 3) Webpack
//! 4) MVC - model view controler
//! 5) Angular

//? Reack ?//
//! 1) node.js -> npm
//? 2) Babel
//? 3) JSX - препроцессор
//! 4) Webpack
//? 5) React


//* Vue.js *//
//! 1) node.js -> npm
//? 2) Babel
//! 3) Webpack
//* 4) Vue.js 

