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
        var customOffset = -120;
        if ($(id).hasClass('first-page')) {
            customOffset = 0;
        }
        $('html, body').animate({
            scrollTop: $(id).offset()['top'] + customOffset
        }, 400);
    });
});
