//Initializing the slider
$.noConflict();
$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    margin: 60,
    URLhashListener: true,
    startPosition: 'URLHash'
  });
});


//Opening sidebar
$('.header__sidebar-btn').on('click', function () {
  if ($('.sidebar').hasClass('sidebar--hidden')) {
    $('.sidebar').removeClass('sidebar--hidden');
  }
});

//Closing sidebar
$('.sidebar__close-btn').on('click', function () {
  if ($('.sidebar').hasClass('sidebar--hidden')) {
    $('.sidebar').removeClass('sidebar--hidden');
  } else {
    $('.sidebar').addClass('sidebar--hidden');
  }
});

//Spoiler in sidebar
$('.sidebar__submenu').hide();
$(".header__menu-link--notactive").click(function (event) {
  event.preventDefault();
});
$('.sidebar__menu-link').click(function (event) {
  $(this).next().slideToggle(300);
});

//Closing sidebar beyond its borders
jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".sidebar"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".sidebar").addClass("sidebar--hidden");
    }
  });
});


//Opening and closing modal window
$('.map__write-btn').on('click', function () {
  $('.modal').removeClass('modal__hidden').addClass('modal__visible');
});
jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".modal"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".modal").addClass("modal__hidden");
    }
  });
});


// Active page
if (window.location.href == "https://stratnanotech-static.devitgso.iron.hostflyby.net/") {
  $('.header__menu-item--home').addClass('active-link');
}

// Changing color of logos in rewiews block in slider
// $('.reviews__title').on('click', function () {
//   var step;
//   for (step = 1; step < 8; step++) {
//     if ($('.owl-item:nth-child(' + step + ')').hasClass('active')) {
//       $('.slider-logos-link--' + step).addClass('active-logo');
//     } else {
//       $('.slider-logos-link--' + step).removeClass('active-logo');
//     }
//   }
// });