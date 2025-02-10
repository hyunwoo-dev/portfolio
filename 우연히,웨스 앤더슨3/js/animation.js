gsap.fromTo(
  "h2 span", // 모든 span 요소 선택
  { opacity: 0, y: 30 }, // 초기 상태 (안 보이고 아래 위치)
  {
    opacity: 1,
    y: 0,
    stagger: 0.06, // 각 글자가 0.05초 간격으로 등장
    duration: 2, // 각 글자의 애니메이션 지속 시간
    ease: "power4.out" // 부드러운 애니메이션
  }
);




/* gsap.fromTo(
  ".img123, .artist_bottom", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".img123",
      start: "40% 80%",
      end: "400% 100%",
      scrub: 3,
      markers: true,
    },
  }
); */





gsap.fromTo(
  ".color1_right", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".color1_right",
      start: "100% 80%",
      end: "100% 100%",
      scrub: 3,
      /*      markers: true, */
    },
  }
);


gsap.fromTo(
  ".color2", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".color3",
      start: "-38% 80%",
      end: "-38% 100%",
      scrub: 3,
      /*     markers: true, */
    },
  }
);

gsap.fromTo(
  ".color3", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".color3",
      start: "80% 90%",
      end: "80% 100%",
      scrub: 3,
      /*       markers: true, */
    },
  }
);