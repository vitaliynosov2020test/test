document.addEventListener("DOMContentLoaded", function() {

$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive:[  
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }

    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }

    },
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2
    }

    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1
      }

    }
  ]
});
	
});
