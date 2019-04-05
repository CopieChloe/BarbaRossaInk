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
  $('.parent').html('<div class="temoignage_container temoignage_container' + i + '"><img src="img/ppl/' + pics[i] + '" alt="photo de client·e" class="photo_temoignage"><div class="left_container"><p class="temoignage_name temoignage_name' + i + '">' + names[i] + '</p><div class="temoignage_text"><p class="textP">' + texts[i] + '</p></div></div></div>');

  $('.parent_next').html('<div class="temoignage_container_next temoignage_container_next' + (i+1) + '"><img src="img/ppl/' + pics[i + 1] + '" alt="photo de client·e" class="photo_temoignage"><div class="left_container"><p class="temoignage_name temoignage_name' + (i + 1) + '">' + names[i + 1] + '</p><div class="temoignage_text_next"><p class="textP textPhide">' + texts[i + 1] + '</p></div></div>');

  // on click on arrow
  $('.fa-angle-down').click(function () {
    // increment i
    i = i + 1;
    // and loop if i>.length
    i = i % names.length;
    i = i % pics.length;
    i = i % texts.length;
  
  // and after 300ms
  setTimeout(function () {
    // put next content
    $('.parent_prev').html('<div class="temoignage_container_prev temoignage_container_prev' + (i - 1) + '"><img src="img/ppl/' + pics[i - 1] + '" alt="photo de client·e" class="photo_temoignage"><div class="left_container"><p class="temoignage_name temoignage_name' + (i - 1) + '">' + names[i - 1] + '</p><div class="temoignage_text_prev"><p class="textP textPhide">' + texts[i - 1] + '</p></div></div>'); 

    $('.parent').html('<div class="temoignage_container temoignage_container' + i + '"><img src="img/ppl/' + pics[i] + '" alt="photo de client·e" class="photo_temoignage"><div class="left_container"><p class="temoignage_name temoignage_name' + i + '">' + names[i] + '</p><div class="temoignage_text"><p class="textP">' + texts[i] + '</p></div></div></div>');    
    
    $('.parent_next').html('<div class="temoignage_container_next temoignage_container_next' + (i + 1) + '"><img src="img/ppl/' + pics[i + 1] + '" alt="photo de client·e" class="photo_temoignage"><div class="left_container"><p class="temoignage_name temoignage_name' + (i + 1) + '">' + names[i + 1] + '</p><div class="temoignage_text_next"><p class="textP textPhide">' + texts[i + 1] + '</p></div></div>');    
        
  }, 999); 

  $('.temoignage_container' + (i-1)).addClass('slideUp');
  $('.temoignage_container_next' + i).addClass('comeIn');  

  
  });

});