$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: "linear",
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    dots: true,
                },
            },
        ],
    });


    $(".slider-slide img").on("click", function () {
        if ($(window).width() <= 1000) {
            $(".slider").slick("slickNext");
        }
    });
});
