// replace svg tags with content of svg file
var svgHandler = function() {
    $("svg[src*='.svg']").each(function() {
        var img = $(this);
        $.get(img.attr("src"), function(svg) {
            img.replaceWith(svg);
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
