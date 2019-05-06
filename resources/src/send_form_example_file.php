<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$fetch = json_decode(file_get_contents('php://input'), true);

try {
  /* Set the mail sender. */
  $mail->setFrom('educapcity@capsaaa.net', 'EducapCity');

  /* Add a recipient. */
  $mail->addAddress('educapcity@capsaaa.net', 'EducapCity');

  $mail->addReplyTo('educapcity@capsaaa.net', 'EducapCity');

  /* Set the subject. */
  $mail->Subject = $fetch['subject'];

  /* Tells PHPMailer to use SMTP. */
  $mail->isSMTP();

  /* SMTP server address. */
  $mail->Host = '';

  /* Use SMTP authentication. */
  $mail->SMTPAuth = TRUE;

  /* Set the encryption system. */
  $mail->SMTPSecure = 'tls';

  /* SMTP authentication username. */
  $mail->Username = 'educapcity@capsaaa.net';

  /* SMTP authentication password. */
  $mail->Password = '';

  /* Set the SMTP port. */
  $mail->Port = 587;

  if (isset($_FILES['file']) &&
    $_FILES['file']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['file']['tmp_name'],
                         $_FILES['file']['name']);
                       };


  /* Set the mail message body. */
  $mail->isHTML(TRUE);
  $mail->Body = "
    <html>
      <h3>From : ".$fetch['name']."</h3>".
      "<p>Mail : ".$fetch['email']."</p>".
      "<p>Message : ".$fetch['content']."</p>
    </html>";


  /* Finally send the mail. */
  $mail->send();

  echo json_encode('Message has been sent');
} catch (Exception $e) {
  echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
}
