<?php

$fetch = json_decode(file_get_contents('php://input'), true);

$text = wordwrap($fetch['content'], 70, "\r\n");
$message = str_replace("\n.", "\n..", $text);

$sender_name = $fetch['name'];
$sender_mail = $fetch['email'];
$headers = [
  "From" => "$sender_name <$sender_mail>",
  "Reply-To" => "pc@example.com",
  "Content-type" => "text/plain; charset=iso-8859-1",
  "MIME-Version" => "1.0"
];


$send = mail('jo@example.net', $fetch['subject'], $message, $headers);

echo json_encode($send);

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
//
// $mail = new PHPMailer(true);
//
// try {
//   /* Set the mail sender. */
//   $mail->setFrom('de', 'Me');
//
//   /* Add a recipient. */
//   $mail->addAddress('a', 'Me');
//
//   $mail->addReplyTo('repond a', 'Me');
//
//   /* Set the subject. */
//   $mail->Subject = 'Force';
//
//   /* Tells PHPMailer to use SMTP. */
//   $mail->isSMTP();
//
//   /* SMTP server address. */
//   $mail->Host = 'any smtp config';
//
//   /* Use SMTP authentication. */
//   $mail->SMTPAuth = TRUE;
//
//   /* Set the encryption system. */
//   $mail->SMTPSecure = 'tls';
//
//   /* SMTP authentication username. */
//   $mail->Username = 'mail@mail.com';
//
//   /* SMTP authentication password. */
//   $mail->Password = 'password';
//
//   /* Set the SMTP port. */
//   $mail->Port = 587;
//
//   /* Set the mail message body. */
//   $mail->isHTML(TRUE);
//   $mail->Body = '<html>There is a great disturbance in the <strong>Force</strong>.</html>';
//   $mail->AltBody = 'There is a great disturbance in the Force.';
//
//   /* Finally send the mail. */
//   $mail->send();
//
//   echo 'Message has been sent';
// } catch (Exception $e) {
//   echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
