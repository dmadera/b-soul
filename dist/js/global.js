jQuery.fn.exists = function() {
    return this.length > 0;
}

var navbarHandler = function() {
    var navbar = $('#mainNav');
    var scroll = $(window).scrollTop();
    var path = window.location.pathname;
    let showNavPages = ['/crew', '/signup'];
    var showNav = false;

    showNavPages.forEach(function(page) {
      if(path.startsWith(page)) {
        showNav = true;
        return;
      }
    });

    if(showNav || $(window).width() < 992 || scroll > 0) {
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
