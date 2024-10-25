var swiper = new Swiper('.slide_intro', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    centeredSlides: true,
    pagination: {
        el: '.slide_intro .swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.slide_intro', {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
        el: '.slide_intro .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
