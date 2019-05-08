$(document).ready(function() {

  // LOAD ASIDE
  if ($(document).width() > 1025) {
    $.get('resources/src/aside.php')
    .done(function(response) {
      $('main').append(response);
      alterAside();
    });
  }

  // LOAD EMBARQUEZ SCRIPT
  if ($(document).width() > 1025) {
    setTimeout(function() {
      $.get('resources/src/embarquez.php')
      .done(function(response) {
        $('aside').after(response);
      });
    }, 100);

  } else {
    setTimeout(function() {
      $.get('resources/src/embarquez.php')
      .done(function(response) {
        $('main').append(response);
      });
    }, 100);
  }



  // SEND MAIL FORM
  $(document).on('click', '#form_button', function(e) {
    e.preventDefault();
    let post_data = [];
    let form_name = document.querySelector('[name=contact_nom]');
    post_data.push(form_name.value);
    let form_email = document.querySelector('[name=contact_email]');
    post_data.push(form_email.value);
    let form_subject = document.querySelector('[name=contact_sujet]');
    post_data.push(form_subject.value);
    let form_content = document.querySelector('[name=contact_message]');
    post_data.push(form_content.value);
    let form_file = document.querySelector('[name="files[]"]');
    let file_big = false;
    let no_content = false;
    let email_invalid = false;

    console.log(post_data);
    $.each(post_data, function(i, str) {
      if ($.trim(str) == "") {
        no_content = true;
      }
    });

    ;
    $.each(form_file.files, function(i, file) {
      if (file.size > 3145728) {
        file_big = true;
      }
    });

    if (file_big) {
      alert("Vos fichiers sont trop volumineux, veuillez choisir des fichiers de moins de 3mo !");
    } else if (no_content) {
      alert("Il manque des informations dans le formulaire.");
    }  else if (validate(form_email)) {
      alert("Veuillez entre une adresse mail valide.");
    }
    else {
      let data = new FormData();
      data.append('name', form_name.value);
      data.append('email', form_email.value);
      data.append('subject', form_subject.value);
      data.append('content', form_content.value);
      $.each(form_file.files, function(i, file) {
        data.append('files[]', file);
      });

      fetch("resources/src/send_mail.php", {
        method: "POST",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
        },
        body: data
      })
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
    }
  });


  // LOAD FOOTER
  $.get('resources/src/footer.php')
  .done(function(response) {
    $('main').after(response);
  });



})
