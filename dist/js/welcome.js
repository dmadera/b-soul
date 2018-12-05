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
  console.log("videohandler");
  var video = $('.bgvideo');
  const hostname = window.location.hostname;

  if(!isMobile() && !hostname.includes("localhost") && !hostname.includes("127.0.0.1")) {
    video.addClass('playable');
  }

  if(video.hasClass('playable')) {
    setTimeout(function() {
      video.attr('loop', 'true');
      video[0].play();
    }, 2300);

    video.on('abort ended error', function() {
      video[0].load();
    });
  }
}

var videoScrollHandler = function() {
  var scroll = $(window).scrollTop();
  var video = $('.bgvideo');

  if(video.hasClass('playable')) {
    if(scroll > 500) {
      video[0].pause();
    } else {
      video[0].play();
    }
  }
}

$(svgHandler);
$(videoHandler);
