$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Get EventNote', 'Daily Planner', 'Third', 'hello'],

        onLeave: function(anchorLink, index) {
            $(".move-up-down").css({
                top: (index - 1) * 100 +"%"
            }).find(".img-display").delay(550).queue(function (next) {
                $(this).css('background-position', '-'+(index - 1)*256+"px 0");
                next();
            })
        },
        afterLoad: function (anchorLink, index, direction) {
            if(index == 2) {
                $(".move-up-down").css({
                    'transform': 'translateX(360px)'
                });
                $('p.index-2').removeClass("invisible").addClass('zoomIn');
            }
        }
    });
});