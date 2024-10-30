var swiper = new Swiper('.slide_intro', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
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
