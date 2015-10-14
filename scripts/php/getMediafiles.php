<?php

$files = scandir("../../Media/");
$sassfiles = array();
foreach($files as $file){
    if(stripos($file, ".sass") !== false){
      array_push($sassfiles, $file);
    }
}

$httpsend = new HttpResponse();
