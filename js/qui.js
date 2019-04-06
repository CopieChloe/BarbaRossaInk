$(document).ready(function (event) {

    let whoTextArray = [
        'Salon de tatouage installé depuis 2018',
        'Spécialisé dans le style graphique',
        'Forts d\'une formation hygiène et salubrité obligatoire dans le tatouage, nous vous garantissons un environnement sain.',
        'Nous ne travaillons qu\'avec du matériel à usage unique.',
        'Nous saurons vous conseiller pour vos projets de tatouages.'
    ]

    let animTextArray = [
        '<img src="img/logo.jpg" class="logo_who">',

        '<svg class="svg-icon" viewBox="0 0 20 20"><path class="path" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" d="M16.888,8.614c0.008-0.117,0.018-0.233,0.018-0.352c0-2.851-2.311-5.161-5.16-5.161c-1.984,0-3.705,1.121-4.568,2.763c-0.32-0.116-0.664-0.182-1.023-0.182c-1.663,0-3.011,1.348-3.011,3.01c0,0.217,0.024,0.427,0.067,0.631c-1.537,0.513-2.647,1.96-2.647,3.67c0,2.138,1.733,3.87,3.871,3.87h10.752c2.374,0,4.301-1.925,4.301-4.301C19.486,10.792,18.416,9.273,16.888,8.614 M15.186,16.003H4.433c-1.66,0-3.01-1.351-3.01-3.01c0-1.298,0.827-2.444,2.06-2.854l0.729-0.243l-0.16-0.751C4.02,8.993,4.003,8.841,4.003,8.692c0-1.186,0.965-2.15,2.151-2.15c0.245,0,0.49,0.045,0.729,0.131l0.705,0.256l0.35-0.664c0.748-1.421,2.207-2.303,3.807-2.303c2.371,0,4.301,1.929,4.301,4.301c0,0.075-0.007,0.148-0.012,0.223l-0.005,0.073L15.99,9.163l0.557,0.241c1.263,0.545,2.079,1.785,2.079,3.159C18.626,14.46,17.082,16.003,15.186,16.003"></path></svg>',

        'Forts d\'une formation hygiène et salubrité obligatoire dans le tatouage, nous vous garantissons un environnement sain.',

        '<svg class="svg-icon2" viewBox="0 0 20 20"><path fill="#fff" d="M9.727,7.292c0.078,0.078,0.186,0.125,0.304,0.125c0.119,0,0.227-0.048,0.304-0.125l1.722-1.722c0.078-0.078,0.126-0.186,0.126-0.305c0-0.237-0.192-0.43-0.431-0.43c-0.118,0-0.227,0.048-0.305,0.126l-0.986,0.987V1.822c0-0.237-0.193-0.43-0.431-0.43s-0.431,0.193-0.431,0.43v4.126L8.614,4.961C8.537,4.884,8.429,4.835,8.31,4.835c-0.238,0-0.43,0.193-0.43,0.43c0,0.119,0.048,0.227,0.126,0.305L9.727,7.292z M18.64,8.279H1.423c-0.475,0-0.861,0.385-0.861,0.86V10c0,0.476,0.386,0.861,0.861,0.861h0.172l1.562,7.421l0.008-0.002c0.047,0.187,0.208,0.328,0.41,0.328h12.912c0.201,0,0.362-0.142,0.409-0.328l0.009,0.002l1.562-7.421h0.173c0.475,0,0.86-0.386,0.86-0.861V9.139C19.5,8.664,19.114,8.279,18.64,8.279 M2.475,10.861h2.958l0.271,1.721H2.837L2.475,10.861z M3.018,13.443h2.823l0.271,1.722H3.38L3.018,13.443z M3.924,17.747l-0.362-1.722h2.687l0.271,1.722H3.924z M9.601,17.747H7.38l-0.271-1.722h2.491V17.747z M9.601,15.165H6.973l-0.271-1.722h2.899V15.165z M9.601,12.582H6.565l-0.271-1.721h3.307V12.582z M12.682,17.747h-2.22v-1.722h2.491L12.682,17.747z M13.09,15.165h-2.628v-1.722h2.899L13.09,15.165z M10.462,12.582v-1.721h3.307l-0.271,1.721H10.462z M16.139,17.747h-2.596l0.271-1.722H16.5L16.139,17.747z M16.683,15.165H13.95l0.271-1.722h2.823L16.683,15.165z M17.226,12.582h-2.867l0.271-1.721h2.958L17.226,12.582z M18.64,10H1.423V9.139H18.64V10z"></path>',
        
        'Nous saurons vous conseiller pour vos projets de tatouages.'
    ]

    let i = 0;      

    $('.who_content').html('<div class="who_text who_text' + i + '">' + whoTextArray[i] + '</div><div class="anim">' + animTextArray[i] + '</div>');

    $('.fa-arrow-right').click(function() {
        i = i + 1;
        i = i % whoTextArray.length;

        setTimeout(function () {
            $('.who_content').html('<div class="who_text who_text' + i + '">' + whoTextArray[i] + '</div><div class="anim">' + animTextArray[i] + '</div>');                
          }, 500);

          if(i == 4) {
              console.log('hello world');
              $('.who_text' + 3).addClass('test');
          }
    });
  
  });


  /*
  2 : hygiène
  3 : truc jeté à la poubelle après usage unique
  4 : conseil pour projets 
  
  */