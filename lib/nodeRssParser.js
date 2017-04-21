'use strict';

const parser = require('xml2js').Parser();

const Rss = require("./rss2/Rss");
const Feed = require("./atom/Feed");

function parse(data) {
    let parsed;

    parser.parseString(data.toString(), function(err, result) {
        if (err) {
            throw Error(err);
        } else {
            if (result.rss) {
                parsed = new Rss(result.rss);
            } else if (result.feed) {
                parsed = new Feed(result.feed);
            }
        }
    });
    return parsed;
}

module.exports = parse;