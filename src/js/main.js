$(document).ready(function () {


    // if ($("main").hasClass('home')) {
        
        $(window).scroll(function () {

            let header = $('header');
            let logo = $('header img');
            scroll = $(window).scrollTop();
            if (scroll >= 10) {
                header.addClass('fixed');
                logo.attr('src', 'src/images/logo-shallowGeo-2.png')
            } else {
                header.removeClass('fixed');
                logo.attr('src', 'src/images/logo-shallowGeo.png')
            }
        });
    // }
})

