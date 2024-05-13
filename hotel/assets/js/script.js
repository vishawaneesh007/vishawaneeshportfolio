
$('.itinerary_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  $('.see_tab_content_img_container_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
      
  document.querySelector('.slick-prev').innerHTML = "<img src='assets/images/home/arrow.svg' class='img-fluid'/>";
  document.querySelector('.slick-next').innerHTML = "<img src='assets/images/home/arrow.svg' class='img-fluid'/>";

