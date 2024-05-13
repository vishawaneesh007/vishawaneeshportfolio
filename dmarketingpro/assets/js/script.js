 
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            margin:18,
            autoplay:true,
            autoplayTimeout:3000,
            rewindNav:false,
            autoplayHoverPause:false,
            responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
    // window.onscroll = function() {myFunction()};

    //     var header = document.getElementById("myHeader");
    //     var sticky = header.offsetTop;

    //     function myFunction() {
    //     if (window.pageYOffset > sticky) {
    //        header.classList.add("sticky");
    //     } else {
    //        header.classList.remove("sticky");
    //     }
    //  }
        const header = document.querySelector("#myHeader");
            const toggleClass = "is-sticky";

            window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 250) {
                header.classList.add(toggleClass);

            } else {
                header.classList.remove(toggleClass);
            }
        });
        $(window).scroll(function(){
            if ($(this).scrollTop() > 10000000000) {
                $('.mega_area').addClass('show');
            } else {
                $('.mega_area').removeClass('show');
            }
        });
    
