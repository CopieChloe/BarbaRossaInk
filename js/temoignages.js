$(document).ready(function (event) {  
  // makes arrays
  let names = [
    'Amandine N.',
    'Céline GK.',
    'Cindy S',
    'Emmanuel G.',
    'Epron L.',
    'Gil A.',
    'Michele B.',
    'Stephanie B.',
    'Theo F.'
  ];

  let texts = [
    'Au top, super ambiance. Je recommande.',
    'Des tatoueurs au top. Très à l écoute pour la modification du dessin. Déjà fait un tatouage chez eux et bientôt le deuxième',
    'une superbe 👍 équipe gentille pro très pro je suis plus que ravi je vous le recommande vivement 👏👏👏 merci 🙏🙏 Tatoo sublime',
    'Premier tatouage et vraiment rien à dire, très pro et du très bon travail. Je recommande',
    'Super salon avec de super tatoueurs !',
    'Top!',
    'Il est à l écoute de son client et le résultat est toujours au top.pour ma part 3 tatouages et je suis ravie.',
    '4 tatouages faits et toujours aussi satisfaite du résultat, professionnel ,propre et super sympa ,je recommande',
    'Travail au top est rendu parfait ! Je recommande fortement 💪🏽 Résultat magnifique'
  ];

  let pics = [
    'amandineN.jpg',
    'celineGK.jpg',
    'cindyS.jpg',
    'emmanuelG.jpg',
    'epronL.jpg',
    'gilA.jpg',
    'micheleB.jpg',
    'stephanieB.jpg',
    'theoF.jpg'
  ];

  // instantiate index variable
  let i = 0;

  // put first content
  $('.temoignage_nom').html('<p class="slideIn slideOut' + i + '">' + names[i] + '</p>');
  $('.vignette').html('<img src="img/ppl/' + pics[i] + '" alt="photo de client·e" class="slideIn photo_temoignage photo_temoignage' + pics[i] + ' slideOut' + i + '">');
  $('.temoignage_content').html('<p class="slideIn slideOut' + i + '">' + texts[i] + '</p>');

  // on click on arrow
  $('.fa-arrow-right').click(function () {
    // increment i
    i = i + 1;
    // and loop if i>names.length
    i = i % names.length;
  
  // and after 300ms
  setTimeout(function () {
    // put next content
    $('.temoignage_nom').html('<p class="slideIn slideOut' + i + '">' + names[i] + '</p>');
    $('.vignette').html('<img src="img/ppl/' + pics[i] + '" alt="photo de client·e" class="slideIn photo_temoignage photo_temoignage' + pics[i] + ' slideOut' + i + '">');
    $('.temoignage_content').html('<p class="slideIn slideOut' + i + '">' + texts[i] + '</p>');      
  }, 299); 

  // if prev img (img i-1)
  if ($('.photo_temoignage').attr('src') == 'img/ppl/' + pics[i-1]) {
    // test i - 1
    console.log(i-1);
    $('.slideOut' + (i - 1)).addClass('slideOut');
  }
  
  });

});