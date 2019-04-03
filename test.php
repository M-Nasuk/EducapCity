<?php

$json = json_decode('
{"name":"Jo","email":"sophia@capsaa.net","subject":"Test 12 milles","content":"Hello :)"}', true);

$text = wordwrap($json['content'], 70, "\r\n");
$message = str_replace("\n.", "\n..", $text);

if (mail('niazz@hotmail.fr', 'test', 'test contenu', 'test@live.fr')) {
  echo 'success';
} else {
  echo 'error';
}
var_dump($json);
echo $json['name'];
 ?>
