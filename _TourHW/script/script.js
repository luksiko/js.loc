$(document).ready(function () {

   // ищем кнопки и добавляем действие на клик модалка и оверлей
   $('.main_nav>nav>ul>li:eq(1), .main_btna, .main_btn').on('click', function () {
      $('.overlay').fadeToggle('slow');
      $('.modal').slideDown('slow')
   });
   //убираем модалку и оверлей на крестик
   $('.close').on('click', function () {
      $('.overlay').fadeToggle('slow');
      $('.modal').slideUp('slow')
   });
});