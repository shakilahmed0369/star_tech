$(document).ready(function () {
    $(".search-mob").click(function (event) {
        $(".input-serch").slideToggle(150);
        event.preventDefault();
    })


    $(".toggle-menu").click(function () {
        $(".main-nav").animate({
            "left": "0"
        });
        $(this).hide()
        $(".fa-times").show();
        $(".overlay").css({
            "background": "rgba(0, 0, 0, 0.397)"
        })

    })
    // $(".overlay").click(function(){
    //     $(".main-nav").animate({
    //         "left": "-310"
    //     });
    //     $(this).hide()
    // })

    $(".fa-times").click(function () {
        $(".main-nav").animate({
            "left": "-310"
        });
        $(this).hide()
        $(".toggle-menu").show();
        $(".overlay").css({
            "background": "rgba(0, 0, 0, 0)"
        })
    })

    //nav fixed to top :)



    $(window).scroll(function () {
        if ($(this).scrollTop() >= 290) {
            $(".main-nav").addClass("fix-top")
        } else {
            $(".main-nav").removeClass("fix-top")
        }
    })

    // go to top
    $(".go-top").hide()
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $(".go-top").show()
        } else {
            $(".go-top").hide()
        }
    })






    // NAV TOGGLE SRAET

    $(".has-child-1").click(function () {
        $(".mob-menu-1", this).toggle() + $(".has-child-1 .icon-pluse").toggle()
    });
    $(".has-child-2").click(function () {
        $(".mob-menu-2").toggle() + $(".has-child-2 .icon-pluse").toggle()
    });
    $(".has-child-3").click(function () {
        $(".mob-menu-3").toggle() + $(".has-child-3 .icon-pluse").toggle()
    });
    $(".has-child-4").click(function () {
        $(".mob-menu-4").toggle() + $(".has-child-4 .icon-pluse").toggle()
    });
    $(".has-child-5").click(function () {
        $(".mob-menu-5").toggle() + $(".has-child-5 .icon-pluse").toggle()
    });
    $(".has-child-6").click(function () {
        $(".mob-menu-6").toggle() + $(".has-child-6 .icon-pluse").toggle()
    });
    $(".has-child-7").click(function () {
        $(".mob-menu-7").toggle() + $(".has-child-7 .icon-pluse").toggle()
    });
    $(".has-child-8").click(function () {
        $(".mob-menu-8").toggle() + $(".has-child-8 .icon-pluse").toggle()
    });
    $(".has-child-9").click(function () {
        $(".mob-menu-9").toggle() + $(".has-child-9 .icon-pluse").toggle()
    });
    $(".has-child-10").click(function () {
        $(".mob-menu-10").toggle() + $(".has-child-10 .icon-pluse").toggle()
    });
    $(".has-child-11").click(function () {
        $(".mob-menu-11").toggle() + $(".has-child-11 .icon-pluse").toggle()
    });
    $(".has-child-12").click(function () {
        $(".mob-menu-12").toggle() + $(".has-child-12 .icon-pluse").toggle()
    });
    $(".has-child-13").click(function () {
        $(".mob-menu-13").toggle() + $(".has-child-13 .icon-pluse").toggle()
    });
    $(".has-child-14").click(function () {
        $(".mob-menu-14").toggle() + $(".has-child-14 .icon-pluse").toggle()
    });
    $(".has-child-15").click(function () {
        $(".mob-menu-15").toggle() + $(".has-child-15 .icon-pluse").toggle()
    });
    $(".has-child-16").click(function () {
        $(".mob-menu-16").toggle() + $(".has-child-16 .icon-pluse").toggle()
    });
    $(".has-child-17").click(function () {
        $(".mob-menu-17").toggle() + $(".has-child-17 .icon-pluse").toggle()
    });

    //product page side bar toggler////////

    $(".lable1").click(function () {
        $(".items1").toggle()
    })
    $(".lable2").click(function () {
        $(".items2").toggle()
    })
    $(".lable3").click(function () {
        $(".items3").toggle()
    })
    $(".lable4").click(function () {
        $(".items4").toggle()
    })
    $(".lable5").click(function () {
        $(".items5").toggle()
    })
    $(".lable6").click(function () {
        $(".items6").toggle()
    })



    //top bar list and grid buttons background change

    $(".viwe-buttons .list-viwe").click(function () {
        $(".grid-viwe").removeClass("active") + $(this).addClass("active") + $(".product-layout").removeClass("grid col-md-4").addClass("col-md-12 list")
    })
    $(".viwe-buttons .grid-viwe").click(function () {
        $(this).addClass("active") + $(".list-viwe").removeClass("active") + $(".product-layout").removeClass("list col-md-12").addClass("col-md-4 grid")
    })

    ///side bar toggler (filter-icon)

    $(".viwe-buttons .side-toggler").click(function () {
        $(".product-catagoris .main-filter").show(200)
    })
    $(".price-filter label .fa-times-circle").click(function () {
        $(".product-catagoris .main-filter").hide(200)
    })









    $(window).resize(function () {

        if ($(window).width() >= 992) {

            $(".product-catagoris .main-filter").show()

        } else {
            $(".product-catagoris .main-filter").hide()
        }

    });




    //ZOOM PLUGIN ACTIVITON

    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    var scroll = new SmoothScroll('a[href*="#"]');


})