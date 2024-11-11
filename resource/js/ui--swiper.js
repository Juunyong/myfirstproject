var swiper = new Swiper('.slide_intro', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    // delay: 4000,
    //},
    centeredSlides: true,
    pagination: {
        el: '.slide_intro .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper('.slide__menu__selector', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoints: {
        600: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
/*
var swiper = new Swiper('.swiper-event', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.event_pagination',
        clickable: true,
    },
    effect: 'fade',
    // fade 이펙트 겹침 현상 시 사용
    fadeEffect: { crossFade: true },
    speed: 300,
    invert: false,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    /*
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 5,
            effect: 'slide',
            autoplay: {
                delay: 3000,
            },
        },
        /*
        1024: {
            slidesPerView: 4,
            spaceBetween: 5,
            on: {
                resize: function () {
                    swiper.update(); // 브라우저 크기가 변경될 때 슬라이더 업데이트
                },
            },
        },
});*/
