//Get propper height for main
var windowHeight = $(window).height();
$(".content").css('margin-top', windowHeight);

//scrolling pagination
$('body').scrollspy({ target: '.navbar' }) //scrollspy

$("a[href$='home']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});
//$("#home").click(function() {
// $('html,body').animate({scrollTop: $(".content-home").offset().top},'slow');
//});
$("a[href$='about']").click(function() {
    $('html,body').animate({scrollTop: $(".content-about").offset().top},'slow');
});
$("a[href$='points']").click(function() {
    $('html,body').animate({scrollTop: $(".content-points").offset().top},'slow');
});
$("a[href$='sub']").click(function() {
    $('html,body').animate({scrollTop: $(".content-sub").offset().top},'slow');
});
$("a[href$='youtube']").click(function() {
    $('html,body').animate({scrollTop: $(".content-youtube").offset().top},'slow');
});
$("a[href$='donate']").click(function() {
    $('html,body').animate({scrollTop: $(".content-donate").offset().top},'slow');
});

//nicescroll options
$(document).ready(function() { 
    $("html").niceScroll({
        touchbehavior: false, //Scroll by dragging main content
        scrollspeed: 60,
        cursorborderradius: "0",
        cursorborder: "0px solid #fff"
    });
});

//Stream Widget
var twitchUserName = 'flosd' // your name goes here
$(document).ready(function() {    
   $.getJSON("https://api.twitch.tv/kraken/streams/"+twitchUserName+"?callback=?",function(streamData) {
      console.log('Stream Data:', streamData) // debug message, shows all available data  
      if(streamData && streamData.stream) {
         // displayed if online
         $('#streamWidget').html("<a href='http://www.twitch.tv/"+twitchUserName+"' class='stream-live'>Currently Streaming</a>")
      } else {
         // displayed if offline
         $('#streamWidget').html("Currently Offline")
      }
   })
})