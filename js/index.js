$(document).ready(function() {
  $(".wrapper > ul > li").click(function() {
    var toscroll = $(window).scrollTop();
    $(".fullpage").toggleClass("active");
    $(".fullpage").css("transform", "translateY(" + toscroll +"px");
  });
 
  $("span.ex:before, span.ex:after, .fullpage").click(function() {
    $(".fullpage").removeClass("active");
    $(".fullpage").css("transform", "translateY(-120vh)");
  });
});

// pure js version

// document.querySelectorAll('.wrapper > ul > li').addEventListener('click' , function () {
//   var toscroll = $(window).scrollTop();
//   document.querySelector('.fullpage').css("transform", "translateY(" + toscroll +"px");
//   document.querySelector('.fullpage').toggleClass('active');
// })

// document.querySelectorAll('span.ex:before, span.ex:after').addEventListener('click' , function () {
//   document.querySelector('.fullpage').toggleClass('active');
// })