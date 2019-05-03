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
    case 'organiser':
      include 'resources/templates/participer/organiser.html';
      break;
    case 'partenaire':
      include 'resources/templates/participer/partenaire.html';
      break;
    case 'benevole':
      include 'resources/templates/participer/benevole.html';
      break;
    case 'don':
      include 'resources/templates/participer/don.html';
      break;
    default:
      // code...
      break;
  }
}
