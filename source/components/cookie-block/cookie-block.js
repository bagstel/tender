module.exports = () => {

    let target = $("body").offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > (target + 5)) {
            $('.cookie-block').css('position', 'fixed');
        }
        else if ($(window).scrollTop() === target) {
            $('.cookie-block').css('position', 'static');
        }
    });

    $('.cookie-block__button').on('click', () => {
        $('.cookie-block').css('display', 'none');
    });
};