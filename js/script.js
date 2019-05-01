// Function that pauses the flexslider animation
function pauseslider() {
  $('#slider').flexslider("pause");
}

// Function that play the flexslider animation
function playslider() {
  $('#slider').flexslider("play");
}

// Function that resume the flexslider animation
function resumeslider() {
  $('#slider').flexslider("next"); $('#slider').flexslider("play");
}

// Function that launch a counter on a specific DOM Element, when scrolled over on the screen.
function startCounter() {
  if ($(window).scrollTop() > 800) {
    $(window).off("scroll", startCounter);
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
      });
    });
  }
}

// Function that change width & height css properties of an element
function reduceSizeImage() {
  if ($(window).scrollTop() > 50) {
    $(window).off("scroll", reduceSizeImage);
    $('#logo_hdr_ec').css({
      "width": "120px",
      "height": "170px"
    });
  }
}

// Function that scroll to a specific anchor on the page.
function scrollToAnchor(sid){
  let sTag = $("#"+ sid + "");
  $('html,body').animate({scrollTop: sTag.offset().top},'slow');
}

// Function that put the aside block at a certain position on every page except home page, on desktop view
function alterAside() {
  $('aside:not(#body_accueil aside)').css({
    "top": "300px"
  })
}
