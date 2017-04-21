'use strict';

const Entry = require("./Entry");

class Feed {

    constructor(feederObject) {
        this.type = feederObject.$.xmlns;
        this.title = feederObject.title[0];
        this.links = feederObject.link;
        this.lastUpdated = feederObject.updated[0];
        this.authors = feederObject.author;
        this.entries = feederObject.entry.map((entry) => (new Entry(entry)));
    }

}

module.exports = Feed;