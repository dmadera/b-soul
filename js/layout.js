$(document).ready(function() {
    $("img[src*='.svg']").each(function() {
        var img = $(this);
        $.get(img.attr("src"), function(svg) {
            img.replaceWith(svg);
        }, 'text');
    });
});
