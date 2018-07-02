jQuery.fn.exists = function() {
    return this.length > 0;
}

var navbarHandler = function() {
    var navbar = $('#mainNav');
    var scroll = $(window).scrollTop();

    if($(window).width() < 992 || scroll > 0) {
      $('body').css('padding-top', navbar.height()+10);
      navbar.show();
    } else {
      $('body').css('padding-top', '0');
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
