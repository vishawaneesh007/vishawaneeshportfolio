$('.travel_testimonial_container').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
});



$('.travel_media_container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//   window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// const date = new Date();
// const yyyy = date.getFullYear();
// const mm = date.getMonth() + 1;
// const dd = date.getDate();
// // document.querySelector('#date').value = `${mm}-${dd}-${yyyy}`


// console.log(document.querySelector('#date').value);

// // console.log(`${yyyy}-${mm}-${dd}`);

