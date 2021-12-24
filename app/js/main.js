$.noConflict();
$(document).ready(function(){
  $(".slider").owlCarousel({
    items:1,
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
  } else{
    $('.sidebar').addClass('sidebar--hidden');
  }
});