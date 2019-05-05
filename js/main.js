document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');
  document.querySelector('html').dataset.scroll;

  // LOAD HEADER EVERY PAGE
  $.get('resources/src/header.php')
  .done(function(response) {
    $('body').prepend(response);

    // BUTTON DISPLAY MENU MOBILE
    $('#b_menu').click(function() {
      if($('nav').css('display') == 'none') {
        $('nav').css('display', 'flex');
      } else {
        $('nav').css('display', 'none');
      };
    });

    // The debounce function receives our function as a parameter
    const debounce = (fn) => {

      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {

        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {

          // Call our function and pass any params we received
          fn(...params);
        });

      }
    };
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
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
      if (location.hash == "#sec_de_capsaaa") {
        location.hash = "De CAP SAAA";
      } else if (location.hash == "#sec_du_pacte") {
        location.hash = "Du Pacte de Fraternité";
      }
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if (location.hash == "#De%20CAP%20SAAA" && isChrome) {
        location.href = "#sec_de_capsaaa";
        setTimeout(function () {
          window.location.hash = "De CAP SAAA";
        }, 100);
      } else if (location.hash == "#Du%20Pacte%20de%20Fraternit%C3%A9" && isChrome) {
        location.href = "#sec_du_pacte";
        setTimeout(function () {
          location.hash = "Du Pacte de Fraternité";
        }, 100);
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
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if (location.hash == "#Cap%20Rallye" && isChrome) {
        location.href = "#sec_cap_rallye";
        setTimeout(function () {
          window.location.hash = "Cap Rallye";
        }, 100);
      } else if (location.hash == "#Cap%20Classe" && isChrome) {
        location.href = "#sec_cap_classe";
        setTimeout(function () {
          location.hash = "Cap Classe";
        }, 100);
      }

      $('.slider-for').slick({
       slidesToShow: 9,
       infinite: true,
       arrows: false,
       fade: true,
       asNavFor: '.slicker'
      });
      $('.slicker').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 1500
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 1500
            }
          }
        ]
      });

      $('#div_caps > div:first-child a, #menu > ul > li:nth-child(3) > ul > li:first-child a').click(function(e) {
        scrollToAnchor('sec_cap_classe');
        window.location.hash = "Cap Classe";
        e.preventDefault();
      });
      $('#div_caps > div:nth-child(2) a, #menu > ul > li:nth-child(3) > ul > li:last-child a').click(function(e) {
        scrollToAnchor('sec_cap_rallye');
        window.location.hash = "Cap Rallye";
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
    });
  }

  // LOAD PAGE PARTICIPER
  if ($('#body_participer').length) {
    $.get('resources/src/page_participer.php')
    .done(function(response) {
      $('#body_participer').append(response);
    });
    $.get('resources/src/participer/page_organiser.php')
    .done(function(response) {
      $('#sec_intro_participer').after(response);
    });
    $.get('resources/src/participer/page_partenaire.php')
    .done(function(response) {
      $('#sec_organiser').after(response);
    });
    //  $.get('resources/src/participer/page_benevole.php')
    //   .done(function(response) {
    //     $('#sec_partenaire').after(response);
    //   });
    //  $.get('resources/src/participer/page_don.php')
    //   .done(function(response) {
    //     $('#sec_benevole').after(response);
    //   });
  }

  // // LOAD PAGE ORGANISER
  // if ($('#body_organiser').length) {
  //   $.get('resources/src/participer/page_organiser.php')
  //   .done(function(response) {
  //     $('#body_organiser').append(response);
  //   });
  // }
  //
  // // LOAD PAGE PARTENAIRE
  // if ($('#body_partenaire').length) {
  //   $.get('resources/src/participer/page_partenaire.php')
  //   .done(function(response) {
  //     $('#body_partenaire').append(response);
  //   });
  // }
  //
  // // LOAD PAGE BENEVOLE
  // if ($('#body_benevole').length) {
  //   $.get('resources/src/participer/page_benevole.php')
  //   .done(function(response) {
  //     $('#body_benevole').append(response);
  //   });
  // }
  //
  // // LOAD PAGE DON
  // if ($('#body_don').length) {
  //   $.get('resources/src/participer/page_don.php')
  //   .done(function(response) {
  //     $('#body_don').append(response);
  //   });
  // }

})
