$(document).ready(function() {
    // replace img tags with svg file
    $("svg[src*='.svg']").each(function() {
        var img = $(this);
        $.get(img.attr("src"), function(svg) {
            img.replaceWith(svg);
        }, 'text');
    });

    // video handler
    var video = $('#bgvideo');
    video.attr('loop', 'true');
    video[0].play();
    // after video is ended, show poster image 
    /* video.bind('ended', function() {
        video.load();
    });*/
});
