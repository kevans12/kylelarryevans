$(document).ready(function() {
  //change the integers below to match the height of your upper div, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    if ($(window).scrollTop() > 650) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 651) {
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
 // $('.hover').bind('touchstart touchend', function(e) {
 //    e.preventDefault();
 //    $(this).toggleClass('hover_effect');
 // });
 //to get the collapsed dropdown to close on a click
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});
//navbar
$("#bs-example-navbar-collapse-1 li").on("click", function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });

function openProdInfo(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//to get the collapsed dropdown to close on a click
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
 });

});
