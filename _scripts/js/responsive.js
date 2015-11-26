function navbaropen(){
    fadein('.overlay', 3);
    slidein('.navbar', 'left', '0%');
}
function dropdown(id){
  element="#drop_"+id;
  $(element).css('height', '100%');
}

function navbarclose(){
    slideout('.navbar', 'left', '-100%');
    fadeout('.overlay');
}

function extendElipsisCutoff(classname){
    $(classname).dotdotdot({
        elipsis: '...',
        wrap: 'letter',
        watch: true,
      }
    );
}

function onlink(link){
  window.location.assign(link);
}

function mainmedia(type, srclink){
  var id="#main_"+type;
  if(id !== "#main_img"){
    $("#main_img").css('display','none');
  }
  if(id !== "#main_video"){
    $("#main_video").css('display','none');
  }
  else{
    $("#main_iframe").css('display','none');
  }
  if(id === "#main_iframe"){
    srclink = "http://"+srclink;
  }
  $(id).attr('src', srclink);
  $(id).css('display', 'block');

}

$(document).ready(function() {
  var mainMarginTop = $('#title').height()*1.6;//calculation for margins in main
  $('#main').css('margin-top', mainMarginTop+"px");

  extendElipsisCutoff(".card-elipsis");
//  $('.card-gallery-bar').css('width');
  $('button').click(function(){
    $('.card-important').append("<p>thankyou for your custom we shall get back to you shortly</p>");
  });
  $('button').click(function(){
    $('.card-data-colum').append("<p>thankyou for your custom we shall get back to you shortly</p>");
  });
}
)
