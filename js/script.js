function pauseslider() {
  $('#slider').flexslider("pause");
}
function playslider() {
  $('#slider').flexslider("play");
}
function resumeslider() {
  $('#slider').flexslider("next"); $('#slider').flexslider("play");
}

function startCounter() {
  if ($(window).scrollTop() > 300) {
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
