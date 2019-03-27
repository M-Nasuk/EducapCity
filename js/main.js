document.addEventListener('DOMContentLoaded', ()=> {

  let body = document.querySelector('body');

  $.get('resources/src/header.php')
  .done(function(response) {$('body').prepend(response)});

  $(document).on('click', '#b_menu', function() {
    if($('nav').css('display') == 'none') {
      $('nav').css('display', 'flex');
    } else {
      $('nav').css('display', 'none');
    };
  })

  // $(document).on('click', '#menu > ul li a', function() {
  //   $(this).nextUntil('li').toggle();
  // })
})
