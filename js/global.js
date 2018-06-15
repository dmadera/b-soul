jQuery.fn.exists = function() {
    return this.length > 0;
}

$(function() {
    $("svg[src*='.svg']").each(function() {
      var img = $(this);
      $.get(img.attr("src"), function(svg) {
          img.replaceWith(svg);
      }, 'text');
    });
    // if scroll is on top, hide navbar
    $('#mainNav').hide();
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var navbar = $('#mainNav');
      if(scroll > 50) {
        navbar.show();
      } else {
        navbar.hide();
      }
    });


    $(".datepicker").datepicker($.datepicker.regional["cs"]);
    $('.datepicker').datepicker({
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
