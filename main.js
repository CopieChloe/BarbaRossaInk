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
    $('.cursor').remove();
 }); 

  $( ".fa-bars" ).click(function() {
    $('.fa-bars').addClass('bars_rotate'); 

    // puis menu widen
    setTimeout(function(){
      $('menu').addClass('menu_widen');
      $('.logo_menu').fadeOut();
      $('.fa-bars').fadeOut();
      $('.lien_contact').fadeOut(); 
    }, 300);

    // puis menu links fall
    setTimeout(function(){
      $('menu').append("<div class='close_menu'><i class='fas fa-times'></i></div><ul class='menu_ul'><li class='menu_li' id='menu_li1'><a class='menu_link' href='home.html'>Accueil</a></li><li class='menu_li' id='menu_li2'><a class='menu_link' href='quisommesnous.html'>Qui sommes-nous?</a></li><li class='menu_li' id='menu_li3'><a class='menu_link' href='galerie.html'>Galerie</a></li><li class='menu_li' id='menu_li4'><a class='menu_link' href='temoignages.html'>Témoignages</a></li><li class='menu_li' id='menu_li5'><a class='menu_link' href='contact.php'>Contact</a></li></ul>");
      $('.close_menu').click(function(){
        $('.close_menu').addClass('bars_rotate');
        $('menu').addClass('menu_shrink');
        setTimeout(function() {
          $('.close_menu').hide();
          $('.menu_ul').hide();
          $('.logo_menu').fadeIn();
        $('.fa-bars').fadeIn();
        $('.lien_contact').fadeIn();
        }, 300);
      });
        $('#menu_li1').addClass('fall');

        setTimeout(function(){
          $('#menu_li2').addClass('fall');
        }, 300);

        setTimeout(function(){
          $('#menu_li3').addClass('fall');
        }, 600);

        setTimeout(function(){
          $('#menu_li4').addClass('fall');
        }, 900);

        setTimeout(function(){
          $('#menu_li5').addClass('fall');
        }, 1200);
    }, 1300);

    

    
  });


  





});

