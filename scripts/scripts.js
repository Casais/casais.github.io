var scrollWithAnimation = function(selector, offset) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top - offset
  }, 1000, 'easeOutQuad');
};

$('a[href^="#"]').on('click', function() {
  scrollWithAnimation($.attr(this, 'href'), 10);
  return false;
});

$('.js-learn-more').on('click', function() {
  scrollWithAnimation('#experience', 10);
  return false;
});
