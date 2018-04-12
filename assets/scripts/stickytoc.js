$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        if ($(window).scrollTop() > 210) {
            $('#toc').addClass('navbar-fixed');
            let tocheight = $('#toc').height();
            $('.inhoud').css('padding-top', tocheight);
        }
        else{
            $('#toc').removeClass('navbar-fixed');
            $('.inhoud').css('padding-top', 0);
        } 
    });
  });