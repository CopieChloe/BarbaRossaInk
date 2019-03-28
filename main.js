$( document ).ready(function() {
  $( document ).on( "mousemove", function( event ) {
    $('.starter').fadeOut();
    let x = event.pageX;
    let y = event.pageY;
    let string = 'circle(130px at ' + x + 'px ' + y + 'px)';
     $('.content').css('clip-path', string);
  });
    
  $(document).click(function(){
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