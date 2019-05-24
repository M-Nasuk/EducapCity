document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');
  document.querySelector('html').dataset.scroll;

  // LOAD HEADER EVERY PAGE
  $.get('resources/src/header.php')
  .done(function(response) {
    $('body').prepend(response);

    // BUTTON DISPLAY MENU MOBILE
    $('#b_menu').click(function() {
      if ($('nav').is(':hidden')) {
        $('nav').slideDown('slow');
      } else {
        $('nav').slideUp('slow');
      }
    });

    // BUTTON DISPLAY SUB-MENU MOBILE
    $('.b-arrow').click(function() {
      if ($(this).next().is(':hidden')) {
        $(this).next().slideDown('slow');
        $(this).children().removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-right');
      } else {
        $(this).next().slideUp('slow');
        $(this).children().removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-down');
      }
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

      $('.nav-ul-apropos > li:first-child a').click(function(e) {
        scrollToAnchor('sec_de_capsaaa');
        window.location.hash = "De CAP SAAA";
        e.preventDefault();
      });
      $('.nav-ul-apropos > li:last-child a').click(function(e) {
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
        $('#sec_etape_capitale').addClass('ptop_nav');
      }

      if (location.hash == "#Cap%20Rallye") {
        location.href = "#sec_cap_rallye";
        location.hash = "Cap Rallye";
      } else if (location.hash == "#Cap%20Classe") {
        location.href = "#sec_cap_classe";
        location.hash = "Cap Classe";
      } else if (location.hash == "#Etape%20Capitale") {
        location.href = "#sec_etape_capitale";
        location.hash = "Etape Capitale";
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
      } else if (location.hash == "#Etape%20Capitale" && isChrome) {
        location.href = "#sec_etape_capitale";
        setTimeout(function () {
          location.hash = "Etape Capitale";
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

      $('#div_caps > div:first-child a, .nav-ul-programme > li:first-child a').click(function(e) {
        scrollToAnchor('sec_cap_classe');
        window.location.hash = "Cap Classe";
        e.preventDefault();
      });
      $('#div_caps > div:nth-child(2) a, .nav-ul-programme > li:nth-child(2)').click(function(e) {
        scrollToAnchor('sec_cap_rallye');
        window.location.hash = "Cap Rallye";
        e.preventDefault();
      });
      $('.nav-ul-programme > li:last-child a').click(function(e) {
        scrollToAnchor('sec_etape_capitale');
        window.location.hash = "Etape Capitale";
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
    switch (location.href.split('/').pop()) {
      case "Nos%20Editions":
        $.get('resources/src/page_nos_editions.php')
        .done(function(response) {
          $('#body_nos_editions').append(response);
        });
        break;
      case "Edition%202019":
        $.get('resources/src/editions/page_edition_2019.php')
        .done(function(response) {
          $('#body_nos_editions').append(response);
          document.title = "L'Edition 2019";
        });
        break;
      case "Edition%202018":
        $.get('resources/src/editions/page_edition_2018.php')
        .done(function(response) {
          $('#body_nos_editions').append(response);
          document.title = "L'Edition 2018";
        });
        break;
      case "Edition%202017":
        $.get('resources/src/editions/page_edition_2017.php')
        .done(function(response) {
          $('#body_nos_editions').append(response);
          document.title = "L'Edition 2017";
        });
        break;
      case "Edition%202016":
        $.get('resources/src/editions/page_edition_2016.php')
        .done(function(response) {
          $('#body_nos_editions').append(response);
          document.title = "L'Edition 2016";
        });
        break;
      default:
    }
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
        if (location.hash == "#Organiser") {
          location.href = "#sec_organiser";
          location.hash = "Organiser";
        }
        if ($(document).width() > 1025) {
          $('#sec_organiser').addClass('ptop_nav');
        }
        $('.nav-ul-participer > li:first-child a').click(function(e) {
          scrollToAnchor('sec_organiser');
          window.location.hash = "Organiser";
          e.preventDefault();
        });
      });
    }, 100);
    setTimeout(function () {
      $.get('resources/src/participer/page_accueillir.php')
      .done(function(response) {
        $('#sec_organiser').after(response);
        if (location.hash == "#Accueillir") {
          location.href = "#sec_accueillir";
          location.hash = "Accueillir";
        }
        if ($(document).width() > 1025) {
          $('#sec_accueillir').addClass('ptop_nav');
        }
        $('.nav-ul-participer > li:nth-child(2) a').click(function(e) {
          scrollToAnchor('sec_accueillir');
          window.location.hash = "Accueillir";
          e.preventDefault();
        });
      });
    }, 200);
    setTimeout(function () {
      $.get('resources/src/participer/page_partenaire.php')
      .done(function(response) {
        $('#sec_accueillir').after(response);
        if (location.hash == "#Partenaire") {
          location.href = "#sec_partenaire";
          location.hash = "Partenaire";
        }
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
        if ($(document).width() > 1025) {
          $('#sec_partenaire').addClass('ptop_nav');
        }
        $('.nav-ul-participer > li:nth-child(3) a').click(function(e) {
          scrollToAnchor('sec_partenaire');
          window.location.hash = "Partenaire";
          e.preventDefault();
        });
      });
    }, 300);
    // setTimeout(function () {
    //   $.get('resources/src/participer/page_benevole.php')
    //   .done(function(response) {
    //     $('#sec_partenaire').after(response);
    //     if (location.hash == "#Benevole") {
    //       location.href = "#sec_benevole";
    //       location.hash = "Benevole";
    //     }
    //     if ($(document).width() > 1025) {
    //       $('#sec_benevole').addClass('ptop_nav');
    //     }
    //     $('.nav-ul-participer > li:nth-child(4) a').click(function(e) {
    //       scrollToAnchor('sec_benevole');
    //       window.location.hash = "Benevole";
    //       e.preventDefault();
    //     });
    //   });
    // }, 100);
    // setTimeout(function () {
    //   $.get('resources/src/participer/page_don.php')
    //   .done(function(response) {
    //     $('#sec_benevole').after(response);
    //     if (location.hash == "#Don") {
    //       location.href = "#sec_don";
    //       location.hash = "Don";
    //     }
    //     if ($(document).width() > 1025) {
    //       $('#sec_don').addClass('ptop_nav');
    //     }
    //     $('.nav-ul-participer > li:nth-child(5) a').click(function(e) {
    //       scrollToAnchor('sec_don');
    //       window.location.hash = "Don";
    //       e.preventDefault();
    //     });
    //   });
    // }, 100);
  }

  // LOAD PAGE CONTACT
  if ($('#body_contact').length) {
    $.get('resources/src/page_contact.php')
    .done(function(response) {
      $('#body_contact').append(response);
    });
  }


})
