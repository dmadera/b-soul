jQuery.fn.exists = function() {
  return this.length > 0;
}

var navbarHandler = function() {
  var navbar = $('#mainNav');
  var scroll = $(window).scrollTop();
  var path = window.location.pathname;

  if($('body .welcome').length == 0 || $(window).width() < 992 || scroll > 0) {
    navbar.show();
  } else {
    navbar.hide();
  }
}

$(function() {
  $("svg[src*='.svg']").each(function() {
    var img = $(this);
    $.get(img.attr("src"), function(svg) {
      img.replaceWith(svg);
    }, 'text');
  });

  navbarHandler();
  $(window).resize(navbarHandler);
  $(window).scroll(navbarHandler);

  $(".datepicker").datepicker($.datepicker.regional["cs"]);
  $('.datepicker').datepicker({});

  $(window).click(function(e) {
    $('.video').each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
  });

  var navMain = $('#mainNav .navbar-collapse');
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});
