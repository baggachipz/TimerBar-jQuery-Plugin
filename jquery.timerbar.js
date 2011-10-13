/*
TimerBar jQuery plugin
Copyright (c) 2011 Mod0 Media LLC

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//create closure
(function($) {
  
  /**
  * plugin definition
  */
  $.fn.timerbar = function(options, callback) {
 
    // build main options before element iteration
    var opts = $.extend({}, $.fn.timerbar.defaults, options);
    
    // iterate and reformat each matched element
    return this.each(function() {
      
      // create the two layers; one on the top as a mask and the bottom one to move to the left
      var topLayer = $('<div class="timerbar-outer"></div>');
      var btmLayer = $('<div class="timerbar-inner"></div>');
	  
	  // add the layers into the dom
	  topLayer.append(btmLayer);
	  $(this).append(topLayer);
	
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      
      // set the top layer css properties
      topLayer.css({
      	overflow: 'hidden',
      	position: 'relative',
      	background: 'transparent',
      	width: $(this).width(),
      	height: $(this).height(),
      });
      
      // set the bottom layer css properties
      btmLayer.css({
        backgroundColor: o.backgroundColor,
        backgroundImage: o.backgroundImage,
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: topLayer.width(),
        height: topLayer.height(),
      });
      
      // start the animation
      btmLayer.animate({'left':'-'+topLayer.width()}, o.duration, callback);
      
    });
  };
  
  /**
  * plugin defaults
  */
  $.fn.timerbar.defaults = {
    backgroundColor: 'yellow',
    backgroundImage: null,
    duration: 10000,
  };
  
// end of closure
})(jQuery);