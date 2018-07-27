$(".single-item").slick({
    rows: 1,
    speed: 300,
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeAngleOffset: 60,
    touchThreshold: 12,
    infinite: true,
    dots: false,
    responsive: [{
    },
    {
        breakpoint: 2100,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 1800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 1500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 1100,
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
