$(function() {
    $("#button-menu").click(function() {
        $(this).toggleClass("active");
        $("#menu-mobile")
            .stop()
            .fadeToggle();
    });

    var menu = $("header");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            menu.addClass("scroll-on");
        } else {
            menu.removeClass("scroll-on");
        }
        if ($(this).scrollTop() > 500) {
            $("#scrolltop").fadeIn();
        } else {
            $("#scrolltop").fadeOut("500");
        }
    });
    // $("#scrolltop").click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, 800);
    //     return false;
    // });
    $("a.smoothscroll").click(function(e) {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                event.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop:
                            target.offset().top - $("header").outerHeight()
                    },
                    1000
                );
            }
        }
    });
});

$(window).on("load", function() {
    $(".loading-bg").fadeOut(650);
    $("#main-video").addClass("is-load");
    new WOW().init();
	$("header:not(.active)").addClass("loaded");
});

