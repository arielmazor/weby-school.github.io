var isTestimonialsInit = false;

function initTestimonials() {
  if (!isTestimonialsInit && $(window).scrollTop() >= 1910) {
    $(".owl-carousel").owlCarousel({
      items: 1,
      singleItem: true,
      itemsScaleUp: true,
      slideSpeed: 500,
      // autoPlay: 3500,
      autoPlay: 500100,
      stopOnHover: true,
      dots: true,
      mouseDrag: false,
    });
  }
}

$(document).ready(function () {
  initTestimonials();
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1910) {
    initTestimonials();
  }
})