'use strict'

let xml2js = require('xml2js');
let parser = new xml2js.Parser();
const Rss = require("./rss2/Rss");
/*const Feed = require("./atom/Feed");

var fs = require('fs');
fs.readFile(__dirname + '/../feed.atom', function(err, data) {
    if (err) {
        throw err;
    }

    parser.parseString(data.toString(), function(err, result) {
        let feed = new Feed(result.feed);

        console.log(feed);
    });
});*/

var fs = require('fs');
fs.readFile(__dirname + '/../google.atom', function(err, data) {
    if (err) {
        throw err;
    }

    parser.parseString(data.toString(), function(err, result) {
        let rss = new Rss(result.rss);

        console.log(rss);
    });
});