// JavaScript Document
var typed = new Typed('.element', {
 strings: ["2D Illustrator","Designer", "Artist"],
typeSpeed:50,
backSpeed:50,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
    AOS.init();
