var $ = jQuery;

// top navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $(".top-navigation").addClass("scrolled");
        } else {
            $(".top-navigation").removeClass("scrolled");
        }
    }

    $(document).ready(function() {
        checkScroll();
        $(window).scroll(checkScroll);
    });
}
  
// slider function
var slider = () => {
    if ($(".hero-slider .custom-slider")) {
        $('.hero-slider .custom-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            dots: false,
            adaptiveHeight: true,
            // prevArrow: $('.slick-prev'),
            // nextArrow: $('.slick-next'),
            swipe: false,
            fade: true,
            cssEase: 'linear'
        });
    }
    if ($(".testimonials .custom-slider")) {
        $('.testimonials .custom-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 1000,
            dots: true,
            prevArrow: false,
            nextArrow: false,
            swipe: false,
        });
    }
}
  
// initialize the functions
windowScrolled();
  
$(document).ready(function() {
    slider();
});
  
$(window).resize(function() {
});
  
  