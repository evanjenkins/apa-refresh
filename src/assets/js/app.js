$(document).foundation();

(function($) {

  var changeBgColor = function (slide) {
    var color = '';
    if (typeof slide === 'undefined') {
      slide = $('.five-promises-slider .slide-1');
      color = slide.attr('data-promise-color');
      $('.five-promises-slider').css({
        backgroundColor: color
      });
    } else {

      color = $('.five-promises-slider .slides .slide-' + (slide + 1) + '').attr('data-promise-color');
      $('.five-promises-slider').animate({
        backgroundColor: $.Color(color)
      });
    }
  };

  changeBgColor();

  // Can also be used with $(document).ready()
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });

    $('.five-promises-slider').flexslider({
      animation: "fade",
      smoothHeight: false,
      slideshow: true,
      manualControls: '.five-promises-slider .attachment-before li',
      before: function(e) {
        changeBgColor(e.animatingTo);
      }
    });
  });
})(jQuery);
