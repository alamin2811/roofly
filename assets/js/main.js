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

    var recentPostSlider = $(".recent-post-slider");
    if (recentPostSlider.length) {
        $('.recent-post-slider').slick({
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