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
