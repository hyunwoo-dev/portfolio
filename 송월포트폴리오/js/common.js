$(".depth2, .depth2_bg, .language li:nth-child(2)").hide()

$("#header .gnb, .language, .search, .language").mouseenter(function () {
  $("#header").addClass("active")
  $(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().slideDown();
  $(".language li:nth-child(2)").stop().fadeIn();
})

$("#header .gnb, .language, .search, .language").mouseleave(function () {
  $("#header").removeClass("active")
  $(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().slideUp();
  $(".language li:nth-child(2)").stop().fadeOut();
})

$(".search_2").hide();

$(".search").click(function () {
  $(".search_2").stop().fadeIn();
})
$(".search_close").click(function () {
  $(".search_2").stop().fadeOut();
})




$("#header .menu .menu_gnb>li").click(function () {
  $(this).find(".menu_depth2").stop().slideToggle();
  $(this).siblings().find(".menu_depth2").stop().slideUp();
});

$(".menu_btn").click(function () {
  $(".menu").stop().fadeIn();
});

$(".menu_close").click(function () {
  $(".menu").stop().fadeOut();
});
