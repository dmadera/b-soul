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
  //$('#mediaPanel a.close').click(function() {
  //$('#mediaPanel .content').empty();
  //$('#mediaPanel').hide();
  //event.stopPropagation();
  //});

  //$('#mediaPanel').click(function(event) {
  //event.stopPropagation();
  //});

  //$(window).click(function() {
  //if ($('#mediaPanel').is(':visible')) {
  //$('#mediaPanel .content').empty();
  //$('#mediaPanel').hide();
  //event.stopPropagation();
  //}
  //});
});
