'use strict';

const Item = require("./Item");

class Rss {

    constructor(rssObject) {
        this.type = `rss ${rssObject.$.version}`;
        this.title = rssObject.channel[0].title[0];
        this.links = rssObject.channel[0].link;
        this.lastUpdated = rssObject.channel[0].lastBuildDate[0];
        this.authors = rssObject.channel[0].author;
        this.entries = rssObject.channel[0].item.map((item) => (new Item(item)));
    }

}

module.exports = Rss;