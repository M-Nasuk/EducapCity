$(document).ready(function() {

  // LOAD ASIDE
  if ($(document).width() > 1100) {
    $.get('resources/src/aside.php')
    .done(function(response) {
      $('main').append(response);
      alterAside();
    });
  }

  // LOAD EMBARQUEZ SCRIPT
  if ($(document).width() > 1100) {
    $.get('resources/src/embarquez.php')
    .done(function(response) {
      $('aside').after(response);
    });
  } else {
    $.get('resources/src/embarquez.php')
    .done(function(response) {
      $('main').append(response);
    });
  }



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
    // $('footer').addClass('container');
  });



})
