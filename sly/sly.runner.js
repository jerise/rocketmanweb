$(document).ready(function(){

        $(window).resize(function(e) {
                $frame.sly('reload');
        });

            
            
        (function () {
                var $frame = $('#smart');
                var $wrap  = $frame.parent();

                // Call Sly on frame
                $frame.sly({
                        horizontal: 1,
                        itemNav: 'forceCentered',
                        smart: 1,
                        activateMiddle: 1,
                        mouseDragging: 1,
                        touchDragging: 1,
                        releaseSwing: 1,
                        startAt: 0,
                        pagesBar: $wrap.find('.pages'),
                        activatePageOn: 'click',
                        scrollBy: 1,
                        speed: 1500,
                        elasticBounds: 1,
                        easing: 'easeOutExpo',
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1,

                        // Scrolling
                        scrollSource: null, // Element for catching the mouse wheel scrolling. Default is FRAME.
                        scrollBy:     0,    // Pixels or items to move per one mouse scroll. 0 to disable scrolling.
                        
                        // Cycling
                        cycleBy: 'items',
                        cycleInterval: 4000,
                        pauseOnHover: 1,                        
                        
                        // Buttons
                        prev: $wrap.find('.prev'),
                        next: $wrap.find('.next')
                });  
             


            }());       
            

});