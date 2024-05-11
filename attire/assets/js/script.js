$('.product_details_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });
  
  $('.product_details_img_all_container')
    .on('init', function(event, slick) {
      $('.product_details_img_all_container .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
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
  
  $('.product_details_img').on('afterChange', function(event, slick, currentSlide) {
    $('.product_details_img_all_container').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.product_details_img_all_container .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.product_details_img_all_container .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });
  
  $('.product_details_img_all_container').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
  
    $('.product_details_img').slick('slickGoTo', goToSingleSlide);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Initial References
  let imageContainer = document.getElementById("image-container");
  let productImage = document.getElementById("product-image");
  let overlay = document.getElementById("overlay");
  let mouseOverlay = document.getElementById("mouse-overlay");
  
  //events object(stores events for touch,mouse)
  let events = {
    mouse: {
      move: "mousemove",
    },
    touch: {
      move: "touchmove",
    },
  };
  
  //initially blank
  let deviceType = "";
  
  //Checks for device type
  function isTouchDevice() {
    try {
      //We try to create touch event (it would fail for desktops and throw error)
      deviceType = "touch";
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      deviceType = "mouse";
      return false;
    }
  }
  
  //hides overlay
  const hideElement = () => {
    overlay.style.display = "none";
    mouseOverlay.style.display = "none";
  };
  
  //Check device so that deviceType variable is set to touch or mouse
  isTouchDevice();
  
  /*In addEventListener we use the events object to set the event so deviceType would be set to touch or mouse since we called 'isTouchDevice()' above
  E.g:
  if deviceType = "mouse" => the statement for event would be events[mouse].move which equals to mousemove.
  if deviceType = "touch" => the statement for event would be events[touch].move which equals to touchstart.
  */
  
  imageContainer.addEventListener(events[deviceType].move, (e) => {
    //Try, catch to avoid any errors for touch screens
    try {
      //pageX and pageY return the position of client's cursor from top left pf screen
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) { }
    //get image height and width
    let imageWidth = imageContainer.offsetWidth;
    let imageHeight = imageContainer.offsetHeight;
  
    //check if mouse goes out of image container
    if (
      imageWidth - (x - imageContainer.offsetLeft) < 15 ||
      x - imageContainer.offsetLeft < 15 ||
      imageHeight - (y - imageContainer.offsetTop) < 15 ||
      y - imageContainer.offsetTop < 15
    ) {
      hideElement();
    } else {
      overlay.style.display = "block";
      mouseOverlay.style.display = "inline-block";
    }
  
    var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(4) * 100;
    var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(4) * 100;
  
    //set background position to above obtained values
    overlay.style.backgroundPosition = posX + "%" + posY + "%";
  
    //move the overlay with cursor
    mouseOverlay.style.top = y + "px";
    mouseOverlay.style.left = x + "px";
  });













function increaseValue() {
    var value = parseInt(document.getElementById('numberpace').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberpace').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('numberpace').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numberpace').value = value;
  }