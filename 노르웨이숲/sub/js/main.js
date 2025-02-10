const mv = new Swiper('.mv', {

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




const bu = new Swiper('.bu', {

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1623: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },


});
