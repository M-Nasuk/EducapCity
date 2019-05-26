$(document).ready(function() {

  // LOAD ASIDE
  if ($(document).width() > 1025 && !$('#body_contact').length) {
    $.get('resources/src/aside.php')
    .done(function(response) {
      $('main').append(response);
      // alterAside();
    });
  }

  // LOAD EMBARQUEZ SCRIPT
  if ($(document).width() > 1025) {
    setTimeout(function() {
      if($('#body_contact').length) {
        $.get('resources/src/embarquez.php')
        .done(function(response) {
          $('main').append(response);
          $('[name="files[]"]').change(function() {
            if ($('[name="files[]"]')[0].files.length == 1) {
              $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichier sélectionné.');
            } else {
              $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichiers sélectionnés.');
            }
          });
        });
        $.get('resources/src/aside.php')
        .done(function(response) {
          $('#embarquez').after(response);
        });
      } else {
        $.get('resources/src/embarquez.php')
        .done(function(response) {
          $('main').append(response);
          // $('aside').after(response);
          $('[name="files[]"]').change(function() {
            if ($('[name="files[]"]')[0].files.length == 1) {
              $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichier sélectionné.');
            } else {
              $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichiers sélectionnés.');
            }
          });
        });
      }
    }, 200);

  } else {
    setTimeout(function() {
      $.get('resources/src/embarquez.php')
      .done(function(response) {
        $('main').append(response);
        $('[name="files[]"]').change(function() {
          if ($('[name="files[]"]')[0].files.length == 1) {
            $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichier sélectionné.');
          } else {
            $(".item-e > p").text($('[name="files[]"]')[0].files.length + ' fichiers sélectionnés.');
          }
        });
      });
    }, 200);
  }




  // SEND MAIL FORM
  $(document).on('click', '#form_button', function(e) {
    e.preventDefault();

    let post_data = [];
    let form_name = document.querySelector('[name=contact_nom]');
    let form_email = document.querySelector('[name=contact_email]');
    let form_subject = document.querySelector('[name=contact_sujet]');
    let form_content = document.querySelector('[name=contact_message]');
    let form_file = document.querySelector('[name="files[]"]');
    post_data.push(form_name.value);
    post_data.push(form_email.value);
    post_data.push(form_subject.value);
    post_data.push(form_content.value);
    let file_big = false;
    let file_ext = false;
    let no_content = false;
    let email_invalid = false;

    // console.log(post_data);
    $.each(post_data, function(i, str) {
      if ($.trim(str) == "") {
        no_content = true;
      }
    });
    // if (form_file.files.length > 1) {
    //   $(".item-e > p").text(form_file.files.length + 'fichiers sélectionnés.');
    // }
    $.each(form_file.files, function(i, file) {
      if (file.size > 52428800) {
        file_big = true;
      } else if (file.name.split('.').pop()) {
        switch (file.name.split('.').pop()) {
          case 'pdf':
            file_ext = false;
            break;
          case 'doc':
            file_ext = false;
            break;
          case 'docx':
            file_ext = false;
            break;
          case 'odt':
            file_ext = false;
            break;
          case 'jpg':
            file_ext = false;
            break;
          case 'jpeg':
            file_ext = false;
            break;
          case 'png':
            file_ext = false;
            break;
          // case 'zip':
          //   file_ext = false;
          //   break;
            default:
            file_ext = true;
        }
      }
    });

    if (file_big) {
      alert("Vos fichiers sont trop volumineux, veuillez choisir des fichiers de moins de 3mo !");
    } else if (no_content) {
      alert("Il manque des informations dans le formulaire.");
    } else if (validate(form_email)) {
      alert("Veuillez entre une adresse mail valide.");
    } else if (file_ext) {
      alert("Choisissez un bon format de fichier.")
    }
    else {
      $('#form_button').css('visibilty', 'hidden');
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
        if (response == 'Message has been sent') {
          $('.div_form').css('position', 'relative');
          $('.form').css({
            'filter': 'blur(15px)'
          });
          $('.sent').text("Votre message a bien été envoyé, Merci.").css({
            'position': 'absolute',
            'font-size': '3em',
            'top': '0',
            'text-align': 'center',
            'padding-top': '25%',
            'width': $('.form').width(),
            'height': $('.form').height()
          });
        }
        console.log(response);
      })
      .catch(error => console.error(error));
    }
  });


  // LOAD FOOTER
  setTimeout(function() {
    $.get('resources/src/footer.php')
    .done(function(response) {
      $('main').after(response);
    });
  }, 300);



})
