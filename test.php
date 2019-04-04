<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
  /* Set the mail sender. */
  $mail->setFrom('de', 'Me');

  /* Add a recipient. */
  $mail->addAddress('a', 'Me');

  $mail->addReplyTo('repond a', 'Me');

  /* Set the subject. */
  $mail->Subject = 'Force';

  /* Tells PHPMailer to use SMTP. */
  $mail->isSMTP();

  /* SMTP server address. */
  $mail->Host = 'any smtp config';

  /* Use SMTP authentication. */
  $mail->SMTPAuth = TRUE;

  /* Set the encryption system. */
  $mail->SMTPSecure = 'tls';

  /* SMTP authentication username. */
  $mail->Username = 'mail@mail.com';

  /* SMTP authentication password. */
  $mail->Password = 'password';

  /* Set the SMTP port. */
  $mail->Port = 587;

  /* Set the mail message body. */
  $mail->isHTML(TRUE);
  $mail->Body = '<html>There is a great disturbance in the <strong>Force</strong>.</html>';
  $mail->AltBody = 'There is a great disturbance in the Force.';

  /* Finally send the mail. */
  $mail->send();

  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
