function navbaropen(){
    fadein('.overlay', 3);
    slidein('.accordion-content', 'left', '0%');
}

function navbarclose(){
    slideout('.accordion-content', 'left', '-100%');
    fadeout('.overlay');
}

function extendElipsisCutoff(classname){
    $(classname).dotdotdot({
        elipsis: '...',
        wrap: 'letter',
        watch: true,
        //after: a.readmore
      }
    );
}

function onlink(link){
  window.location.assign(link);
}

$(document).ready(function() {
  var mainMarginTop = $('#title').height()*1.6;
  $('#main').css('margin-top', mainMarginTop+"px");
  extendElipsisCutoff(".card-elipsis");
}
)
