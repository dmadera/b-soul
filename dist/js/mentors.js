var toggleMentorInfo = function(div) {
  var row1 = div.find('.row:first-child');
  var row2 = div.find('.row:last-child');

  if(row1.hasClass('d-none')) {
    row1.removeClass('d-none');
    row2.addClass('d-none');
  } else {
    row1.addClass('d-none');
    row2.removeClass('d-none');
  }
}

$(function() {
    $('.mentors .mentor').click(function() {
        toggleMentorInfo($(this));
    });
});
