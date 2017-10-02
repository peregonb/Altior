$(document).ready(function() {
    $('#close-popup').hide();
    $('.recall-block').hide();
    $('.recontact-block').hide();

    $('#recallOn').click(function() {
        $('#close-popup').show();
        $('.recall-block').show();
    });    
    $('#recontactOn').click(function() {
        $('#close-popup').show();
        $('.recontact-block').show();
    });
    $('#close-popup').click(function(){
        $(this).hide();
        $('.recall-block').hide();
        $('.recontact-block').hide();
    });
    $('.recall-cross').click(function(){
        $('#close-popup').hide();
        $('.recall-block').hide();
        $('.recontact-block').hide();
    });
    $('.main-menu').hide();
    $(".hamburger").click(function() {
        if (!$('.header').hasClass('shrink')) {
            $('.header').toggleClass('shrink');

        };
        $(this).toggleClass("is-active");
        $('.main-menu').animate({ 'width': 'toggle' }, 300);
    });
});
$(function() {
    var shrinkHeader = 1;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');
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
    $('.index-bg').innerHeight($(this).innerHeight());
    $('.filter').innerHeight($(this).innerHeight());
}
(function($) {
    calcVH();
    $(window).on('orientationchange', function() {
        calcVH();
    });
})(jQuery);

// VIDEO
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}