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
    var hover, nonhover;
    $.get('../images/welcome-screen/join-us-hover.svg', function(svg) {
        hover = svg;
    }, 'text');

    $.get('../images/welcome-screen/join-us.svg', function(svg) {
        nonhover = svg;
    }, 'text');

    $('#joinUsPanel div').hover(function() {
            $(this).find('svg').replaceWith(hover);
        },
        function() {
            $(this).find('svg').replaceWith(nonhover);
        }
    );
}

$(joinUsHandler);
$(svgHandler);
$(videoHandler);
