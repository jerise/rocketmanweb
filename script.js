jQuery(document).ready(function(){

// menu تحرك 
    
$(document).ready(function() {
var stickyNavTop = $('#menu').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();   
if (scrollTop > stickyNavTop) {
$('#menu').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
} else {
$('#menu').css({ 'position': 'relative', 'width': '100%' });
}
};
stickyNav();
$(window).scroll(function() {
stickyNav();
});
});
});

// المميزات

$(document).ready(function(){
  jQuery("#click").click(function() {
      jQuery(".advantages").slideDown();
    });
    });
$(document).ready(function(){
  jQuery(".advantages").click(function() {
      jQuery(".advantages").slideUp();
    });
    });


$(document).ready(function() {
    jQuery(".advantages").hide(function() {
        jQuery("#click").scrollTop();
    });
    });

$(document).ready(function() {
   alert("لعرض المميزات اضغط على كلمة المميزات");
    });

// right click تعطيل ال

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('انت حاليا تضغط على الزر الايمن للفارة');
});

