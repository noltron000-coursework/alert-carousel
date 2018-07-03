$(".single-item").slick({
    rows: 4,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
    },
    {
        breakpoint: 2160,
        settings: {
            rows: 3,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 1024,
        settings: {
            rows: 2,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 480,
        settings: {
            rows: 1,
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