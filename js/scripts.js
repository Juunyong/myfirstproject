/* use GSAP */

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to('.c1', {
    y: 0,
    duration: 0.01,
    opacity: 1,
})
    .to('.c2', {
        y: 0,
        duration: 0.01,
        opacity: 1,
    })
    .to('.c3', {
        y: 0,
        duration: 0.01,
        opacity: 1,
    })
    .to('.c4', {
        y: 0,
        duration: 0.01,
        opacity: 1,
    })
    .to('.c5', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c6', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c7', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c8', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    });

/*
    for ( i = 0; i < 10; i++) {

    }*/
