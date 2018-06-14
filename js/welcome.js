// replace svg tags with content of svg file
var svgHandler = function() {
    $("object-svg").each(function() {
        var object = $(this);
        $.get(object.attr("src"), function(svg) {
            object.replaceWith(svg);
        }, 'text');
    });
}

var videoHandler = function() {
    var video = $('#bgvideo');
    setTimeout(function() {
        video.attr('loop', 'true');
        video[0].play();
    }, 3000);

    video.on('abort ended error', function() {
        video[0].load();
    });
}

$(svgHandler);
$(videoHandler);
