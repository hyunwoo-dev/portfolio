$("#main #about .contact").click(function(){
  $(".contact_wrap").stop().fadeIn();
});

$(".close").click(function(){
  $(".contact_wrap").stop().fadeOut();
});





$(".contact_right .number .active").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img1").stop().show()  // img1만 표시
  $(".images > .img2, .images > .img3, .images > .img4, .images > .img5, .images > .img6, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number2").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img2").stop().show();  // img2만 표시
  $(".images > .img1, .images > .img3, .images > .img4, .images > .img5, .images > .img6, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number3").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img3").stop().show();  // img3만 표시
  $(".images > .img1, .images > .img2, .images > .img4, .images > .img5, .images > .img6, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number4").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img4").stop().show();  // img4만 표시
  $(".images > .img1, .images > .img2, .images > .img3, .images > .img5, .images > .img6, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number5").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img5").stop().show();  // img5만 표시
  $(".images > .img1, .images > .img2, .images > .img3, .images > .img4, .images > .img6, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number6").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img6").stop().show();  // img6만 표시
  $(".images > .img1, .images > .img2, .images > .img3, .images > .img4, .images > .img5, .images > .img7, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number7").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img7").stop().show();  // img7만 표시
  $(".images > .img1, .images > .img2, .images > .img3, .images > .img4, .images > .img5, .images > .img6, .images > .img8").stop().hide();  // 나머지 숨기기
});

$(".contact_right .number .number8").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
  $(".images > .img8").stop().show();  // img8만 표시
  $(".images > .img1, .images > .img2, .images > .img3, .images > .img4, .images > .img5, .images > .img6, .images > .img7").stop().hide();  // 나머지 숨기기
});












$("#header .util_3").click(function(){
  $(this).hide();
  $(".util_4").show();
  $("#header .gnb_m").stop().slideDown();
});



$("#header .util_4").click(function(){
  $(this).hide();
  $(".util_3").show();
  $("#header .gnb_m").stop().slideUp();

});


