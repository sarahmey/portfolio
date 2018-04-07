// // direct browser to top right away
// if (window.location.hash)
//     scroll(0,0);
// // takes care of some browsers issue
// setTimeout(function(){scroll(0,0);},1);

// $(function(){
//     //your current click function
//     $('.scroll').on('click',function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop:$($(this).attr('href')).offset().top + 'px'
//         },1000,'swing');
//     });
    
//     // if we have anchor on the url (calling from other page)
//     if(window.location.hash){
//         // smooth scroll to the anchor id
//         $('html,body').animate({
//             scrollTop:$(window.location.hash).offset().top + 'px'
//         },1000,'swing');
//     }
// });



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });