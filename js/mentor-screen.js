var toggleMentorInfo = function(cell) {
    cell.find('.inner-cell').toggleClass('hidden');
    cell.find('h4').toggle();
}

$(function() {
    $('#mentors .cell').click(function() {
        toggleMentorInfo($(this));
    });
});
