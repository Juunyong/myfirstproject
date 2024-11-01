/*$(function () {
    $('.event-slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.event-slide-nav',
        prevArrow: $('#aro1_prev'), // 이전 화살표 모양 설정
        nextArrow: $('#aro1_next'),
    });
    $('.event-slide-nav').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.event-slide',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
            },
        ],
    });
    $('#aro1_pause').on('click', function () {
        $('.event-slide').slick('slickPause');
        $('.event-slide-nav').slick('slickPause');
    });

    var swiper = new Swiper('.instaSwiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 5, //슬라이드를 한번에 5개를 보여준다
        spaceBetween: 30,
        autoplay: true,
        autoplaySpeed: 2000,
        breakpoints: {
            340: {
                slidesPerView: 2, //브라우저가 1024보다 클 때
            },
            420: {
                slidesPerView: 3, //브라우저가 768보다 클 때
            },
            1024: {
                slidesPerView: 5, //브라우저가 1024보다 클 때
            },
        },
    });

    var menuSwiper = new Swiper('.menuSwiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        // observer: true,
        //loopAdditionalSlides : 1,
        //slidesPerView: 'auto',
        centeredSlides: true,
        allowTouchMove: false,
        //loopedSlides: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        // initialSlide: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // 화면의 넓이가 320px 이상일 때
            360: {
                slidesPerView: 1, //브라우저가 1024보다 클 때
            },
            621: {
                slidesPerView: 3, //브라우저가 768보다 클 때
            },
            1024: {
                slidesPerView: 5, //브라우저가 1024보다 클 때
            },
        },
        on: {
            init: function () {
                $('.section2 .menuSwiper .swiper-slide-active').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide.swiper-slide-duplicate-active').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide-prev').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide-next').addClass('animate');
            },
            slideChangeTransitionStart: function () {
                $('.section2 .menuSwiper .swiper-slide-active').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide.swiper-slide-duplicate-active').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide-prev').addClass('animate');
                $('.section2 .menuSwiper .swiper-slide-next').addClass('animate');
            },
            slideChangeTransitionEnd: function () {},
        },
    });

    var pagingSwiper = new Swiper('.menuSwiper', {
        //observer: true,
        //initialSlide: 0,
        // loopedSlides: 1,
        //loopAdditionalSlides : 1,
        //slidesPerView: 5,

        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination2',
            type: 'fraction',
        },
        breakpoints: {
            // 화면의 넓이가 320px 이상일 때
            360: {
                slidesPerView: 1, //브라우저가 1024보다 클 때
            },
            621: {
                slidesPerView: 3, //브라우저가 768보다 클 때
            },
            1024: {
                slidesPerView: 5, //브라우저가 1024보다 클 때
            },
        },
    });

    // const swiper = new Swiper('.menuSwiper', {
    //     loop: true,
    //     slidesPerView: 'auto',
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: true
    //     },
    //     centeredSlides: true,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     }
    //   });

    pagingSwiper.controller.control = menuSwiper;
    menuSwiper.controller.control = pagingSwiper;

    $('.swiper-slide-active').on(function () {
        $('.txt-box .hide').fadeIn(300);
    });

    $('.stop').on('click', function () {
        menuSwiper.autoplay.stop();
        return false;
    });
    $('.play').on('click', function () {
        menuSwiper.autoplay.start();
        return false;
    });

    $('.main-slide').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
    });
});
*/

function myFunction() {
    document.getElementById('menu__select-button').style.color = '#ffecd5';
}
