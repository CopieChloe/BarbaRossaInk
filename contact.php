<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Barba Rossa Ink</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Montserrat|Permanent+Marker|Luckiest+Guy" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link rel="stylesheet" type="text/css" media="screen" href="contact.css">
    <script defer src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script defer src="main.js"></script>
    <script async id="timify" type="text/javascript"
    src="https://widget.timify.com/js/widget.js"
    data-position="flexible" >
    </script>
</head>

<?php

$errorAlert = '';
$errorAlertName = '';
$errorAlertMail = '';
$errorAlertMessage = '';
$successAlert = '';

if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $messageFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "chloe.seiler123@live.fr";
    $headers = "From: ".$messageFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;   
   

    // Check name
    if (empty($name)) {
        $errorAlert .= 'error';
        $errorAlertName .= 'Qui êtes-vous?';
    } 
    
    // Check email 
    if (empty($messageFrom) && filter_var  ($messageFrom, FILTER_VALIDATE_EMAIL) === false) {
        $errorAlert .= 'error';
        $errorAlertMail .= 'Où puis-je vous répondre?';
    }
    
    //Check message
    if (!$message) {
        $errorAlert .= 'error';
        $errorAlertMessage .= 'Que voulez-vous me dire?';
    } 

if (!$errorAlert) {
    mail($mailTo, $txt, $headers);
    $successAlert .= 'Merci pour votre message! Nous vous répondons rapidement.';
} 

}

?>

<body class="black_bg">

    <div class="home">
        <menu>
            <img src="img/logo.jpg" alt="logo barba rossa ink" class="logo_menu">
            <i class="fas fa-bars"></i>
            <a href="contact.php" class="lien_contact">Contact</a>            
        </menu>

        

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" class="contact_form container-fluid mt-5 mb-5" id="contact_form">

            
            <div class="networks">
                
                <div class="network_icon_container">
                    <a href=""><i class="fab fa-facebook-square fb_icon networks_icons"></i></a>
                </div>
                <div class="network_icon_container">
                    <a href=""><i class="fab fa-instagram insta_icon networks_icons"></i></a>
                </div>
                <div class="network_icon_container">
                    <a href=""><i class="fab fa-twitter-square tweet_icon networks_icons"></i></a>
                </div>
            </div>

            <div class="input_alert" style="color: white; font-family: 'EB Garamond', serif; font-size: 1.5rem; font-weight: bold; max-height: 3vh; text-align: start; margin-bottom: 15vh; animation: alertMsgSlideIn 1s;"><?php echo $successAlert;?></div>

            <h4 class="contact_form_title">Bonjour Barba Rossa Ink,</h4>

            <div class="input_div col-12 msg_input_div">   
                        
                <textarea autofocus id="message" class="input col-10" name="message"></textarea>                
            </div>           

            <div class="input_alert" style="color: white; font-family: 'EB Garamond', serif; font-size: 1.5rem; font-weight: bold; max-height: 3vh; text-align: start; margin-bottom: 15vh; animation: alertMsgSlideIn 1s;"><?php echo $errorAlertMessage;?></div>

            <div class="input_div col-12">
                <label class="row pl-3" for="name">Signé : </label>                 
                <input class="input col-10" type="text" name="name">                              
            </div>

            <div class="input_alert" style="color: white; font-family: 'EB Garamond', serif; font-size: 1.5rem; font-weight: bold; max-height: 3vh; text-align: start; margin-bottom: 15vh; animation: alertMsgSlideIn 1s 200ms;"><?php echo $errorAlertName;?></div>

            <div class="input_div col-12">
                <label class="row pl-3" for="email">Mon adresse mail : </label>
                <input id="email" class="input col-10" type="email" name="email">
            </div>

            <div class="input_alert" style="color: white; font-family: 'EB Garamond', serif; font-size: 1.5rem; font-weight: bold; max-height: 3vh; text-align: start; margin-bottom: 15vh; animation: alertMsgSlideIn 1s 400ms;"><?php echo $errorAlertMail;?></div>

            

            <div class="input_div col-12 button_div">
                <button class="btn" type="submit" name="submit" id="submit_btn">
                    <i class="far fa-envelope"></i>
                    <i class="fas fa-envelope-open-text"></i>
                </button>    
            </div>   

            <div class="coordonnees">
                <div class="iframe_container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10421.597913585405!2d6.0078763!3d49.2309149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb46970c26bcbdacd!2sSalon+de+tatouage+Barba+Rossa+Ink!5e0!3m2!1sfr!2sfr!4v1553872161436!5m2!1sfr!2sfr" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="coordonnees_content">
                    <p>Barba Rossa Ink</p>
                    <p>39, rue du Commerce</p>
                    <p>54240 Joeuf</p>
                    <p><a href="tel:+33660556912" class="phone_link"><i class="fas fa-phone-square"> </i> 06 60 55 69 12</a></p>
                </div>
            </div>

            
         </form>

  
    </div>
    
    
    <!-- maps -->
    <!-- coordonnées -->

</body>

</html>