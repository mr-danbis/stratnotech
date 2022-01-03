$.noConflict();
$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    margin: 50,
  });
});


//Sidebar
$('.header__sidebar-btn').on('click', function () {
  if ($('.sidebar').hasClass('sidebar--hidden')) {
    $('.sidebar').removeClass('sidebar--hidden');
  }
});

$('.sidebar__close-btn').on('click', function () {
  if ($('.sidebar').hasClass('sidebar--hidden')) {
    $('.sidebar').removeClass('sidebar--hidden');
  } else {
    $('.sidebar').addClass('sidebar--hidden');
  }
});


$('.sidebar__submenu').hide();

$(".header__menu-link--notactive").click(function (event) {
  event.preventDefault();
});

$('.sidebar__menu-link').click(function (event) {
  $(this).next().slideToggle(300);
});