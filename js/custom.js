// Exclusive homes single slider

$('.single_item').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    });

// Health & Happiness Resides Here slider

$('.healthslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '60px',
    infinite: true,
    responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
    });

// Swmming slider

$('.swming').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: true,
    });

// fancybox JS POPUP

$(document).ready(function() {
    $(".fancybox").fancybox();
});




