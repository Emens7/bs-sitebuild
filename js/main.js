
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('white');
    }

    else {
          $('nav').removeClass('white');
    }
});

$('nav').hover(function() {
      $('nav').addClass('white');
});

$('nav').mouseleave(function() {
      $('nav').removeClass('white');
});
  
  