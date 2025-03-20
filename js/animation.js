// 메인 비디오 및 텍스트 애니메이션 실행
function showMainVideo() {
  gsap.to(".parallax__item__video", { opacity: 1, duration: 1.2 }); // 동영상 서서히 나타남
  gsap.fromTo(".parallax__item__text h2 span",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.5 }
  ); // 글자가 한 글자씩 위로 올라오면서 나타남
}

// 로딩 섹션이 없어졌으므로, 페이지 로드 후 바로 실행
document.addEventListener("DOMContentLoaded", () => {
  showMainVideo();
});

// 메인 섹션의 확대 및 사라지는 애니메이션
const ani6 = gsap.timeline();
ani6.to(".main_visual .parallax__item__text", { scale: 3, duration: 7 })
  .to(".main_visual .parallax__item__text", { autoAlpha: 0 });

ScrollTrigger.create({
  animation: ani6,
  trigger: ".main_visual",
  start: "top top",
  end: "bottom bottom",
  scrub: 1.2,
  pin: true,
  anticipatePin: 1,
});




gsap.to([".about", ".project"], {
  backgroundColor: "#f5f5f5", // 최종 배경색 (흰색)
  color: "#000", // 텍스트 색상 변경
  duration: 3, // 전환 시간
  ease: "power2.inOut", // 부드러운 전환
  scrollTrigger: {
    trigger: ".project", // 포트폴리오 섹션이 시작될 때
    start: "top 90%", // 트리거 시작 위치
    end: "top 50%", // 전환 완료 위치
    scrub: true, // 스크롤 진행에 따라 서서히 변화
  }
});




// 로고 색상 변경 (SVG 로고)
gsap.to("#header img", {
  filter: "invert(1) brightness(0)", // 흰색 로고 -> 검은색 로고로 변경
  scrollTrigger: {
    trigger: ".project", // project 섹션이 시작될 때
    start: "top 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false        // 마커 확인
  }
});

// contact 텍스트 색상 변경
gsap.to("#header .contact p", {
  color: "#000", // 텍스트 색상 검은색으로 변경
  scrollTrigger: {
    trigger: ".project", // .project 섹션이 시작될 때
    start: "top 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false         // 마커를 통해 트리거 확인
  }
});

// 원래 상태로 돌아가는 코드 (로고와 contact 색상 복귀)
gsap.to("#header img", {
  filter: "none",  // 로고 색상 원래대로 복귀
  scrollTrigger: {
    trigger: ".about",  // .about 섹션으로 올라가면
    start: "top 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,
    reverse: true        // reverse로 원래 상태로 돌아가기
  }
});

gsap.to("#header .contact p", {
  color: "#fff", // contact 텍스트 색상 흰색으로 복귀
  scrollTrigger: {
    trigger: ".about",  // .about 섹션으로 올라가면
    start: "top 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,
    reverse: true        // reverse로 원래 상태로 돌아가기
  }
});




gsap.fromTo(
  ".project_top", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".project_top",
      start: "10% 50%",
      end: "100% 100%",
      scrub: 3,
      markers: false,
    },
  }
);


gsap.fromTo(
  ".project_bottom", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: ".project_bottom",
      start: "5% 80%",
      end: "100% 100%",
      scrub: 3,
      markers: false,
    },
  }
);









