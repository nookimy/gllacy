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

$( ".product--hit" )
  .parent()
  .addClass( "catalog__item--hit" );

function initMap() {
  var coordinates = {lat: 59.938872, lng: 30.323037},

  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
  }),

  image = 'img/contacts/pin.svg',
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    animation: google.maps.Animation.BOUNCE
  });
}




