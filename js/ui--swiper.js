var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: true,
    pagination: {
        el: '.swiper .swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
