$(".single-item").slick({
    rows: 1,
    speed: 300,

    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    dots: true,
    responsive: [{
    },
    {
        breakpoint: 2160,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 1280,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 720,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

// 2 - force slidesToScroll in centerMode
$(".single-item").slick('slickSetOption', 'slidesToScroll', 3, true);