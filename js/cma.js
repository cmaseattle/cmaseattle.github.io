$(function() {
  var cats = $('#categories li');
  cats.on('click', function(){
    var cat = $(this).attr('class');
    console.log(cat);
    // update active class
    cats.removeClass('active');
    $(this).addClass('active');
    if(cat=='all') {
      $('.post').show();
    } else {
      $('.post').hide();
      $('.'+cat).show();
    }
  });
});