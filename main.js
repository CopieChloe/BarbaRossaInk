$(document).ready(function (event) {

  
  if(window.location.href === 'http://localhost/bacasable/galerie.html' || window.location.href === 'https://copiechloe.github.io/BarbaRossaInk/galerie.html') {
    $('html').css({
      'height': '100%',
      'background': 'radial-gradient(ellipse at bottom, rgb(80, 133, 66) 0%, #090a0f 100%)' 
    });    
  }

  $(document).on("mousemove", function (event) {
    $('.starter').fadeOut();
    let x = event.pageX;
    let y = event.pageY;
    let string = 'circle(130px at ' + x + 'px ' + y + 'px)';
    $('.content').css('clip-path', string);
    $('.cursor').css({
      'display': 'block',
      'top': y,
      'left': x
    });
  });

  $(document).click(function () {
    $('.cursor').remove();
  });

  $(document).on('click', '.fa-bars', function () {

    $('.fa-bars').addClass('bars_rotate');
    $('menu').removeClass('menu_shrink');
    $('.overlay').css('z-index', '0');

    // puis menu widen
    setTimeout(function () {
      $('menu').addClass('menu_widen');
      $('.logo_menu').fadeOut();
      $('.fa-bars').fadeOut();
      $('.lien_contact').fadeOut();
    }, 300);

    // puis menu links fall
    setTimeout(function () {
      $('menu').append("<div class='close_menu'><i class='fas fa-times'></i></div><ul class='menu_ul'><li class='menu_li' id='menu_li1'><a class='menu_link' href='home.html'>ACCUEIL</a></li><li class='menu_li' id='menu_li2'><a class='menu_link' href='quisommesnous.html'>QUI SOMMES-NOUS?</a></li><li class='menu_li' id='menu_li3'><a class='menu_link' href='galerie.html'>GALERIE</a></li><li class='menu_li' id='menu_li4'><a class='menu_link' href='temoignages.html'>TEMOIGNAGES</a></li><li class='menu_li' id='menu_li5'><a class='menu_link' href='contact.php'>CONTACT</a></li></ul>");
      $('.close_menu').click(function () {
        $('.close_menu').addClass('bars_rotate');
        $('menu').addClass('menu_shrink');


        setTimeout(function () {
          $('.close_menu').hide();
          $('.menu_ul').hide();
          $('.logo_menu').fadeIn();
          $('.fa-bars').fadeIn();
          $('.lien_contact').fadeIn();
        }, 300);


      });

    }, 1300);





  });

  let imagesArray = [
    'cerf.jpg',
    'feathers.jpg',
    'game_over.jpg',
    'main.jpg',
    'monkey.jpg',
    'montre.jpg',
    'person.jpg',
    'rose.jpg',
    'scorpion.jpg',
    'sketch.jpg',
    'toile.jpg'
  ]

  let i = 0;
  $('.fa-arrow-right').click(function () {
    i = i + 1;
    i = i % imagesArray.length;

    setTimeout(function () {
      $('.img_container').html('<img src="img/' + imagesArray[i] + '" alt="photo ' + [i+1] + ' de la galerie de tatouages" class="img_galerie img_galerie' + [i] + '">');
    }, 300);

    if ($('.img_galerie').attr('src') == 'img/' + imagesArray[i-1]) {
      $('.img_galerie').addClass('slideOutImg');
    }

  });

  $('.img_container').html('<img src="img/' + imagesArray[i] + '" alt="photo ' + [i+1] + ' de la galerie de tatouages" class="img_galerie img_galerie' + [i] + '">');
      
  $('.fb_icon').addClass('animate_icons');
  setTimeout(function () {
    $('.insta_icon').addClass('animate_icons');
  }, 300);
  setTimeout(function () {
    $('.tweet_icon').addClass('animate_icons');
  }, 600);
          
       
  let typed = new Typed('.typed', {
    strings: ['Barba Rossa Ink'],
    stringsElement: null,
    typeSpeed: 50,
    startDelay: 100
  });


  
  


  

 

});

