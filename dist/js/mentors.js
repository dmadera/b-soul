var toggleMentorInfo = function (div) {
    var divs = div.find('[data_toggle="showed"], [data_toggle="hidden"]')

    divs.toggleClass("hide")
}

$(function () {
    $('.mentors .mentor [data_toggle="hidden"]').addClass("hide")

    $(".mentors .mentor").addClass("cursor-pointer")
    $(".mentors .mentor").click(function () {
        toggleMentorInfo($(this))
    })
})
