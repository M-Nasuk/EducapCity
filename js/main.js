document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');

  // LOAD HEADER EVERY PAGE
  $.get('resources/src/header.php')
  .done(function(response) {
    $('body').prepend(response);
    $('#menu > ul > li a h3').addClass('jah_font');
    $('#menu > ul > li ul li').addClass('jah_font');

    // BUTTON DISPLAY MENU MOBILE
    $('#b_menu').click(function() {
      if($('nav').css('display') == 'none') {
        $('nav').css('display', 'flex');
      } else {
        $('nav').css('display', 'none');
      };
    });
  });


  // LOAD PAGE ACCUEIL
  if ($('#body_accueil').length) {
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
    });
  }

  // LOAD PAGE A PROPOS
  if ($('#body_a_propos').length) {
    $.get('resources/src/page_a_propos.php')
    .done(function(response) {
      $('#body_a_propos').append(response);

      if (location.hash == "#De%20CAP%20SAAA") {
        location.href = "#sec_de_capsaaa";
        location.hash = "De CAP SAAA";
      } else if (location.hash == "#Du%20Pacte%20de%20Fraternit%C3%A9") {
        location.href = "#sec_du_pacte";
        location.hash = "Du Pacte de Fraternité";
      }

      $('#menu > ul > li:nth-child(2) > ul > li:first-child a').click(function(e) {
        scrollToAnchor('sec_de_capsaaa');
        window.location.hash = "De CAP SAAA";
        e.preventDefault();
      });
      $('#menu > ul > li:nth-child(2) > ul > li:last-child a').click(function(e) {
        scrollToAnchor('sec_du_pacte');
        window.location.hash = "Du Pacte de Fraternité";
        e.preventDefault();
      });
    });
  }

  // LOAD PAGE PROGRAMME
  if ($('#body_programme').length) {
    $.get('resources/src/page_programme.php')
    .done(function(response) {
      $('#body_programme').append(response);

      if (location.hash == "#Cap%20Rallye") {
        location.href = "#sec_cap_rallye";
        location.hash = "Cap Rallye";
      } else if (location.hash == "#Cap%20Classe") {
        location.href = "#sec_cap_classe";
        location.hash = "Cap Classe";
      }

      if ($(document).width() < 768) {
        $('.flexslider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 130,
          maxItems: 3,
          itemMargin: 5
        });
      } else if ($(document).width() > 768 && ($(document).width() < 1024)) {
        $('.flexslider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 140,
          maxItems: 5,
          itemMargin: 5
        })
      } else if ($(document).width() >= 1024) {
        $('.flexslider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 130,
          maxItems: 6,
          itemMargin: 5
        })
      }


      $('#div_caps > div:first-child a, #menu > ul > li:nth-child(3) > ul > li:first-child a').click(function(e) {
        scrollToAnchor('sec_cap_rallye');
        window.location.hash = "Cap Rallye";
        e.preventDefault();
      });
      $('#div_caps > div:nth-child(2) a, #menu > ul > li:nth-child(3) > ul > li:last-child a').click(function(e) {
        scrollToAnchor('sec_cap_classe');
        window.location.hash = "Cap Classe";
        e.preventDefault();
      });
    });

    // BUTTON DISPLAY OBJECTIVES
    $(document).on('click', '.div_objectifs button', function() {
      if($(this).next().css('display') == 'none') {
        $(this).next().css('display', 'block');
        $(this).children().removeClass('fa-rotate-90');
        $(this).children().addClass('fa-rotate-270');
      } else {
        $(this).next().css('display', 'none');
        $(this).children().removeClass('fa-rotate-270');
        $(this).children().addClass('fa-rotate-90');
      };
    });
  }

  // LOAD PAGE NOS EDITIONS
  if ($('#body_nos_editions').length) {
    $.get('resources/src/page_nos_editions.php')
    .done(function(response) {
      $('#body_nos_editions').append(response);

      // HERE MAP
      hMap();

      $('.b_cr').click(function() {
        $(".div_icon").toggle();
        $(".map > div:first-child > div:first-child > div:first-child > div > svg").toggle();
      });

    });
  }

})
