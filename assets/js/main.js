var mobHomSwiper = new Swiper(".mobHomSwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
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
        slidesPerGroup: 3,
        spaceBetween: 15,

      },
    },
  })