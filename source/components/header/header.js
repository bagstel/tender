module.exports = () => {

    // Hamburger-menu

    let nav = $(".navigation");

    $(".burger-check").click(() => {

        let checked = $('#burger-check:checked').length > 0;

        if (checked) {
            nav.addClass("navigation--active");
        }
        else {
            nav.removeClass("navigation--active");
        }

    });

    // Smooth scrolling of the page
    $(".navigation__link").click(function () {

        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;

        $("body,html").animate({
            scrollTop: destination
        }, 800, function () {

            $('#burger-check').prop( "checked", false );

            nav.removeClass("navigation--active");

        });
    });
};