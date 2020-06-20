<?php

$name = $lastname = $visitor_email = $message = '';
 if(isset($_POST['submit'])){
    echo "Greška, potrebno je da pošaljete formu";
}
//collect
$name = test_input($_POST['name']);
$lastname = test_input($_POST['lastname']);
$visitor_email = test_input($_POST['email']);
$message = test_input($_POST['message']);

//validate

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

if(empty($name)||empty($visitor_email)){
    echo "Molim Vas da upisete E-mail i ime. Oni su obavezni";
    exit;
}
$email_from = 'tanja120a@gmail.com';
$email_subject = "New form submission";
$email_body = " You have received a new message from the user $name.\n
                last name: $lastname\n
                email address: $visitor_email\n
                Here is the message: \n $message.";

$to = 'tanja120a@gmail.com';
$headers = "From: $email_from \r\n";

//send the email
mail($to, $email_subject, $email_body, $headers);
//done, redirect to thank you page
header("Location:../view/thanks.html");
?>

