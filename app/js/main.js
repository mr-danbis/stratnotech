$.noConflict();
$(document).ready(function(){
  $(".reviews__slider").owlCarousel({
    items:1,
    margin: 50,
  });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText1 = document.getElementById("more1");
  var moreText2 = document.getElementById("more2");
  var moreText3 = document.getElementById("more3");
  var moreText4 = document.getElementById("more4");
  var btnText1 = document.getElementById("myBtn1");
  var btnText2 = document.getElementById("myBtn2");
  var btnText3 = document.getElementById("myBtn3");
  var btnText4 = document.getElementById("myBtn4");
  var btnText5 = document.getElementById("myBtn5");
  var btnText6 = document.getElementById("myBtn6");
  var btnText7 = document.getElementById("myBtn7");


  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText1.innerHTML = "Читать полностью";
    btnText2.innerHTML = "Читать полностью";
    btnText3.innerHTML = "Читать полностью";
    btnText4.innerHTML = "Читать полностью";
    btnText5.innerHTML = "Читать полностью";
    btnText6.innerHTML = "Читать полностью";
    btnText7.innerHTML = "Читать полностью";
    moreText1.style.display = "none";
    moreText2.style.display = "none";
    moreText3.style.display = "none";
    moreText4.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText1.innerHTML = "Читать меньше";
    btnText2.innerHTML = "Читать меньше";
    btnText3.innerHTML = "Читать меньше";
    btnText4.innerHTML = "Читать меньше";
    btnText5.innerHTML = "Читать меньше";
    btnText6.innerHTML = "Читать меньше";
    btnText7.innerHTML = "Читать меньше";
    moreText1.style.display = "inline";
    moreText2.style.display = "inline";
    moreText3.style.display = "inline";
    moreText4.style.display = "inline";
  }
}