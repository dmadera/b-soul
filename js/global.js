jQuery.fn.exists = function() {
    return this.length > 0;
}

$(function() {
    $('a[href*="#"]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if (id.length == 1 || !$(id).exists()) {
            return;
        }
        var customOffset = -100;
        if ($(id).hasClass('first-page')) {
            customOffset = 0;
        }
        $('html, body').animate({
            scrollTop: $(id).offset()['top'] + customOffset
        }, 400);
        event.stopPropagation();
    });
    $('#mediaPanel a.close').click(function() {
        $('#mediaPanel .content').empty();
        $('#mediaPanel').hide();
        event.stopPropagation();
    });

    $('#mediaPanel').click(function(event) {
        event.stopPropagation();
    });

    $(window).click(function() {
        if ($('#mediaPanel').is(':visible')) {
            $('#mediaPanel .content').empty();
            $('#mediaPanel').hide();
            event.stopPropagation();
        }
    });
});
