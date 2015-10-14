<?php
$files = scandir($argv[1]);
$filetype = $argv[2];
echo $filetype;
$newfiletype = $argv[3];
echo $newfiletype;
for ($i=0; $i < count($files); $i++) {
      preg_match("/(.+).".$filetype."/", $files[$i], $matches);
      var_dump($matches);
      if(isset($matches[2])){
        file_put_contents($matches[2], file_get_contents($files[$i]));
    }
}
