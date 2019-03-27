document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');

  $.get('resources/src/header.php')
  .done(function(response) {
    $('body').prepend(response);
    $('#menu > ul > li a h3').addClass('jah_font');
    $('#menu > ul > li ul li').addClass('jah_font');
  });

  $(document).on('click', '#b_menu', function() {
    if($('nav').css('display') == 'none') {
      $('nav').css('display', 'flex');
    } else {
      $('nav').css('display', 'none');
    };
  });

  $.get('resources/src/main.php')
  .done(function(response) {
    $('body').append(response);
    $('#accueil_area').addClass('jah_font');
    $('.flexslider').flexslider({
      animation: "slide",
      video: true
    });
  });

  // var player, firstScriptTag, tag = document.createElement('script');
  //
  // //async youtube api script reference
  // tag.src = "https://www.youtube.com/iframe_api";
  // firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //
  // function onYouTubeIframeAPIReady() {
  //    player = new YT.Player('player', {
  //        width: 960,
  //        height: 540,
  //        videoId: 'XXXX',
  //        playerVars: { 'autoplay': 0, 'showinfo': 0, 'loop': 1, 'rel': 0, 'vq': 'hd1080', 'controls': 0 },
  //        events: {
  //            'onStateChange': function(event) {
  //                 controlSlider(event);
  //            }
  //        }
  //     });
  // };
  //
  // function toggleVideo(state) {
  //   if(state == "pause") {
  //       player.pauseVideo();
  //   } else {
  //       player.playVideo();
  //   }
  // }
  //
  // function controlSlider(event) {
  //
  //   var playerstate=event.data;
  //   console.log(playerstate);
  //   if(playerstate==1 || playerstate==3){
  //       $('.flexslider.main').flexslider("pause");
  //   }
  //   if(playerstate==2){
  //       $('.flexslider.main').flexslider("play");
  //   }
  // }


})
