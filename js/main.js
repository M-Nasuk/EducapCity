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


  // LOAD ASIDE
  if ($(document).width() > 1100) {
    $.get('resources/src/aside.php')
    .done(function(response) {
      $('body').append(response);
      alterAside();
    });
  }


  // LOAD PAGE ACCUEIL
  if ($('#body_accueil')) {
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
  if ($('#body_a_propos')) {
    $.get('resources/src/a_propos.php')
    .done(function(response) {
      $('#body_a_propos').append(response);
      // $('#sec_accueil').addClass('jah_font');
      // $('#sec_info_nbres div').addClass('jah_font');
      // $('.div_cap h4').addClass('jah_font');
    });
  }



  // LOAD PAGE PROGRAMME
  if ($('#body_programme')) {
    $.get('resources/src/page_programme.php')
    .done(function(response) {
      $('#body_programme').append(response);

      if (location.hash) {
        location.href = location.hash;
        if (location.hash == "#sec_cap_rallye") {
          location.hash = "Cap Rallye";
        } else if (location.hash == "#sec_cap_classe") {
          location.hash = "Cap Classe";
        }
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


  // LOAD EMBARQUEZ SCRIPT
  $.get('resources/src/embarquez.php')
  .done(function(response) {
    $('main').append(response);
  });


  // SEND MAIL FORM
  $(document).on('click', '#form_button', function(e) {
    let form_name = document.querySelector('[name=contact_nom]');
    let form_email = document.querySelector('[name=contact_email]');
    let form_subject = document.querySelector('[name=contact_sujet]');
    let form_content = document.querySelector('[name=contact_message]');

    e.preventDefault();

    fetch("resources/src/send_form.php", {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: form_name.value,
        email: form_email.value,
        subject: form_subject.value,
        content: form_content.value
      })
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));

  });


  // LOAD FOOTER
  $.get('resources/src/footer.php')
  .done(function(response) {
    $('main').after(response);
    $('footer').addClass('container');
  });



})
