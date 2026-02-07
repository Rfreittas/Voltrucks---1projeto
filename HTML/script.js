
window.addEventListener("scroll", function () {
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 70)
})

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = 
document.querySelector("#carousel-vp");

let cCarouselInner = 
document.querySelector("#cCarousel-inner");
let carouselInnerWidth = 
cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

breakpoints: {
    0: {
      slidersPerView: 1,
    },
    768: {
      slidersPerView: 2,
    },
    1080: {
      slidersPerView: 3,
    },
  }
});
