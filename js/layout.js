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

$(function() {
    $('#joinUsPanel div.hover').hide();
    $('#joinUsPanel a').on({
        mouseenter: function() {
            console.log("TExt");
            $('#joinUsPanel div.hover').show("slide", { direction: "right" }, 100);
        },
        mouseleave: function() {
            $('#joinUsPanel div.hover').hide('slide', { direction: 'right' }, 100);
        }
    });
});


$(svgHandler);
$(videoHandler);
