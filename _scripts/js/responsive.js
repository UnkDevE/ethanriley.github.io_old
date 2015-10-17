function marginalize(){
  var mainMarginTop = $('#title').height();
  var mainMarginTop = mainMarginTop+mainMarginTop/2;
  $('main').css('margin-top', mainMarginTop+"px");
}
$('document').ready(marginalize);
$(window).resize(marginalize);
