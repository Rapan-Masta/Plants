$(".CS-comments-block").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  appendArrows: $(".CS-slider-buttons"),
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 1410,
      settings: {
        arrows: false,
      },
    },
  ],
});
