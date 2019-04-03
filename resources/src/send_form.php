<?php

$fetch = json_decode(file_get_contents('php://input'), true);

$text = wordwrap($fetch['content'], 70, "\r\n");
$message = str_replace("\n.", "\n..", $text);

mail('mlle.sophia.azzi@gmail.com', $fetch['subject'], $message);
echo json_encode($fetch);
