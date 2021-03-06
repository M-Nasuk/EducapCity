<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__.'/vendor/autoload.php';

if (empty($_GET)){
  include 'resources/templates/accueil.html';
} else {
  switch ($_GET['page']) {
    case 'programme':
      include 'resources/templates/programme.html';
      break;
    case 'a_propos':
      include 'resources/templates/a_propos.html';
      break;
    case 'nos_editions':
      include 'resources/templates/nos_editions.html';
      break;
    case 'participer':
      include 'resources/templates/participer.html';
      break;
    case 'contact':
      include 'resources/templates/contact.html';
      break;
    case 'inscription':
      include 'resources/templates/inscription.html';
      break;
    default:
      // code...
      break;
  }
}
