//Prevent page scrolling when spacebar is pressed
$(document).keydown(function (e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if ((key == 32) && (e.target.className != null) && (e.target.className.indexOf("ui-button") != -1))
       e.preventDefault();
 });


//Get propper height for main
//var windowHeight = $(window).height();
//$(".content").css('margin-top', windowHeight);

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

//love akame
    if ( window.addEventListener ) {
        var kkeys = [], racfar = "76,79,86,69,32,65,75,65,77,69";
        window.addEventListener("keydown", function(e){
                kkeys.push( e.keyCode );
                if ( kkeys.toString().indexOf(racfar) >= 0 ) {
                    // run code here    
                    $('#rusac').modal('show');
                    kkeys = [];
                }
        }, true);
}

//nicescroll options
$(document).ready(function() { 
    $("html").niceScroll({
        zindex: 99999999999999999,
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