// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100 && $('.site-wrapper').css("display") != "none") {
//         $('.site-wrapper').slideUp("slow", function() {
//             $('.site-wrapper').css({
//                 'display': 'none'
//             });
//             console.log('Done!');
//         });
//     }
// });

$(function() {
    $(".site-wrapper").click(function() {
        $(".site-wrapper").slideUp();
    });
});
