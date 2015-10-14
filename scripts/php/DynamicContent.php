<?php

class Attribute
{
    public function __constructor($Name){
        $name = $Name;
    }
    public $name;
    public $data;
}

class DatabaseData
{
    public $name;
    public $attributes;
    public $data;
}


class DynamicContent{

    private $database;

    public function __constructor($host, $Databasename, $user, $password, $Databasesocket = null){
        if($Databasesocket == null){
          $this->database = new mysqli($host, $Databasename, $user, $password);
        }
        else {
            $this->database = new mysqli($host, $Databasename, $user, $password, $Databasesocket);
        }
        $this->database->query("CREATE DATABASE IF NOT EXISTS DYNAMIC_CONTENT");
        $this->database->query("USE DYNAMIC_CONTENT");
    }


    public function addhtml_indir($dir){

    }

    public function remove_html($htmlname){

    }


    private function addtodatabase($databaseDataArray, $htmlname){

        $this->database->query("CREATE TABLE IF NOT EXISTS ".$htmlname);
        $query =  " INSERT INTO TABLE ".$htmlname."(";
        for($i=0; $i < count($databaseDataArray); $i++){
          $query = $databaseDataArray[$i]->name.",";
        }
        $query = $query.")";

    }

    public function addtemplate($htmlfilename, $htmlname=null){
        $dom = new DOMDocument();
        $dom->loadHTMLFile($htmlfilename);
        $DBdata = $this->iterateOverhtml($dom->childNodes);
        $this->addtodatabase($DBdata, $htmlname);
    }

    private function iterateOverDomDocument($dom){
        if($dom->hasChildNodes()){
            for($i=0; $i < $dom->childNodes->length; $i++){
                $Element = $dom->childNodes->item($i);
                $this->iterateOverhtml($Element);
            }
        }
    }

    private function iterateOverhtml($domNode, $root=null){
        $dataArray = array();
        $dataArray[0] = $this->parseData($domNode, $root);

        if($domNode->hasChildNodes()){
            for($i=1; $i-1 < $domNode->childNodes->length; $i++){
                $Element = $domNode->childNodes->item($i);
                $dataArray[$i] = $this->iterateOverhtml($Element, $dataArray[0]->name);
            }
        }

        return $dataArray;
    }

    private function  parseData($domNode, $root=null){
        $databaseData = new DatabaseData();
        $databaseData->name = $root.$domNode->nodeName.".".$domNode->nodeValue;
        $databaseData->attributes = $this->iterateAttribute($domNode->attributes);

        for($i=0; $i<count($databaseData->attributes); $i++){
            if(strpos($databaseData->attributes[$i]->name, "id") !== false){
                $databaseData->name = $databaseData->name.'.'.$databaseData->attributes->name;
            }
        }

        return $databaseData;
    }

    private function iterateAttribute($domNodeMap){
        $Attributes = array();
        for($i=0; $i < $domNodeMap->length; $i++){
            $Attributes[$i] = new Attribute($domNodeMap->item($i)->nodeType.".".$domNodeMap->item($i)->nodeValue);
        }
        return $Attributes;
    }
}

