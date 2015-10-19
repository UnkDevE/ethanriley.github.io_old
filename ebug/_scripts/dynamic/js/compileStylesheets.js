var sass = new Sass("./3rd_party/sass.js-0.9.2/dist/sass.worker.js");

sass.options({
    style : Sass.style.nested,
    precision : -1,
    indentedSyntax : true,
    indent:'  ',
    sourceMapFile : 'file',
    sourceMapRoot : 'root',
    inputPath : 'stdin',
    outputPath : 'stdout',
    sourceMapEmbed : false,
    sourceMapOmiturl : true,
}, function callback(){})

var sassfileobj;


$.get('../php/getMediafiles.php', function(data){
    sassfileobj = JSON.parse(data);
}
)

for(var i=0; i<sassfileobj.length; i++){
  var sassdata;
    sass.compileFile(sassfileobj[i], function(data){
        if(data !== null){
            sass.writeFile(sassfileobj[i], sassdata.text, function(sucsess){if(!sucsess){alert("")}})
        }
        else{
          alert(sassfileobj[1]+" is null");
        }
    });

}
