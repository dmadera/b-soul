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
