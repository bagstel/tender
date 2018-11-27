module.exports = () => {
    // Smooth scrolling of the page
    $(".intro__scroll").click(function () {

        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;

        $("body,html").animate({
            scrollTop: destination
        }, 800);
    });
}