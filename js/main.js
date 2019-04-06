document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');


  $.get('resources/src/header.php')
  .done(function(response) {
    $('body').prepend(response);
    $('#menu > ul > li a h3').addClass('jah_font');
    $('#menu > ul > li ul li').addClass('jah_font');
    // $('header').addClass('container');
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
    $('main').addClass('container');
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

  $.get('resources/src/aside.php')
  .done(function(response) {
    $('body').append(response);
  });

  $.get('resources/src/embarquez.php')
  .done(function(response) {
    $('main').append(response);

  });

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

  $.get('resources/src/footer.php')
  .done(function(response) {
    $('body').append(response);
    $('footer').addClass('container');
  });

})
