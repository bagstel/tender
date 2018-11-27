module.exports = () => {

    // The Slider for reviews
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: false,
        loop: true,
        margin: 30,
        navText: [
            '<i class="slider-arrow-left"></i>',
            '<i class="slider-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1, dots: true, nav: false,
            },
            769: {
                items: 1, dots: false, nav: true,
            },
            981: {
                items: 2, dots: false, nav: true,
            },
            1281: {
                items: 3, dots: false, nav: true,
            }
        }
    });
};