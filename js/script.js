$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$('#exhibitions-years .slide-image ul.indicator li a').on('click', function(e) {
  var index = $('ul.indicator li').index($(this).parent());
  $('#exhibitions-years .slide-image ul.image li').css({'display': 'none'});
  $('#exhibitions-years .slide-image ul.image li:eq(' + index + ')').css({'display': 'block'});
  $('#exhibitions-years .slide-image ul.indicator li').removeClass('on');
  //$('#main-visual ul.indicator li:eq(' + index + ').addClass('on');
  $(this).parent().addClass('on');
  e.preventDefault();
});

