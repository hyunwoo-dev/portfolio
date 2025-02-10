const mv = new Swiper('.mv', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  speed: 1000,

});

$(".play").hide();

$(".pause").click(function () {
  mv.autoplay.stop();
  $(".play").show();
  $(".pause").hide();
});

$(".play").click(function () {
  mv.autoplay.start();
  $(".pause").show();
  $(".play").hide();
});



const be = new Swiper('.be', {
  /* 
    slidesPerView: 4,
    spaceBetween: 100, */
  centeredSlides: true,
  loop: true,


  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    390: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    853: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 100,
    },

  },


  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});

const ev = new Swiper('.ev', {
  /*   slidesPerView: 2.5,
    spaceBetween: 230, */
  centeredSlides: true,
  loop: true,

  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 1.3,
      spaceBetween: 40,
    },

    634: {
      slidesPerView: 1.5,
      spaceBetween: 70,
    },
    753: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    923: {
      slidesPerView: 2.5,
      spaceBetween: 90,
    },
    1143: {
      slidesPerView: 2.5,
      spaceBetween: 90,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 130,
    },
    1400: {
      slidesPerView: 2.5,
      spaceBetween: 130,
    },
    1728: {
      slidesPerView: 2.5,
      spaceBetween: 200,
    },

  },




  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});