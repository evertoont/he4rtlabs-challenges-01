jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });


});

var $meuMenu = $('#idTop');
$(document).on('scroll', function () {
    if ($(window).scrollTop() > 110) {
        $meuMenu.addClass('top');
    } else {
        $meuMenu.removeClass('top');
    }
});