var toggleMentorInfo = function(cell) {
    cell.find('.inner-cell').toggleClass('hidden');
    cell.find('h5').toggle();
}

$(function() {
    $('#mentors .cell').hover(function() {
        if (!$(this).hasClass('clicked')) {
            toggleMentorInfo($(this));
        }
    });

    $('#mentors .cell').click(function() {
        $(this).toggleClass('clicked');
    });
});
