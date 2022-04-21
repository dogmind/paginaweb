$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0){
    console.log("scroll", scroll);
    $("header").addClass('scrolled');
    $(".logo img").removeAttr("src");
    $(".logo img").attr("src", "img/icono.png");
  } else{
    $("header").removeClass('scrolled');
    $(".logo img").removeAttr("src");
    $(".logo img").attr("src", "img/logo.jpg");
  }
})