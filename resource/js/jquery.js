$(function () {
    $('.nav-head__menutoggle').on('click', function () {
        $('.nav-head__menutoggle').addClass('is_menu__open');
    });
});

$(function () {
    $('.nav-head__menutoggle is_menu__open').on('click', function () {
        $('.nav-head__menutoggle').removeClass('is_menu__open');
    });
});
