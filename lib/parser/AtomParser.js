'use strict';

const Feed = require("./../atom/Feed");
const parser = require('xml2js').Parser();


function parse(data) {
    let feed;

    parser.parseString(data.toString(), function(err, result) {
        feed = new Feed(result.feed);
    });

    return feed;
}

module.exports = parse;