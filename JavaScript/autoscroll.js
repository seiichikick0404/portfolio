$('#about-btn').click(function() {
  const  position1 = $('.about-title').offset().top;
  $('html, body').animate({scrollTop:position1});
});