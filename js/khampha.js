$(document).ready(function(){
    $('.container-discover__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        // tùy biến
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`
    });
});