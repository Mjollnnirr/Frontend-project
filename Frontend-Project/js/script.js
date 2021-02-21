$(function () {

    //Navbar Dropdown starts
    $(document).on("mouseenter", "header .navbar ul li.nav-item.dropdown", function(){
        $(this).find(".dropdown-menu").slideDown("fast")
    })

    $(document).on("mouseleave", "header .navbar ul li.nav-item.dropdown", function(){
        $(this).find(".dropdown-menu").slideUp("medium")
    })
    //Navbar Dropdown ends


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
            // $("nav .buttons a").first().css({
            //     "border": "1px solid #1A153A",
            //     "color": "#1A153A",
            // });

            // $("nav .buttons a").last().css({
            //     "border": "1px solid #1A153A",
            //     "background-color": "#1A153A",
            //     "color": "white",
            // });
        }
    })
    // Navbar Scroll end


    //Grid Part starts
    if($("#Entry .third .playIcon").length>0){
        $(document).on("mouseenter", ("#Entry .third .playIcon"), function(){
            $("#Entry .third .image img").css({
                "transform": "scale(1.1)",
            })
        })
        $(document).on("mouseleave", ("#Entry .third .image img"), function(){
            $("#Entry .third .image img").css({
                "transform": "scale(1)",
            })
        })

        $(document).on("mouseenter", ("#Entry .third .image img"), function(){
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
    if($("#OurTeam .card").length!==0){
        $(document).on("mouseenter", "#OurTeam .card", function(){
            let linkIcons = $(this).find(".cardBody .headerText .icons ul li a");
            let cardHeader = $(this).find(".cardBody .headerText");
            let cardText = $(this).find(".cardBody .headerText .text");
            let image = $(this).find(".cardImage .image img");
            cardHeader.addClass("active");
            cardText.addClass("active");
            linkIcons.addClass("active");
            image.addClass("active");      
        })

        $(document).on("mouseleave", "#OurTeam .card", function(){
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
    if($("#ParallaxCounter .parallaxContent .text p.number.num").length !== 0){
        $(".num").counterUp({
            delay: 10,
            time: 1000,
        })
    }
    //CounterIUpEnds

    //Accordion Starts

    if($("#Questions .faqTextRight .accordionHeader").length !== 0){
        $(document).on("click", "#Questions .faqTextRight .accordionHeader", function(){
            if($(this).next().length !== 0){
                let thisButton = $(this)
                $("#Questions .faqTextRight .accordionBody").hide("fast", function(){
                    console.log(thisButton.next().show("medium"));
                });
                // $(this).next().slideToggle("medium");

                // $("#Questions .faqTextRight .accordionBody").slideUp("fast");
                // $("#Questions .faqTextRight .accordionBody.active").removeClass("active");
                // if($(this).next().css("display")==="none"){
                //     $(this).next().slideDown("medium");
                // }
                // else{
                //     $(this).next().slideUp("fast");
                // }
            }
        })
    }

    //Accordion ends
})

