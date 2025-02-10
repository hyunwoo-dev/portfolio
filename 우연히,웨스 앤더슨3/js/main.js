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


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
});



const wes = new Swiper('.wes', {

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  loop: true,
  speed: 10000,


});

const wes1 = new Swiper('.wes1', {

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  loop: true,
  speed: 10000,


});

const journey_b = new Swiper('.journey_b', {

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  loop: true,
  speed: 8000,
  slidesPerView: "auto",
  spaceBetween: 61,



  /* 
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      819: {
        slidesPerView: "4",
        spaceBetween: 100,
      }, */



  /* }, */
});