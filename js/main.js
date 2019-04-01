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

  $.get('resources/src/page_accueil.php')
  .done(function(response) {

    $('#body_accueil').append(response);

    $('#sec_accueil').addClass('jah_font');
    $('#sec_info_nbres div').addClass('jah_font');
    $('.div_cap h4').addClass('jah_font');

    $('.flexslider').flexslider({
      animation: "slide",
      touch: true,
      controlNav: false,
      video: true,
      before: function(){ $('video').each( function() { $(this).get(0).load(); }); }
    });

    $(window).scroll(startCounter);

    // let r = document.querySelector('#div_info_regions').getBoundingClientRect();
    // console.log(r);

  });

  $.get('resources/src/embarquez.php')
  .done(function(response) {
    $('main').append(response);
  });


})
