$( document ).ready(function(event) {

  $( document ).on( "mousemove", function( event ) {
    $('.starter').fadeOut();
    let x = event.pageX;
    let y = event.pageY;
    let string = 'circle(130px at ' + x + 'px ' + y + 'px)';
    $('.content').css('clip-path', string);
    $('.cursor').css({
      'display' : 'block',
      'top' : y,
      'left' : x
   });
  });
    
  $(document).click(function(){
    $('.cursor').css({
      'border' : '1px solid white',
      'transition' : 'border 5s 0s'
    });
    let x = event.pageX;
    let y = event.pageY;
    let stringEnlarge = 'circle(400px at ' + x + 'px ' + y + 'px)';
    $('.content').css({
      'clip-path' : stringEnlarge,
      'transition' : 'all 1s ease'
   });
    setInterval(function(){ 
      $('.content').fadeOut();
      $('.starter').fadeOut();
      $('.home').fadeIn();
      }, 1000);
    setInterval(function(){ 
        $('.content').remove();
        $('.starter').remove();
      }, 2000);
 })





});