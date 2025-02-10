$(".shop_hover2").hide()

$(".shop_hover1").mouseenter(function () {
  $(".shop_hover2").stop().fadeIn();
  $(".shop_hover1").stop().hide();
});

$(".shop_hover2").mouseleave(function () {
  $(".shop_hover1").stop().fadeIn();
  $(".shop_hover2").stop().hide();
});


$(".visit_hover2").hide()

$(".visit_hover1").mouseenter(function () {
  $(".visit_hover2").stop().fadeIn();
  $(".visit_hover1").stop().hide();
});

$(".visit_hover2").mouseleave(function () {
  $(".visit_hover1").stop().fadeIn();
  $(".visit_hover2").stop().hide();
});

/* 
$(document).ready(function () {
  $(".mv_txt1").mouseenter(function () {
    gsap.to(".mv_txt1", { rotation: -360 });
  });
}); */


$(".gnb_menu .mgnb_right>li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});


$(".util").click(function () {
  $(".gnb_menu").animate({
    "left": "0"
  },);
});

$(".menu_close").click(function () {
  $(".gnb_menu").animate({
    "left": "100%"
  },);
});
