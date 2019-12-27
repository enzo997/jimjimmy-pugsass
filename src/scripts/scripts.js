$ = jQuery;
let aurl = window.location.pathname;
aurl = aurl.replace("/", "");
if (aurl !== '' && aurl !== 'index.html')
    $('header ul li a[href$="' + aurl + '"]').parent('li').addClass('current-active');
else
    $('header ul li:first-child').addClass('current-active');
// Mobile
if (aurl !== '' && aurl !== 'index.html')
    $('header.menu-nav-show ul li a[href$="' + aurl + '"]').parent('li').addClass('current-active');
else
    $('header.menu-nav-show ul li:first-child').addClass('current-active');
// single
if (aurl === 'single-our-marquees.html')
    $('header ul li:nth-child(4)').addClass('current-active');
//get-intouch
if (aurl === 'get-intouch.html')
    $('header').addClass('change-logo');
else
    $('header').removeClass('change-logo');
$(function() {
    $(document).ready(function(){
        $(window).scroll(function() { 
            let top = $(window).scrollTop();
            if (top > 100) {
                $('.header-desktop').addClass('change-color');
                $('.header-mobile').addClass('change-color');
            }
            else {
                $('.header-desktop').removeClass('change-color');
                $('.header-mobile').removeClass('change-color');
            }
        });
        let top = $(window).scrollTop();
        if (top > 100) {
            $('.header-desktop').addClass('change-color');
            $('.header-mobile').addClass('change-color');
        }
        else {
            $('.header-desktop').removeClass('change-color');
            $('.header-mobile').removeClass('change-color');
        }
    });
    // chagne logo => change-background scrooll
    $(document).ready(function(){
        $(window).scroll(function() { 
            let top = $(window).scrollTop();
            if (top > 100) {
                $('.change-logo').addClass('change-color-wlogo');
                $('.change-logo').removeClass('change-color');
            }
            else 
                $('.change-logo').removeClass('change-color-wlogo');
        });
        let top = $(window).scrollTop();
        if (top > 100) {
            $('.change-logo').addClass('change-color-wlogo');
            $('.change-logo').removeClass('change-color');
        }
        else
            $('.change-logo').removeClass('change-color-wlogo');
    });
    //header-mobile
    $('.header-mobile .btn-bar').click(function() {
        $(this).toggleClass('active-menu-show'),$('.header-desktop').toggleClass('menu-nav-show'),
        $('body').toggleClass('no-Scroll'), $('.header-mobile').toggleClass('change-color-click');
    });
    $('.change-logo .btn-bar').click(function() {
        $('header').toggleClass('change-color-click-wlogo'),
        $('header').removeClass('change-color-click');
    });
    //call-slick-home-page-banner-top 
    $('.slide-text--content-group').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });
    if ($(window).width() < 768) {
        $('.home-page--our-marquees .home-page--our-marquess--slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 1300,
            infinite: true
        });
    }
    else 
        $('.home-page--our-marquees .home-page--our-marquess--slick.slick-slider').slick('unslick');
    $(window).resize(function() { 
        if ($(window).width() < 768) {
            $('.home-page--our-marquees .home-page--our-marquess--slick').not('.slick-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: true,
                speed: 1300,
                infinite: true
            });
        }
        else 
            $('.home-page--our-marquees .home-page--our-marquess--slick.slick-slider').slick('unslick');
    });
    //
    if ($(window).width() < 768) {
        $('.instagram .row').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: false,
            autoplay: true,
            speed: 1300,
            infinite: true
        });
    }
    else 
        $('.instagram .row.slick-slider').slick('unslick');
    $(window).resize(function() { 
        if ($(window).width() < 768) {
            $('.instagram .row').not('.slick-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                speed: 1300,
            });
        }
        else 
            $('.instagram .row.slick-slider').slick('unslick');
    });
    // gallery
    if ($(window).width() < 576) {
        $('.gallery--content-group .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 1300,
            infinite: true
        });
    }
    else 
        $('.gallery--content-group .row .slick-slider').slick('unslick');
    $(window).resize(function() { 
        if ($(window).width() < 576) {
            $('.gallery--content-group .row').not('.slick-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                speed: 1300,
                infinite: true
            });
        }
        else 
            $('.gallery--content-group .row .slick-slider').slick('unslick');
    });
    //about-page--blog--content-post-type
    if ($(window).width() < 768) {
        $('.about-page--blog--content-post-type .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 1300,
            infinite: true
        });
    }
    else 
        $('.about-page--blog--content-post-type .row .slick-slider').slick('unslick');
    $(window).resize(function() { 
        if ($(window).width() < 768) {
            $('.about-page--blog--content-post-type .row').not('.slick-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                speed: 1300,
                infinite: true
            });
        }
        else 
            $('.about-page--blog--content-post-type .row .slick-slider').slick('unslick');
    });
    //call slick single our marquees
    $('.single--cont-group-slide').slick({
        dots: false,
        arrows: true,
        prevArrow: $('.cont-btn-slick-pr-next .prev'),
        nextArrow: $('.cont-btn-slick-pr-next .next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
    //Function Contact
    $('.btn-send').click(function(){
        //input
        let $name = $('.name-input').val();
        let $email = $('.email-input').val();
        let $message = $('.message-input').val();
        let $out = $('.effect-after-send');
        if ( $name === '' || $email === '' || $message === ''){
            $out.attr('style','color:red');
            $out.html(" Error: You have not entered all the required values !");
        }
        else {
            $out.attr('style','color:green');
            $out.html("Sent successfully !!!");  
        }
    });
    ///====TAB=GET-IN-TOUCH =====
    let posTab = 1;
    let lenghtTab =  $('.tab-panes .tab-content').length;
    console.log(lenghtTab);
    $('.cont-btn-tab .prev').attr('disabled', '');
    $('.cont-btn-tab .prev').addClass('display-none');
    $('.cont-btn-tab .get-quote').addClass('display-none');
    $('.cont-btn-tab .next').click(function(){
        $('.tab-content:nth-child(' + posTab + ')').removeClass('active');
        posTab ++;
        $('.tab-content:nth-child(' + posTab + ')').addClass('active');
        $('.nav-tabs li:nth-child(' + posTab + ')').addClass('active');
        if (lenghtTab === posTab) {
            $(this).attr('disabled', '');
            $(this).addClass('display-none');
            $('.cont-btn-tab .get-quote').removeClass('display-none');
        }
        if (posTab > 1) {
            $('.cont-btn-tab .prev').removeAttr('disabled', '');
            $('.cont-btn-tab .prev').removeClass('display-none');
        }
    });
    //==PREV
    $('.cont-btn-tab .prev').click(function(){
        $('.tab-content:nth-child(' + posTab + ')').removeClass('active');
        $('.nav-tabs li:nth-child(' + posTab + ')').removeClass('active');
        $('.cont-btn-tab .get-quote').addClass('display-none');
        posTab --;
        $('.tab-content:nth-child(' + posTab + ')').addClass('active');
        
        if (posTab === 1) {
            $(this).attr('disabled', '');
            $(this).addClass('display-none');
        }
        if (posTab < lenghtTab) {
            $('.cont-btn-tab .next').removeAttr('disabled', '');
            $('.cont-btn-tab .next').removeClass('display-none');
        }
    });
});
