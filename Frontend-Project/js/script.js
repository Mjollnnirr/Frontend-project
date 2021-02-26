$(function () {


    $(window).on("load", function () {
        $(".loader-image").fadeOut("hide");
    });

    //Navbar Dropdown starts
    if ($(".nav-item.dropdown").length !== 0) {
        $(document).on("click", "header .navbar button.navbar-toggler", function () {
            $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            if (window.matchMedia('(max-width: 375px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
            else if (window.matchMedia('(max-width: 768px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
            else if (window.matchMedia('(max-width: 812px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
        })
    }



    //Navbar Dropdown ends


    //navbar

    if ($("header .navbar a.hamburger").length !== 0) {
        $(document).on("click", "header .navbar a.hamburger", function () {
            if ($(this).find("span.regular").hasClass("active")) {
                $("header .navbar .hamburgerIcon span.regular").removeClass("active");
                $("header .navbar .hamburgerIcon span.after").removeClass("active");
                $("header .navbar .hamburgerIcon span.before").removeClass("active");
            }
            else {
                $("header .navbar .hamburgerIcon span.regular").addClass("active");
                $("header .navbar .hamburgerIcon span.after").addClass("active");
                $("header .navbar .hamburgerIcon span.before").addClass("active");
            }
        })
    }

    // Navbar Scroll start
    $(document).on("scroll", window, function () {
        if ($(window).scrollTop() > 150) {
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


    //Grid Part starts
    if ($("#Entry .third .playIcon").length > 0) {
        $(document).on("mouseenter", ("#Entry .third .playIcon"), function () {
            $("#Entry .third .image img").css({
                "transform": "scale(1.1)",
            })
        })
        $(document).on("mouseleave", ("#Entry .third .image img"), function () {
            $("#Entry .third .image img").css({
                "transform": "scale(1)",
            })
        })

        $(document).on("mouseenter", ("#Entry .third .image img"), function () {
            $("#Entry .third .image img").css({
                "transform": "scale(1.1)",
            })
        })
    }
    //grid Part ends


    //UpperServices animation starts
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true,       // default

        })
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


    //Our Team starts
    if ($("#OurTeam .card").length !== 0) {
        $(document).on("mouseenter", "#OurTeam .card", function () {
            let linkIcons = $(this).find(".cardBody .headerText .icons ul li a");
            let cardHeader = $(this).find(".cardBody .headerText");
            let cardText = $(this).find(".cardBody .headerText .text");
            let image = $(this).find(".cardImage .image img");
            cardHeader.addClass("active");
            cardText.addClass("active");
            linkIcons.addClass("active");
            image.addClass("active");
        })

        $(document).on("mouseleave", "#OurTeam .card", function () {
            let linkIcons = $(this).find(".cardBody .headerText .icons ul li a");
            let cardHeader = $(this).find(".cardBody .headerText");
            let cardText = $(this).find(".cardBody .headerText .text");
            let image = $(this).find(".cardImage .image img");
            cardHeader.removeClass("active");
            cardText.removeClass("active");
            linkIcons.removeClass("active");
            image.removeClass("active");
        })
    }
    //Our Team ends

    //CounterUp Starts

    //Counter                     // $('.timer').countTo();


    if ($("#ParallaxCounter .parallaxContent .text p.number.num").length !== 0) {
        $(document).on("scroll", window, function () {
            if ($(window).scrollTop() > $("#ParallaxCounter").offset().top -450 && $("#ParallaxCounter").hasClass("start")) {
                $('.timer').countTo();
                $("#ParallaxCounter").removeClass("start");
            }
        })
    }

    //CounterIUpEnds

    //Accordion Starts

    if ($("#Questions .faqTextRight .accordionHeader").length !== 0) {
        $(document).on("click", "#Questions .faqTextRight .accordionHeader", function () {
            if ($(this).next().length !== 0) {
                let thisButton = $(this)
                $("#Questions .faqTextRight .accordionBody").hide("fast", function () {
                    console.log(thisButton.next().show("medium"));
                });
            }
        })
    }
    //Accordion ends


    // Log Page starts

    localStorage.setItem("userName", "Mjollnnirr");
    localStorage.setItem("password", "11farid22");

    if ($("#LogIn .displayingSometings .formSide form").length !== 0) {
        $(document).on("submit", "#LogIn .displayingSometings .formSide form", function (ev) {
            ev.preventDefault();
        })

        console.log($("#LogIn .displayingSometings .formSide form"));
    }

    // Log Page ends



})
$(window).on("load", function () {
    $(".loader-image").fadeOut("slow");
});

