var toggleMentorInfo = function(cell) {
    cell.find('.inner-cell').toggleClass('hidden');
    cell.find('h4').toggle();
}

$(function() {
    $('#mentors .cell').click(function() {
        toggleMentorInfo($(this));
    });

    $('.mentor-info .item').click(function(event) {
        if ($('#mediaPanel').is(':visible')) {
            return;
        }
        var content = $(this).find('.content').get(0).outerHTML;
        $('#mediaPanel .content').replaceWith(content);
        $('#mediaPanel .content').removeClass('hidden');
        $('#mediaPanel').slideDown('fast');
        event.stopPropagation();
    })
});
