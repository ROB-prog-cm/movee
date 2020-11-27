$(function () {

    var header = $("#header")
    sectionH = $("#section").innerHeight();
    scrollOffset = 0;

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= sectionH) {
            header.addClass("fixes");

        } else {
            header.removeClass("fixed");
        }

    });


    $('[data-slider]').slick({
        infinite: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});