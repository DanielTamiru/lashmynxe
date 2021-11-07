import $ from 'jquery';

export function animateNavBar() {
    $(window).scroll( () => {
        var top_of_element = $("#page-header").offset().top;
        if (top_of_element > 100) {
            $('#my-navbar').animate({opacity: 0}, {duration: 180, queue: false});
            $('#my-navbar').animate({bottom: "10px"}, {duration: 180, queue: false});

            $('#page-header').on({
                    mouseenter: function () {
                        $('#my-navbar').animate({opacity: 1}, {duration: 300, queue: false});
                        $('#my-navbar').animate({bottom: "0px"}, {duration: 300, queue: false});    
                    },
                    mouseleave: function () {
                        $('#my-navbar').animate({opacity: 0}, {duration: 300, queue: false});
                        $('#my-navbar').animate({bottom: "10px"}, {duration: 300, queue: false});
                    }
                }
            );
        } else {
            $('#page-header').off();
            $('#my-navbar').animate({bottom: "0px"}, {duration: 250, queue: false});
            $('#my-navbar').animate({opacity: 1}, {duration: 250, queue: false});
        }
    });    
}

export function highlightNavBarItem(pageName) {
    $(".navbar-item-name:contains('" + pageName + "')").each(function(i) {
        $(this).css("color", "black");
    });
}

export function greyOutNavBarItem(pageName) {
    $(".navbar-item-name:contains('" + pageName + "')").each(function(i) {
        $(this).css("color", "#747474");
    });
}


// ========================

export function floatIn() {
    $(window).scroll( function() {
        $('.float-in').each( function(i) {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > top_of_element){
                $(this).animate({opacity: "1"}, {duration: 375, queue: false});
                $(this).animate({top: "0px"}, {duration: 300, queue: false});
            }
        });
    });
}

export function fadeIn() {
    $('.fade-in').each(function(i) {
        $(this).animate({'opacity':'1'}, 1200);
    });
}

export function scrollToSetMoreWidget() {
    let widget_position = $("#widget-wrapper").offset();
    $("html, body").animate({scrollTop:  widget_position.top - 200});
}
