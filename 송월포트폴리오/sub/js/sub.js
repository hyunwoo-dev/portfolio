$(".tursm ul li").mouseenter(function () {
  $(this).addClass("active").siblings().removeClass("active");
});