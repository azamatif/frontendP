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


 // carousel slider JS
//  let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }
//     const newTransformValue = -currentSlide * 100 + '%';
//     document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue})`;
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }
// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         items: 1,
//         loop: true,
//         nav: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>']
//     });
// });