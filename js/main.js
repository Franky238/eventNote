$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Get EventNote', 'Second', 'Third'],

        onLeave: function(anchorLink, index) {
            $(".move-up-down").css({
                top: (index - 1) * 100 +"%"
            }).find(".img-display").delay(550).queue(function (next) {
                $(this).css('background-position-x', '-'+(index - 1)*256+"px");
                next();
            })
        }
    });
});