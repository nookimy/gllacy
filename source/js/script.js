$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    autoplay: true, // автопрокрутка
    autoplayTimeout: 5000, // задержка в мс
    autoplayHoverPause: false, // не останавливать при наведении
  });
});
