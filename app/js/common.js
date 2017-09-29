$(document).ready(function() {
    $('.main-menu').hide();
    $(".hamburger").click(function() {
        if (!$('.header').hasClass('shrink')) {
            $('.header').toggleClass('shrink');

        };
        $(this).toggleClass("is-active");
        // $('.main-menu').slideToggle({ left: 'toggle' });
        $('.main-menu').animate({ 'width': 'toggle' }, 300);
        // $('.first-menu-item').css("margin-top", 60);
    });
});
$(function() {
    var shrinkHeader = 1;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
            // $('.blog-container').css({
            //     'margin-top': '90px',
            //     'transition': '300ms'
            // });
        } else {
            $('.header').removeClass('shrink');
            // $('.blog-container').css({
            //     'margin-top': '150px',
            //     'transition': '300ms'
            // });
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

});



function SocialButton() {
  var Fh = $('.footer').height();
        var AFh = $('.afterfooter').height();
        var Bh = $('body').height();
        var Bh2 = $(window).outerHeight();
        var Hh = $('.header').height();
        var Fw = $('.footer-wrapper').height();
        var AllFh = Fh + AFh;
        var bo = $(window).scrollTop();
        if (bo > Bh - Bh2 - AllFh - Hh) {
            $('.index-button-stack').removeAttr('style');
            $('.index-button-stack').css("bottom", 20);
            $('.index-button-stack').css("position", "absolute").height(56);
        } else {
            $('.index-button-stack').css("top", bo + Bh2 - 80);
            $('.index-button-stack').css("position", "absolute").height(56);
        };
};

$(document).ready(function() {
    $(window).scroll(function footerPosition() {
    SocialButton();   
    });
    SocialButton();
});






function calcVH() {
    $('.index-bg').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);









// $(window).resize(function() {
//         var winwidth = $(window).outerWidth();
//         if (winwidth > 991) {

//         } else if (winwidth < 992) {

//         }
// var Fh = $('.footer').height();
// var AFh = $('.afterfooter').height();
// var AllFh = Fh + AFh;
// console.log(Bh - AllFh);
//     });