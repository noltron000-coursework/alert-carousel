$(".single-item").slick({
    rows: 1,
    speed: 300,

    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    dots: false,
    responsive: [{
    },
    {
        breakpoint: 2160,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 1920,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 1600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 1080,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

// 2 - force slidesToScroll in centerMode
$(".single-item").slick('slickSetOption', 'slidesToScroll', 3, true);