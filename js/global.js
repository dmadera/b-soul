jQuery.fn.exists = function() {
    return this.length > 0;
}

$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    if (id.length == 1 || !$(id).exists()) {
        return;
    }
    $('body').animate({
        scrollTop: $(id).offset()['top'] - 120
    }, 400);
});
