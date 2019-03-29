$(document).ready(function (event) {

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
    console.log('bars rotate');
    $('menu').removeClass('menu_shrink');

    // puis menu widen
    setTimeout(function () {
      console.log('menu widen');
      $('menu').addClass('menu_widen');
      $('.logo_menu').fadeOut();
      $('.fa-bars').fadeOut();
      $('.lien_contact').fadeOut();
    }, 300);

    // puis menu links fall
    setTimeout(function () {
      console.log('lis appear');
      $('menu').append("<div class='close_menu'><i class='fas fa-times'></i></div><ul class='menu_ul'><li class='menu_li' id='menu_li1'><a class='menu_link' href='home.html'>ACCUEIL</a></li><li class='menu_li' id='menu_li2'><a class='menu_link' href='quisommesnous.html'>QUI SOMMES-NOUS?</a></li><li class='menu_li' id='menu_li3'><a class='menu_link' href='galerie.html'>GALERIE</a></li><li class='menu_li' id='menu_li4'><a class='menu_link' href='temoignages.html'>TEMOIGNAGES</a></li><li class='menu_li' id='menu_li5'><a class='menu_link' href='contact.php'>CONTACT</a></li></ul>");
      $('.close_menu').click(function () {
        console.log('menu closes');
        $('.close_menu').addClass('bars_rotate');
        $('menu').addClass('menu_shrink');


        setTimeout(function () {
          console.log('menu elements hide');
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
    console.log(i);
    $('.img_container').html('<img src="img/' + imagesArray[i] + '" alt="photo de la galerie de tatouages" class="img_galerie img_galerie' + imagesArray[i] + '">');
  });

  $('.img_container').html('<img src="img/' + imagesArray[i] + '" alt="photo de la galerie de tatouages" class="img_galerie img_galerie' + imagesArray[i] + '">');


});

