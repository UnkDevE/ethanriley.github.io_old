<?php

$files = scandir("../../Media/");
$sassfiles = array();
foreach($files as $file){
    if(stripos($file, ".sass") !== false){
      array_push($sassfiles, $file);
    }
}

$jsonsass = json_encode($sassfiles);

$httpsend = new HttpResponse();
$httpsend->setData("getMediafiles.php", $jsonsass);
$httpsend->send();
