$(document).ready(function (event) {

  var width = $(window).width();
  if (width < 900){
    console.log(width);
    if (window.location.href === 'http://localhost/bacasable/index.html') {
      window.location.replace('http://localhost/bacasable/home.html');
    }

    if (window.location.href === window.location.href === 'https://copiechloe.github.io/BarbaRossaInk/index.html' || 'https://copiechloe.github.io/BarbaRossaInk/') {
      window.location.replace('https://copiechloe.github.io/BarbaRossaInk/home.html');
    }
  }
  
  if (window.location.href === 'http://localhost/bacasable/quisommesnous.html' || window.location.href === 'https://copiechloe.github.io/BarbaRossaInk/quisommesnous.html') {
    $('html').css({
      'height': '100%',
      'background': 'radial-gradient(ellipse at bottom, rgb(80, 133, 66) 0%, #090a0f 100%)'
    });
  }

  if (window.location.href === 'http://localhost/bacasable/index.html' || window.location.href === 'https://copiechloe.github.io/BarbaRossaInk/index.html') {
    $('.content').addClass('cursor_none');
    $('.logo_starter').addClass('cursor_none');
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



  $('.fb_icon').addClass('animate_icons');
  setTimeout(function () {
    $('.insta_icon').addClass('animate_icons');
  }, 300);
  setTimeout(function () {
    $('.tweet_icon').addClass('animate_icons');
  }, 600);




});

