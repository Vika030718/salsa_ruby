var num = 140; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#main-menu').addClass('fixed');
    } else {
        $('#main-menu').removeClass('fixed');
    }
});