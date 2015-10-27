function navbaropen(){
    fadein('.overlay', 3);
    slidein('.accordion-content', 'left', '0%');
}

function navbarclose(){
    slideout('.accordion-content', 'left', '-100%');
    fadeout('.overlay');
}


$(document).ready(function() {
  var mainMarginTop = $('#title').height()*2;
  $('#main').css('margin-top', mainMarginTop+"px");
}
)
