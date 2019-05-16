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
      if ($(document).width() > 1025) {
        $('#sec_de_capsaaa').addClass('ptop_nav');
        $('#sec_du_pacte').addClass('ptop_nav');
      }

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
      if ($(document).width() > 1025) {
        $('#sec_cap_classe').addClass('ptop_nav');
        $('#sec_cap_rallye').addClass('ptop_nav');
      }

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

      $('.slicker').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<i class="fas fa-arrow-circle-left cr cc"></i>',
        nextArrow: '<i class="fas fa-arrow-circle-right cr cc"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '22%',
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 1500
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '25%',
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
      setTimeout(function () {
      $.get('resources/src/participer/page_organiser.php')
      .done(function(response) {
        $('#sec_intro_participer').after(response);
      });
    }, 100);
    setTimeout(function () {
      $.get('resources/src/participer/page_accueillir.php')
      .done(function(response) {
        $('#sec_organiser').after(response);
      });
    }, 200);
    setTimeout(function () {
      $.get('resources/src/participer/page_partenaire.php')
      .done(function(response) {
        $('#sec_accueillir').after(response);
        if ($(document).width() < 1024) {
          $('.partenaire_slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplay: true,
                  arrows: false,
                }
              }
            ]
          });
        }
      });
    }, 300);
    // setTimeout(function () {
    //   $.get('resources/src/participer/page_benevole.php')
    //   .done(function(response) {
    //     $('#sec_partenaire').after(response);
    //   });
    // }, 100);
    // setTimeout(function () {
    //   $.get('resources/src/participer/page_don.php')
    //   .done(function(response) {
    //     $('#sec_benevole').after(response);
    //   });
    // }, 100);


    if ($(document).width() > 1025) {
      $('#sec_organiser').addClass('ptop_nav');
      $('#sec_partenaire').addClass('ptop_nav');
      $('#sec_accueillir').addClass('ptop_nav');
      // $('#sec_benevole').addClass('ptop_nav');
      // $('#sec_don').addClass('ptop_nav');
    }
  }

  // LOAD PAGE CONTACT
  if ($('#body_contact').length) {
    $.get('resources/src/page_contact.php')
    .done(function(response) {
      $('#body_contact').append(response);
    });
  }


})
