
function navbaropen(){
    $('.accordion-content').css('left', '0');
    $('.accordion-content').css('overflow', 'auto');
    $('.overlay').css('z-index', '6');
    $('.overlay').css('opacity', '1');
}

function navbarclose(){
    $('.accordion-content').css('left', '-100%');
    $('.accordion-content').css('overflow', 'hidden');
    $('.overlay').css('z-index', '-1');
    $('.overlay').css('opacity', '0');
}



function show(element, tag, endpostion){
    $(element).css(tag, endpostion);
    $(element).css('overflow', 'auto');
    newindex = parseint($(element).css('z-index'))+ 2;
    $(element).css('z-index', newindex.toString());
}

function hide(element, tag, endpostion){
    $(element).css(tag, endpostion);
    $(element).css('overflow', 'hidden');
    oldindex = parseint($(element).css('z-index'))+ 2;
    $(element).css('z-index', oldindex.toString());
}

$(document).ready(function() {
  var mainMarginTop = $('#title').height()*2;
  $('main').css('margin-top', mainMarginTop+"px");
}
)
