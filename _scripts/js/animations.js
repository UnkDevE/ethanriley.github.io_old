//convenience functions for animation
function slideout(element, positiontag, endpostion){
    $(element).css(positiontag, endpostion);
    $(element).css('overflow', 'auto');
}
function slidein(element, positiontag, endpostion){
    $(element).css(positiontag, endpostion);
    $(element).css('overflow', 'hidden');
}
function fadeout(element){
  $(element).css('z-index', '-1');
  $(element).css('opacity', '0');
}
function fadein(element, index){
  $(element).css('z-index', index.toString());
  $(element).css('opacity', '1');
}