gsap.matchMedia().add("(max-width: 1030px)", () => {
  gsap.fromTo(
    ".project_top", // 모바일에서 적용할 대상
    { opacity: 0, y: 100 }, // 초기상태
    {
      opacity: 1, // 적용할 상태
      y: 0, // 적용할 상태
      scrollTrigger: {
        trigger: ".project_top",
        start: "-30% 80%", // 모바일에서 start 값 수정
        end: "100% 100%", // 모바일에서 end 값 수정
        scrub: 3,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    ".project_bottom", // 모바일에서 적용할 대상
    { opacity: 0, y: 100 }, // 초기상태
    {
      opacity: 1, // 적용할 상태
      y: 0, // 적용할 상태
      scrollTrigger: {
        trigger: ".project_bottom",
        start: "-100% 80%", // 모바일에서 start 값 수정
        end: "100% 100%", // 모바일에서 end 값 수정
        scrub: 3,
        markers: false,
      },
    }
  );
});


















gsap.fromTo(
  ".project h1", // h1 요소에 적용할 애니메이션
  {
    opacity: 0,     // 처음에 텍스트는 보이지 않게
    scale: 7,       // 텍스트가 매우 크게 시작
    y: 100,         // 아래에서 올라오는 효과
  },
  {
    opacity: 1,     // 텍스트가 완전히 나타날 때
    scale: 1,       // 최종적으로 원래 크기로 축소
    y: 0,           // 원래 위치로 돌아감
    scrollTrigger: {
      trigger: ".project h1", // 스크롤 트리거는 h1 요소
      start: "80% 80%",       // 시작 위치: 화면의 80% 지점에서 시작
      end: "top 30%",         // 끝 위치: 화면의 30% 지점에서 끝
      scrub: 2,               // 스크롤에 맞춰 애니메이션 부드럽게 진행
      markers: false,          // 마커 숨기기
    }
  }
);






gsap.to(".skill1", {
  backgroundColor: "#000610", // skill1이 skill 섹션과 동일한 색상으로 변경
  duration: 3,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skill",
    start: "top bottom",
    end: "top top",
    scrub: true,
  }
});

gsap.to(".skill", {
  backgroundColor: "#000610", // skill 섹션이 skill1의 색상으로 변경
  duration: 3,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skill",
    start: "top bottom",
    end: "top top",
    scrub: true,
  }
});







const ani17 = gsap.timeline();
ani17.from(".skill .parallax__item__video1", {
  autoAlpha: 1,
  scale: 0.1,
  width: "100vw",
  height: "100vh",


});

ScrollTrigger.create({
  animation: ani17,
  trigger: ".skill",  // 트리거 요소
  start: "top top",  // 페이지의 상단부터 애니메이션 시작
  end: "+=1000",  // 섹션이 끝날 때 애니메이션 종료
  scrub: true,  // 스크롤에 따라 애니메이션이 진행되도록 (더 천천히)
  pin: true,  // 해당 섹션을 고정
  anticipatePin: 1,  // 핀 효과 부드럽게
  /* markers: true, */  // 디버깅용 마커
});

















































gsap.to("#header img", {
  filter: "invert(0) brightness(1)", // 검은 로고 -> 흰색 로고로 변경
  scrollTrigger: {
    trigger: ".skill1", // project 섹션이 시작될 때
    start: "bottom 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false        // 마커 확인
  }
});

// contact 텍스트 색상 변경
gsap.to("#header .contact p", {
  color: "#fff", // 텍스트 색상 검은색으로 변경
  scrollTrigger: {
    trigger: ".skill1", // .project 섹션이 시작될 때
    start: "bottom 90%",    // 시작 위치
    end: "top 50%",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false         // 마커를 통해 트리거 확인
  }
});


gsap.to("#header img", {
  filter: "invert(1) brightness(0)", // 검은 로고 -> 흰색 로고로 변경
  scrollTrigger: {
    trigger: ".skill1", // project 섹션이 시작될 때
    start: "-170% 90%",    // 시작 위치
    end: "bottom bottom",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false        // 마커 확인
  }
});

// contact 텍스트 색상 변경
gsap.to("#header .contact p", {
  color: "#000", // 텍스트 색상 검은색으로 변경
  scrollTrigger: {
    trigger: ".skill1", // .project 섹션이 시작될 때
    start: "-170% 90%",    // 시작 위치
    end: "bottom bottom",      // 끝 위치
    scrub: true,         // 스크롤에 따라 애니메이션 진행
    markers: false         // 마커를 통해 트리거 확인
  }
});