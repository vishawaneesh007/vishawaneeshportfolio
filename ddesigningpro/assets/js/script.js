
window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('data-count');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }

  }

  animate();
});




$('.responsive').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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

$('.portfolio_container').slick({
  dots: true,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay:true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        // speed: 400,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


$('.slider-single1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay:true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav1')
    .on('init', function(event, slick) {
        $('.slider-nav1 .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        // speed: 400,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });

$('.slider-single1').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav1').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav1 .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav1 .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav1').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single1').slick('slickGoTo', goToSingleSlide);
});




$('.slider-single2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay:true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav2')
    .on('init', function(event, slick) {
        $('.slider-nav2 .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        // speed: 400,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });

$('.slider-single2').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav2').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav2 .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav2 .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav2').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single2').slick('slickGoTo', goToSingleSlide);
});



$('.slider-single3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay:true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav3')
    .on('init', function(event, slick) {
        $('.slider-nav3 .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        // speed: 400,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });

$('.slider-single3').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav3').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav3 .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav3 .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav3').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single3').slick('slickGoTo', goToSingleSlide);
});




$('.slider-single4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay:true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav4')
    .on('init', function(event, slick) {
        $('.slider-nav4 .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        // speed: 400,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });

$('.slider-single4').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav4').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav4 .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav4 .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav4').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single4').slick('slickGoTo', goToSingleSlide);
});
