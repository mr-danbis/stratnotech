//Initializing the slider
$.noConflict();
$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    margin: 1000,
    URLhashListener: true,
    startPosition: 'URLHash',
  });

  $(".slider").on("changed.owl.carousel", function(event) {
    var page = event.page.index;
    $(".slider-logos")
      .children(".slider-logos-link")
      .removeClass("active")
      .eq(page)
      .addClass("active");
  });
});


//Opening sidebar
$('.header__sidebar-btn').on('click', function () {
  if ($('.sidebar').hasClass('sidebar--hidden')) {
    $('.sidebar').removeClass('sidebar--hidden');
  }
});

//Closing sidebar
$('.close-button').on('click', function () {
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
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".modal"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    $(".modal").addClass("modal__hidden");
  }
});

$('.close-button--modal').on('click', function () {
  $(".modal").addClass("modal__hidden");
});

// var homePage = 'https://stratnanotech-static.devitgso.iron.hostflyby.net/';
var homePage = 'http://localhost:3000/';


// Active page
if (window.location.href == homePage) {
  $('.header__menu-item--home').addClass('active-link');
}
if (window.location.href == homePage + 'service.html') {
  $('.header__menu-item--service').addClass('active-link');
}
if (window.location.href == homePage + 'technologies.html') {
  $('.header__menu-item--technologies').addClass('active-link');
}
if (window.location.href == homePage + 'industries.html') {
  $('.header__menu-item--industries').addClass('active-link');
}
if (window.location.href == homePage + 'equipment.html') {
  $('.header__menu-item--equipment').addClass('active-link');
}
if (window.location.href == homePage + 'about.html') {
  $('.header__menu-item--about').addClass('active-link');
}
if (window.location.href == homePage + 'contacts.html') {
  $('.header__menu-item--contacts').addClass('active-link');
}


//Catalog view
$('.catalog__btn').on('click', function () {
  if ($('.catalog').hasClass('catalog--visible')) {
    $('.catalog').removeClass('catalog--visible');
  } else {
    $('.catalog').addClass('catalog--visible');
  }

  if ($('.catalog__btn-img').hasClass('catalog__btn-img--translate')) {
    $('.catalog__btn-img').removeClass('catalog__btn-img--translate');
  } else {
    $('.catalog__btn-img').addClass('catalog__btn-img--translate');
  }
});


//Equipment filter
$('.equipment-list').hide();
$('.equipment-btn').click(function (event) {
  $(this).next().slideToggle(200);
});

$('.equipment__role-btn').on('click', function () {
  if ($('.equipment-btn__icon-1').hasClass('equipment-btn__icon--translate')) {
    $('.equipment-btn__icon-1').removeClass('equipment-btn__icon--translate');
  } else {
    $('.equipment-btn__icon-1').addClass('equipment-btn__icon--translate');
  }
});

$('.equipment__technologies-btn').on('click', function () {
  if ($('.equipment-btn__icon-2').hasClass('equipment-btn__icon--translate')) {
    $('.equipment-btn__icon-2').removeClass('equipment-btn__icon--translate');
  } else {
    $('.equipment-btn__icon-2').addClass('equipment-btn__icon--translate');
  }
});



//See more in techonogies block
$('.seeMore').on('click', function () {
  if ($('.technologies__link:last-child').hasClass('technologies__link--visible')) {
    $('.technologies__link:last-child').removeClass('technologies__link--visible');
    $(this).text('Показать ещё');
  } else {
    $('.technologies__link:last-child').addClass('technologies__link--visible');
    $(this).text('Скрыть');
  }
});


//Changing some moments in others pages
if (window.location.href !== homePage) {
  $('.close-button--modal').css('display', 'none');
  $('.map__yandex').css('height', 'calc(260px + 540 * ((100vw - 270px) / 1650))');
}

$('.equipment__view-btn:first-child').on('click', function () {
  if ($('.equipment__list').hasClass('equipment__list-row')) {
    $('.equipment__list').removeClass('equipment__list-row');
    $('.equipment__list').addClass('equipment__list-grid');
  }
  if ($('.equipment__item-title').hasClass('equipment__item-title-row')) {
    $('.equipment__item-title').removeClass('equipment__item-title-row');
    $('.equipment__item-title').addClass('equipment__item-title-grid');
  }
  $('.equipment__item-bottom').show();
  $('.equipment__item-info>.equipment__item-text').hide();

});

$('.equipment__view-btn:nth-child(2)').on('click', function () {
  if ($('.equipment__list').hasClass('equipment__list-grid')) {
    $('.equipment__list').removeClass('equipment__list-grid');
    $('.equipment__list').addClass('equipment__list-row');
  }
  if ($('.equipment__item-title').hasClass('equipment__item-title-grid')) {
    $('.equipment__item-title').removeClass('equipment__item-title-grid');
    $('.equipment__item-title').addClass('equipment__item-title-row');
  }
  $('.equipment__item-bottom').hide();
  $('.equipment__item-info>.equipment__item-text').show();

});