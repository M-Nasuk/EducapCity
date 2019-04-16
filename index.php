<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__.'/vendor/autoload.php';

if (empty($_GET)){
  include 'resources/templates/index.phtml';
} else {
  switch ($_GET['page']) {
    case 'programme':
      include 'resources/templates/programme.phtml';
      break;
    case 'a_propos':
      include 'resources/templates/a_propos.phtml';
      break;
    case 'nos_editions':
      include 'resources/templates/nos_editions.phtml';
      break;
    default:
      // code...
      break;
  }
}
