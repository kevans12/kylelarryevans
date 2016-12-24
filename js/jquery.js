$(document).ready(function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 580) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 581) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
// scrolling to anchors
  var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 700, function () {
        window.location.hash = href;
    });
    return false;
 });
 //for hovering on touchscreen
 $('.hover').bind('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
 });
});
