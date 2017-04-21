'use strict';

const Rss = require("./../rss2/Rss");
const parser = require('xml2js').Parser();

function parse(data) {
    let rss;

    parser.parseString(data.toString(), function(err, result) {
        rss = new Rss(result.rss);
    });

    return rss;
}

module.exports = parse;