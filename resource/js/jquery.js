document.addEventListener('DOMContentLoaded', function () {
    // nav-head__menutoggle 요소 선택
    const menuToggle = document.querySelector('.nav-head__menutoggle');

    // 요소에 클릭 이벤트 리스너 추가
    menuToggle.addEventListener('click', function () {
        // is_menu__open 클래스 토글
        menuToggle.classList.toggle('is_menu__open');
    });
});
