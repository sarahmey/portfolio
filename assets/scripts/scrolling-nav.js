//jQuery to ad class to all a-tags in id toc
$(function() {
    var element = document.getElementById("toc");
    for (var i = 0; i < element.getElementsByTagName('a').length; i++) {
        element.getElementsByTagName('a')[i].classList.add("page-scroll");
    }
    
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-53
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
