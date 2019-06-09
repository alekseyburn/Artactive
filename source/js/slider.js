let slider = document.querySelector(".reviews__btn-wrapper");

$('.reviews__wrapper').slick({
  arrows: true,
  prevArrow: slider.querySelector('.slider__btn--prev'),
  nextArrow: slider.querySelector(".slider__btn--next"),
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});
