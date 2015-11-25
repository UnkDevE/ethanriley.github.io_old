/*

this is from my animation libarary

function slidein(element, positiontag, endpostion){
    $(element).css(positiontag, endpostion);
    $(element).css('overflow', 'hidden');
}
function fadein(element, index){
  $(element).css('z-index', index.toString());
  $(element).css('display', 'block')
  $(element).css('opacity', '1');
}
*/

function navbaropen(){
    fadein('.overlay', 3);
    slidein('.accordion-content', 'left', '0%');
}
