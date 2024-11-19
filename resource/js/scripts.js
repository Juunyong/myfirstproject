/* use GSAP */

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to('.w1', {
    y: 0,
    duration: 0.7,
    opacity: 1,
})
    .to('.w2', {
        y: 0,
        duration: 0.7,
        opacity: 1,
    })
    .to('.w3', {
        y: 0,
        duration: 0.7,
        opacity: 1,
    })
    .to('.hero__bottom-lime-first', {
        y: 0,
        duration: 0.5,
    })

    .to(
        '.hero__bottom-lime-last',
        {
            y: 0,
            duration: 0.7,
        },
        '-=0.2'
    )
    .to(
        '.hero__pepper',
        {
            x: 0,
            y: -170,
            duration: 0.7,
        },
        '-=0.2'
    );
/*
 
    .to('.head__pepper', {
        duration: 2,
    });
*/
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.head-section__text', // 객체 기준 범위
        start: '60% 60%',
        end: '80% 80%',
        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
        once: true,
    },
});

tl2.to('.line1', {
    y: 0,
    duration: 1,
    opacity: 1,
})
    .to('.line2', {
        y: 0,
        duration: 10,
        opacity: 1,
    })
    .to('.line3', {
        y: 0,
        duration: 10,
        opacity: 1,
    })
    .to('.line4', {
        y: 0,
        duration: 10,
        opacity: 1,
    })
    .to('.line5', {
        y: 0,
        duration: 10,
        opacity: 1,
    });

/*
    for ( i = 0; i < 10; i++) {

    }*/
/*
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.footer__container', // 객체 기준 범위
        start: '20% 50%', // 시작 위치
        end: 'bottom bottom', // 끝 위치
        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
        markers: true, // 개발 가이드선
        once: true,
    },
});

tl3.to('.fc1', {
    y: 0,
    duration: 0.2,
    opacity: 1,
})
    .to('.fc2', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc3', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc4', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc5', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc11', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc12', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc13', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc14', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc15', {
        y: 0,
        duration: 2,
        opacity: 1,
    })
    .to('.fc16', {
        y: 0,
        duration: 2,
        opacity: 1,
    });
*/
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.head-section__text', // 객체 기준 범위
        start: '20% 20%', // 시작 위치
        end: '30% 30%', // 끝 위치
        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
        once: true,
    },
});

tl4.to('.line11', {
    y: 0,
    duration: 1,
    opacity: 1,
})
    .to('.line12', {
        y: 0,
        duration: 10,
        opacity: 1,
    })
    .to('.line13', {
        y: 0,
        duration: 10,
        opacity: 1,
    })
    .to('.line14', {
        y: 0,
        duration: 10,
        opacity: 1,
    });

const tl_brandstory = gsap.timeline();

tl_brandstory
    .to('.c1', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c2', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c3', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c4', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c5', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c6', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c7', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c8', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })

    .to('.c11', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c12', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c13', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c14', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c15', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    })
    .to('.c16', {
        y: 0,
        duration: 0.3,
        opacity: 1,
    });
/*
    .to('.main_pan', {
        rotate: 33,
        duration: 1,
    });
*/
