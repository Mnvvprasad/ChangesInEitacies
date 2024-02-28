<?php
session_start();

require 'mailer/PHPMailerAutoload.php';

if(isset($_POST["submit"]))

 {


 //if($_SESSION['capcha_key'] == $_POST['capcha'])
 //{
 
$subject1 = "New Job Application From Website - Eitacies(Careers)";


	$message1 = "<em>Message : $_POST[message]</em>




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
$mail->setFrom('info@eitacies.com','Eitacies');
//Set an alternative reply-to address
// $mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
 $mail->addAddress('info@eitacies.com'); // To Address 
 $mail->AddCC('vipin.oak@gmail.com');
  //$mail->addAddress('elumalai@masterexinc.com'); // To Address
  // $mail->addAddress('prasanna@masterexinc.com'); // To Address
	 
//Set the subject line
$mail->Subject = $subject1;
//Read an HTML message body from an external file, convert referenced images to embedded,
//Replace the plain text body with one created manually
$mail->Body = $message1;

$mail->IsHTML(true);
$file_to_attach = $_FILES['resume']['tmp_name'];
$filename=$_FILES['resume']['name'];
$mail->AddAttachment( $file_to_attach, $filename);
$mail->send();
 
 
header("Location:thank-you.html");



	exit;

}
 
?>