const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 40,
  grabCursor: true,
  loop: true,

  breakpoints: {
    0:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});