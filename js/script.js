$(document).ready(function(){
    'use strict';

//     // Slick Slider on the Banner
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

    // Slick Slider on the Blog
    $('.blog-slider').slick({
        slidesToShow: 3,
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>'
    });


//     // VenoBox on the About
//     new VenoBox({
//         selector: '.abt-vdo'
//     });

//     // VenoBox on the Gallery
//     new VenoBox({
//         selector: '.gall-pop',
//         numeration: true,
//         share: true,
//         // problem :: spinner & spinColor add korte parchi na
//         spinner: 'wave',
//         spinColor: '#e23e38'
//     });
    

//     // Slick Slider on the Testimonial
//     $('.feedback-slider').slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 2,
//         autoplay: true,
//         pauseOnHover: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                   infinite: true,
//                 }
//               },
//         ],
//     });


//     // Counter Up on the Funfact
//     $('.counter').counterUp({
//         delay: 1,
//         time: 800,
//     });

//     // Slick Slider on the Brand
//     $('.brand-slider').slick({
//         slidesToShow: 5,
//         centerMode: true,
//         centerPadding: '0px',
//         autoplay: true,
//         prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
//         nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               infinite: true,
//             }
//           },
//           {
//             breakpoint: 992,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               infinite: true,
//               arrows: false,
//             }
//           },
//           {
//             breakpoint: 576,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               arrows: false,
//             }
//           },
//         ],
//     });
    
});