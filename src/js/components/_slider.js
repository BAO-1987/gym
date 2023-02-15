import Swiper, {
  Navigation,
} from 'swiper/bundle';

const classSlider = new Swiper(".offer-slider", {
  slidesPerView: 2.2,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // loop: true,
  // centeredSlides: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },


  // a11y: {
  //   prevSlideMessage: 'Попередній слайд',
  //   nextSlideMessage: 'Наступний слайд',
  // },

  navigation: {
    nextEl: ".offer__next",
    prevEl: ".offer__prev",
  },
});
