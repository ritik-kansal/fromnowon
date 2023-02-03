var mobHomSwiper = new Swiper(".mobHomSwiper", {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
    },
    slidesPerView: 1,
    spaceBetween: 5,
    loop: false,
    parallax: false,
    autoplay: 2000,
    // mousewheel: true,
    speed: 1500,
    freeMode: false,
    navigation: {
      nextEl: ".mobHomSwiperNext",
      prevEl: ".mobHomSwiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,

      },
    },
  })