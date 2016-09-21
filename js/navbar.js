var navbarFix = function() {
    var navbarPosition = $('.navbar').css('position');
    if (navbarPosition == 'absolute') {
        $('.navbar').css('position', 'fixed');
        $('.navbar').css('top', '0');
    }
}

var navbarUnfix = function() {
    var navbarPosition = $('.navbar').css('position');
    if (navbarPosition == 'fixed') {
        $('.navbar').css('position', 'absolute');
        $('.navbar').css('top', '100vh');
        $('body').css('margin-top', '0px');
    }
}

$(function() {
    $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        var dropdownMenu = $(this).parent().find('.dropdown-menu')
        var isVisible = dropdownMenu.is(':visible');
        $('.navbar .dropdown-menu:visible').hide();
        if (!isVisible) {
            dropdownMenu.show();
        }
    });

    $(window).click(function() {
        $('.dropdown-menu').hide();
    });

    $('.dropdown-toggle').click(function(event) {
        event.stopPropagation();
    });

    var prevScroll = 0;
    $(window).scroll(function() {
        var currentScroll = $(document).scrollTop();
        var firstPageOffset = $('.first-page').offset()['top'] - 120;
        if (prevScroll < currentScroll && currentScroll > firstPageOffset) {
            navbarFix();
        } else if (prevScroll > currentScroll && currentScroll < firstPageOffset) {
            navbarUnfix();
        }
        prevScroll = currentScroll;
    });
});
