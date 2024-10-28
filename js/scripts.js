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
    })

    .to('.c11', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c12', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c13', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c14', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c15', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.c16', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })

    .to('.head__pepper', {
        duration: 2,
    });

const tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: '.head-section__text', // 객체 기준 범위
        start: '10% 30%', // 시작 위치
        end: '80% 60%', // 끝 위치
        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
        markers: true, // 개발 가이드선
    },
});

tl2.to('.line1', {
    y: 0,
    duration: 0.5,
    opacity: 1,
})
    .to('.line2', {
        y: 0,
        duration: 0.5,
        opacity: 1,
    })
    .to('.line3', {
        y: 0,
        duration: 0.5,
        opacity: 1,
    })
    .to('.line4', {
        y: 0,
        duration: 0.5,
        opacity: 1,
    })
    .to('.line5', {
        y: 0,
        duration: 0.5,
        opacity: 1,
    });

/*
    for ( i = 0; i < 10; i++) {

    }*/

const tl3 = gsap.timeline({
    ScrollTrigger: {
        trigger: '.footer__container', // 객체 기준 범위
        start: '10% 30%', // 시작 위치
        end: '80% 60%', // 끝 위치
        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
        markers: true, // 개발 가이드선
    },
});

tl3.to('.fc1', {
    y: 0,
    duration: 0.1,
    opacity: 1,
})
    .to('.fc2', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc3', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc4', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc5', {
        y: 0,
        duration: 0.2,
        opacity: 1,
    })
    .to('.fc11', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc12', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc13', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc14', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc15', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    })
    .to('.fc16', {
        y: 0,
        duration: 0.1,
        opacity: 1,
    });
