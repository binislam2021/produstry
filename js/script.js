$(document).ready(function(){
    'use strict';

    // 
    $('nav .nav-item a').on('click',function(){
        // $(this).addClass('active').siblings().removeClass('active');
        $('nav .nav-item a').removeClass('active');
        $(this).addClass('active');
    });

     // Slick Slider on the Banner
    $('.banner-slider').slick({
        autoplay: true,
        pauseOnHover: false,
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>'
    });

    // AOS on the Portfolio
    AOS.init();

    // Counter Up on the Funfact
    $('.counter').counterUp({
        delay: 1,
        time: 500
    });

    // VenoBox on the Blog
    new VenoBox({
        selector: '.blog-link',
        share: true,
        spinner: 'wave',
        spinColor: '#ffca36',
    });

    // Slick Slider on the Blog
    $('.blog-slider').slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        pauseOnHover: false,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            },
        ]
    });

    // Slick Slider on the Testimonial
    $('.text-slider').slick({
        // autoplay: true,
        pauseOnHover: false,
        asNavFor: '.image-slider',
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
    });

    $('.image-slider').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        // autoplay: true,
        pauseOnHover: false,
        asNavFor: '.text-slider',
    });

    // Slick Slider on the Brand Part
    $('.brand-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
    });

    // Map-popup in Footer Main using VenoBox
    new VenoBox({
        selector: '.map-popup',
    });

    
});