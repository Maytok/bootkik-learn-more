  /* -------------------------------------------------------------------------
     begin Scroll Down Button
   * ------------------------------------------------------------------------- */
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();
  /* -------------------------------------------------------------------------
     end Scroll Down Button
   * ------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------
     begin Back To Top Button
   * ------------------------------------------------------------------------- */    
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - 120
        }, 1000);
        return false;
      }
    }
  });
});

if ($('#top').length) {
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() > 250) {
      jQuery( ".tcom-back-to-top" ).fadeIn();
  } else {
      jQuery( ".tcom-back-to-top" ).fadeOut();
  }
});
}
  /* -------------------------------------------------------------------------
     end Back To Top Button
   * ------------------------------------------------------------------------- */


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".zoom img").css({
    transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
    //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
    //"-webkit-filter": "blur(" + (scroll/200) + "px)",
    //filter: "blur(" + (scroll/200) + "px)"
  });
});