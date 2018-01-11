var scrollWithAnimationFactory = function(selector, offset) {
  return function() {
    $('html, body').animate({
      scrollTop: $(selector).offset().top - offset
    }, 1000, 'easeOutQuad');
  };
};

$('a[href^="#"]').on('click', function() {
  var scrollWithAnimation = scrollWithAnimationFactory($.attr(this, 'href'), 10);
  scrollWithAnimation();
  return false;
});

$('.js-learn-more').on('click', function() {
  var scrollWithAnimation = scrollWithAnimationFactory('#experience', 10);
  scrollWithAnimation();
  return false;
});