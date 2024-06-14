 // Header Sticky
 $(window).on('scroll', function() {
    if ($(this).scrollTop() >150){  
        $('.header-sticky').addClass("is-sticky");
    }
    else{
        $('.header-sticky').removeClass("is-sticky");
    }
});

// Dropdown
$('.navbar-light .dropdown').on('hover', function () {
    $(this).on('find', '.dropdown-menu').first().stop(true, true).slideDown(100);
}, function () {
    $(this).on('find', '.dropdown-menu').first().stop(true, true).slideUp(50)
});

// carousel

  document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#myCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000 
    });
  });