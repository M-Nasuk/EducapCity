<?php

require __DIR__.'/vendor/autoload.php';

if (empty($_GET)){
  include 'resources/templates/index.phtml';
} else {
  switch ($_GET['page']) {
    case 'a_propos':
      include 'resources/templates/a_propos.phtml';
      break;

    default:
      // code...
      break;
  }
}
