$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {   // If page is scrolled more than 50px
        $('#to-top').fadeIn(300, 'linear');    // Fade in the arrow
    } else {
        $('#to-top').fadeOut(300);   // Else fade out the arrow
    }
});
$('#to-top').click(function() {   // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0         // Scroll to top of body
    }, 500);
});
