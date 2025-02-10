$(".xi-check-circle").click(function () {
  $(".xi-check-circle").hide();
  $(".xi-check-circle1").show();
});

$(".xi-check-circle1").click(function () {
  $(".xi-check-circle1").hide();
  $(".xi-check-circle").show();
});


$(".depth2_bg, .depth2").hide();

$(".gnb>li").mouseenter(function () {
  $("#header").addClass("active")
  $(".depth2_bg").stop().slideDown();
  $(".depth2").stop().fadeIn();
});


$(".gnb>li").mouseleave(function () {
  $("#header").removeClass("active")
  $(".depth2_bg").stop().slideUp();
  $(".depth2").stop().fadeOut();
});


$(".menu_btn").click(function () {
  $(".menu").stop().fadeIn();
});

$(".menu_close").click(function () {
  $(".menu").stop().fadeOut();
});



$("#header .menu .menu_gnb>li").click(function () {
  $(this).find(".menu_depth2").stop().slideToggle();
  $(this).siblings().find(".menu_depth2").stop().slideUp();
});




$(".home_right2 img").click(function () {
  $(".right_depth").stop().slideToggle();
});