(function ($) {
    ("use strict");

    /*-- banner-slider-Start --*/
    var indexBannerSlider = $(".index-banner-slider");
    if (indexBannerSlider.length) {
        $('.index-banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
            asNavFor: '.slider-nav-list',
        });
    }
    var sliderNavList = $(".slider-nav-list");
    if (sliderNavList.length) {
        $('.slider-nav-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.index-banner-slider',
            dots: false,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 4000,
        });
    }
    /*-- testimonials-slider-Start --*/
    var testimonialsSlider = $(".testimonials-slider-for");
    if (testimonialsSlider.length) {
        $('.testimonials-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
            asNavFor: '.testimonials-slider-nav',
        });
    }
    var testimonialsSliderNavList = $(".testimonials-slider-nav");
    if (testimonialsSliderNavList.length) {
        $('.testimonials-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.testimonials-slider-for',
            dots: false,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 4000,
        });
    }

    /*-- recent project slider --*/
    var recentPostSlider = $(".recent-project-slider");
    if (recentPostSlider.length) {
        $('.recent-project-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
        });
    }

})(jQuery);