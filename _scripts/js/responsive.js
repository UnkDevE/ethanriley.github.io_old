function show(element){
  $(element).css('display', 'block');
}
function hide(element){
  $(element).css('display', 'none');
}


function navbaropen(){
    show('.accordion-content');
    $('.accordion-content').css('overflow', 'auto');
    show('.overlay');
}

function navbarclose(){
    hide('.accordion-content');
    $('.accordion-content').css('overflow', 'hidden');
    hide('.overlay');
}

$(document).ready(function() {
  var mainMarginTop = $('#title').height()*2;
  $('main').css('margin-top', mainMarginTop+"px");
}
)
