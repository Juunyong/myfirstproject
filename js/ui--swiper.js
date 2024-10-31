var swiper = new Swiper('.slide_intro', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
    },
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
    autoplay: false,
});

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
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
            effect: 'slide',
            autoplay: {
                delay: 3000,
            },
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});
