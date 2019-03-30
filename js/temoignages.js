$(document).ready(function (event) {
    
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

});