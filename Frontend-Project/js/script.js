$(function () {


    // Navbar Scroll start
    $(document).on("scroll", window, function () {
        if ($(window).scrollTop() > 80) {
            $("header .navbar").css({
                "position": "fixed",
                "background-color": "white",
                "height": "80px",
                "color": "#1A153A",
            });
        } else {
            $("header .navbar").css({
                "color": "gray",
                "position": "absolute",
                "height": "100px",
                "background-color": "transparent",
            })
        }
    })
    // Navbar Scroll end


    //UpperServices animation starts
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true,       // default

        }
    )
    wow.init();

    new WOW().init();
    //UpperServices animation ends

    //Cloud Services Starts

    if ($("#CloudServices .listSide a.linkList").length !== 0) {
        $(document).on("mouseenter", "#CloudServices .listSide a.linkList", function () {
            $(this).addClass("active");
        })

        $(document).on("mouseleave", "#CloudServices .listSide a.linkList", function () {
            $(this).removeClass("active");
        })
    }


    //Cloud Services Ends

    //Design & Development Starts

    if ($("#DesignDevelopment .listSide a.linkList").length !== 0) {
        $(document).on("mouseenter", "#DesignDevelopment .listSide a.linkList", function () {
            $(this).addClass("active");
        })

        $(document).on("mouseleave", "#DesignDevelopment .listSide a.linkList", function () {
            $(this).removeClass("active");
        })
    }


    //Design & Development Ends
})

