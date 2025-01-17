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
                breakpoint: 1024, // Для планшетів та мобільних
                settings: {
                    dots: true, // Додаємо крапки навігації для планшетних пристроїв
                },
            },
            {
                breakpoint: 768, // Для мобільних телефонів
                settings: {
                    dots: true, // Додаємо крапки навігації для мобільних пристроїв
                },
            },
        ],
    });

    // Перехід до наступного слайду при кліку на зображення для мобільних і планшетів
    $(".slider-slide img").on("click", function () {
        if ($(window).width() <= 1024) {
            $(".slider").slick("slickNext");
        }
    });

    // Обновлюємо слайдер при зміні розміру вікна
    $(window).resize(function () {
        if ($(window).width() <= 1024) {
            // Перезапускаємо слайдер, якщо ширина вікна стала менше 1024px
            $(".slider").slick("slickSetOption", "dots", true, true);
        } else {
            // Відключаємо крапки на великих екранах
            $(".slider").slick("slickSetOption", "dots", false, true);
        }
    });
});
