$(function () {
    $('.mobile-menu').on('click', function () {
        $('#mobile-menu__trigger').toggleClass('toogle-menu');
    });

    $('#see-partners').on('click', function () {
        $('#meet-more').removeClass('display-none');
        $('#meet-more').removeClass('display-block');
    });
});
