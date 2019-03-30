$(document).ready(function (event) {

    let typed1 = new Typed('.p1', {
        strings: ['Choisissez le type de prestation indiqué dans le mail de devis que vous avez reçu, puis choisissez la date et le créneau horaire qui vous conviennent.'],
        stringsElement: null,
        showCursor: false,
        typeSpeed: 25,
        startDelay: 100
    });

    let typed2 = new Typed('.p2', {
        strings: ['Pour réserver et régler l\'acompte de 50€, cliquez sur le bouton gris "Connexion en tant qu\'invité".'],
        stringsElement: null,
        showCursor: false,
        typeSpeed: 25,
        startDelay: 6000
    });

    let typed3 = new Typed('.p3', {
        strings: ['Nous avons choisi Stripe pour le règlement par carte bancaire car c\'est le plus sécurisé et fiable.'],
        stringsElement: null,
        showCursor: false,
        typeSpeed: 25,
        startDelay: 10000
    });


});