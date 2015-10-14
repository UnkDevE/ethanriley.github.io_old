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

$.get('../', data?: ?, success: fn(data: string, textStatus: string, req: XMLHttpRequest), dataType?: string)

sass.compileFile()
