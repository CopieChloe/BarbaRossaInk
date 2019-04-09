$(document).ready(function (event) {
    let imgArr = [
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
        'toile.jpg',
    ]

    let i = 0;

    $('.slide_wrapper_mobile').html('<img src="img/' + imgArr[i] + '" id="current_img' + i + '" class="galerie_img_mobile galerie_img_mobile' + i + '" alt="photo de tatouage">');

    $('.arrow_mobile_right').click(function() {
        i = i + 1;
        i = i % imgArr.length;

        setTimeout(function () {
            $('.slide_wrapper_mobile').html('<img src="img/' + imgArr[i] + '" id="current_img' + i + '" class="galerie_img_mobile galerie_img_mobile' + i + '" alt="photo de tatouage">');

            $('.galerie_img_mobile' + i).addClass('slideInLeft');
                
          }, 300); 

          $('.galerie_img_mobile' + (i-1)).addClass('slideLeft');
          
    });



});