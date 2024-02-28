<?php
session_start();

require 'mailer/PHPMailerAutoload.php';

if(isset($_POST["submit"]))

 {


 //if($_SESSION['capcha_key'] == $_POST['capcha'])
 //{
 
$subject1 = "New Enquiry Form Submission From Website - EITACIES(Services)";



	$message1 = "<b>Enquiry details as follow:</b><br><br>


    
    <b> First Name                      : </b> $_POST[fname]<br><br>
      
    <b> Last Name                       : </b> $_POST[lname]<br><br>

    <b> Email                           : </b>$_POST[email]<br><br>

    <b> Mobile                          : </b>$_POST[phone]<br><br>
    
    <b> Company                         : </b> $_POST[company]<br><br>
 
    <b> How Did you hear about us?      : </b> $_POST[ref]<br><br>
 
    <b> Message     : </b> $_POST[message]<br><br>

 <br><br>";



 $subject2 = "Acknowledgement from EITACIES";



	$message2 = "<em>Dear  $_POST[fname]</em>



<br />



<br />



Thank you for reaching us. Our Company representative will get in touch with you for more information.</em><br />



<br />



This is an auto-response from EITACIES help desk. It will be our best endeavor to revert to you in the earliest possible time.</em>



<br />



<br />



Many Thanks and Best Regards,</em><br />



<strong><em>EITACIES</em></strong>



<br />



<br />



</em>";




$mail = new PHPMailer; 
/*
$mail->SMTPDebug = 4;                               // Enable verbose debug output
$mail->isSMTP();                                    // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                             // Enable SMTP authentication
$mail->Username = 'nileshcool@gmail.com';           // SMTP username
$mail->Password = 'password';                       // SMTP password
$mail->SMTPSecure = 'tls';                          // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;  */                   


 //Set who the message is to be sent from
$mail->setFrom('info@eitacies.com','EITACIES');
//Set an alternative reply-to address
// $mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
 $mail->addAddress('nshanmugapriya22@gmail.com'); // To Address 
 $mail->AddCC('vipin.oak@gmail.com');
  //$mail->addAddress('elumalai@masterexinc.com'); // To Address
  // $mail->addAddress('prasanna@masterexinc.com'); // To Address
	 
//Set the subject line
$mail->Subject = $subject1;
//Read an HTML message body from an external file, convert referenced images to embedded,
//Replace the plain text body with one created manually
$mail->Body = $message1;

$mail->IsHTML(true);
$mail->send();
 
 
/*acknowledgement Mail*/
 
 $mail1 = new PHPMailer; 
/*
$mail->SMTPDebug = 4;                               // Enable verbose debug output
$mail->isSMTP();                                    // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                             // Enable SMTP authentication
$mail->Username = 'nileshcool@gmail.com';           // SMTP username
$mail->Password = 'password';                       // SMTP password
$mail->SMTPSecure = 'tls';                          // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;  */                   


 //Set who the message is to be sent from
$mail1->setFrom('info@eitacies.com','EITACIES');
//Set an alternative reply-to address
// $mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail1->addAddress($_POST['email']); // To Address 
//$mail1->addAddress($to);
//  $mail->AddCC($cc);
//Set the subject line
$mail1->Subject = $subject2;
//Read an HTML message body from an external file, convert referenced images to embedded,
//Replace the plain text body with one created manually
$mail1->Body = $message2;
$mail1->IsHTML(true);
$mail1->send();
header("Location:thanks.html");



	exit;


}
 
?>