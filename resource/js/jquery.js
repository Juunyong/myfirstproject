document.addEventListener('DOMContentLoaded', function () {
    // nav-head__menutoggle 요소 선택
    const menuToggle = document.querySelector('.nav-head__menutoggle');

    // 요소에 클릭 이벤트 리스너 추가
    menuToggle.addEventListener('click', function () {
        // is_menu__open 클래스 토글
        menuToggle.classList.toggle('is_menu__open');
    });
});

function createCircularText(elementId, radius) {
    const textElement = document.getElementById(elementId);
    const text = textElement.innerText.trim();
    textElement.innerText = ''; // 기존 텍스트 제거

    const angleIncrement = -360 / text.length; // 각 문자 사이의 각도
    const startAngle = -90; // 위쪽(12시 방향)에서 시작

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;

        // 각 문자의 위치 계산
        const angle = startAngle + angleIncrement * index; // 시계 방향으로 진행
        const x = radius * Math.cos((angle * Math.PI) / 180); // 삼각함수로 x 좌표 계산
        const y = radius * Math.sin((angle * Math.PI) / 180); // 삼각함수로 y 좌표 계산

        span.style.height = '1em'; // 모든 글자의 높이를 동일하게 설정
        span.style.lineHeight = '1'; // 줄 간격 제거
        span.style.textAlign = 'center'; // 텍스트 중앙 정렬
        // 문자 위치 및 회전 적용
        span.style.position = 'absolute';

        span.style.transform = `translate(${x}px, ${y}px) rotate(${angle - 90}deg) translate(-50%, -50%)`; // 글자가 중심을 향하도록 회전
        //   span.style.transformOrigin = 'center center'; // 회전 기준점을 중앙으로 설정
        span.style.transformOrigin = 'center center';
        textElement.appendChild(span);
    });
}

// 각각의 원에 대해 텍스트를 생성합니다.
createCircularText('outer-text', 22); // 바깥쪽 원의 반지름
createCircularText('middle-text', 19); // 중간 원의 반지름
createCircularText('inner-text', 16); // 안쪽 원의 반지름

// 모든 원 요소 가져오기
const outerCircle = document.querySelector('.outer-circle');
const middleCircle = document.querySelector('.middle-circle');
const innerCircle = document.querySelector('.inner-circle');

// 회전 멈추기 함수
function stopRotation(event) {
    event.target.style.animationPlayState = 'paused';
}

// 회전 재개 함수
function resumeRotation(event) {
    event.target.style.animationPlayState = 'running';
}

// 각 원에 이벤트 리스너 추가
[outerCircle, middleCircle, innerCircle].forEach((circle) => {
    circle.addEventListener('mouseenter', stopRotation); // 마우스를 올리면 멈춤
    circle.addEventListener('mouseleave', resumeRotation); // 마우스를 떼면 다시 실행
});
