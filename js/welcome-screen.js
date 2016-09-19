// replace svg tags with content of svg file
var svgHandler = function() {
    $("object-svg").each(function() {
        console.log($(this));
        var object = $(this);
        $.get(object.attr("src"), function(svg) {
            object.replaceWith(svg);
        }, 'text');
    });
}

var videoHandler = function() {
    var video = $('#bgvideo');
    setTimeout(function() {
        // video.attr('loop', 'true');
        // video[0].play();
    }, 3000);

    video.on('abort ended error paused', function() {
        $(this).load();
    });
}

var joinUsHandler = function() {
    $('#joinUsPanel a').hover(function() {
            $('#joinUsPanel div:not(.hover)').hide();
            $('#joinUsPanel div.hover').show();
        },
        function() {
            $('#joinUsPanel div.hover').hide();
            $('#joinUsPanel div:not(.hover)').show();
        }
    );
}



$(joinUsHandler);
$(svgHandler);
$(videoHandler);
