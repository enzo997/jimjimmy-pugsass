"use strict";function _defineProperty(e,o,l){return o in e?Object.defineProperty(e,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[o]=l,e}$=jQuery;var aurl=window.location.pathname;""!==(aurl=aurl.replace("/",""))&&"index.html"!==aurl?$('header ul li a[href$="'+aurl+'"]').parent("li").addClass("current-active"):$("header ul li:first-child").addClass("current-active"),""!==aurl&&"index.html"!==aurl?$('header.menu-nav-show ul li a[href$="'+aurl+'"]').parent("li").addClass("current-active"):$("header.menu-nav-show ul li:first-child").addClass("current-active"),"single-our-marquees.html"===aurl&&$("header ul li:nth-child(4)").addClass("current-active"),"get-intouch.html"===aurl?$("header").addClass("change-logo"):$("header").removeClass("change-logo"),$(function(){$(document).ready(function(){$(window).scroll(function(){100<$(window).scrollTop()?($(".header-desktop").addClass("change-color"),$(".header-mobile").addClass("change-color")):($(".header-desktop").removeClass("change-color"),$(".header-mobile").removeClass("change-color"))}),100<$(window).scrollTop()?($(".header-desktop").addClass("change-color"),$(".header-mobile").addClass("change-color")):($(".header-desktop").removeClass("change-color"),$(".header-mobile").removeClass("change-color"))}),$(document).ready(function(){$(window).scroll(function(){100<$(window).scrollTop()?($(".change-logo").addClass("change-color-wlogo"),$(".change-logo").removeClass("change-color")):$(".change-logo").removeClass("change-color-wlogo")}),100<$(window).scrollTop()?($(".change-logo").addClass("change-color-wlogo"),$(".change-logo").removeClass("change-color")):$(".change-logo").removeClass("change-color-wlogo")}),$(".header-mobile .btn-bar").click(function(){$(this).toggleClass("active-menu-show"),$(".header-desktop").toggleClass("menu-nav-show"),$("body").toggleClass("no-Scroll"),$(".header-mobile").toggleClass("change-color-click")}),$(".change-logo .btn-bar").click(function(){$("header").toggleClass("change-color-click-wlogo"),$("header").removeClass("change-color-click")}),$(".slide-text--content-group").slick({dots:!0,arrows:!1,autoplay:!0,speed:1300,slidesToShow:1,slidesToScroll:1,infinite:!0}),$(window).width()<768?$(".home-page--our-marquees .home-page--our-marquess--slick").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,autoplay:!0,speed:1300},"infinite",!0)):$(".home-page--our-marquees .home-page--our-marquess--slick.slick-slider").slick("unslick"),$(window).resize(function(){$(window).width()<768?$(".home-page--our-marquees .home-page--our-marquess--slick").not(".slick-slider").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,autoplay:!0,speed:1300},"infinite",!0)):$(".home-page--our-marquees .home-page--our-marquess--slick.slick-slider").slick("unslick")}),$(window).width()<768?$(".instagram .row").slick(_defineProperty({slidesToShow:2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1,autoplay:!0,speed:1300},"infinite",!0)):$(".instagram .row.slick-slider").slick("unslick"),$(window).resize(function(){var e;$(window).width()<768?$(".instagram .row").not(".slick-slider").slick((_defineProperty(e={slidesToShow:2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1},"infinite",!0),_defineProperty(e,"autoplay",!0),_defineProperty(e,"speed",1300),e)):$(".instagram .row.slick-slider").slick("unslick")}),$(window).width()<576?$(".gallery--content-group .row").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,autoplay:!0,speed:1300},"infinite",!0)):$(".gallery--content-group .row .slick-slider").slick("unslick"),$(window).resize(function(){$(window).width()<576?$(".gallery--content-group .row").not(".slick-slider").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,speed:1300},"infinite",!0)):$(".gallery--content-group .row .slick-slider").slick("unslick")}),$(window).width()<768?$(".about-page--blog--content-post-type .row").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,autoplay:!1,speed:1300},"infinite",!0)):$(".about-page--blog--content-post-type .row .slick-slider").slick("unslick"),$(window).resize(function(){$(window).width()<768?$(".about-page--blog--content-post-type .row").not(".slick-slider").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,speed:1300},"infinite",!0)):$(".about-page--blog--content-post-type .row .slick-slider").slick("unslick")}),$(".single--cont-group-slide").slick({dots:!1,arrows:!0,prevArrow:$(".cont-btn-slick-pr-next .prev"),nextArrow:$(".cont-btn-slick-pr-next .next"),slidesToShow:1,slidesToScroll:1,speed:1200,infinite:!0,responsive:[{breakpoint:992,settings:{dots:!0,arrows:!1}}]}),$(".btn-send").click(function(){var e=$(".name-input").val(),o=$(".email-input").val(),l=$(".message-input").val(),s=$(".effect-after-send");""===e||""===o||""===l?(s.attr("style","color:red"),s.html(" Error: You have not entered all the required values !")):(s.attr("style","color:green"),s.html("Sent successfully !!!"))});var e=1,o=$(".tab-panes .tab-content").length;console.log(o),$(".cont-btn-tab .prev").attr("disabled",""),$(".cont-btn-tab .prev").addClass("display-none"),$(".cont-btn-tab .get-quote").addClass("display-none"),$(".cont-btn-tab .next").click(function(){$(".tab-content:nth-child("+e+")").removeClass("active"),e++,$(".tab-content:nth-child("+e+")").addClass("active"),$(".nav-tabs li:nth-child("+e+")").addClass("active"),o===e&&($(this).attr("disabled",""),$(this).addClass("display-none"),$(".cont-btn-tab .get-quote").removeClass("display-none")),1<e&&($(".cont-btn-tab .prev").removeAttr("disabled",""),$(".cont-btn-tab .prev").removeClass("display-none"))}),$(".cont-btn-tab .prev").click(function(){$(".tab-content:nth-child("+e+")").removeClass("active"),$(".nav-tabs li:nth-child("+e+")").removeClass("active"),$(".cont-btn-tab .get-quote").addClass("display-none"),e--,$(".tab-content:nth-child("+e+")").addClass("active"),1===e&&($(this).attr("disabled",""),$(this).addClass("display-none")),e<o&&($(".cont-btn-tab .next").removeAttr("disabled",""),$(".cont-btn-tab .next").removeClass("display-none"))})});