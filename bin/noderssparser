#!/usr/bin/env node

var nodeRssParser = require('./../lib/nodeRssParser');

var fileInput = process.argv.slice(2)[0];
var fileOutput = process.argv.slice(3)[0];

if (fileInput) {
    var parsed;
    var fs = require('fs');

    var fileContent = fs.readFileSync(fileInput).toString();
    parsed = nodeRssParser(fileContent);

    if (fileOutput) {
        fs.writeFile(fileOutput, JSON.stringify(parsed), function(err) {
            if (err) {
                return console.log(err);
            }

            process.stdout.write("The file was saved!");
        });
    }else{
       process.stdout.write(JSON.stringify(parsed));
    }
} else {
    process.stderr.write("USAGE: nodeRssParser [atom or rss2.0 file] [optional output file]");
    process.exit(9);
}