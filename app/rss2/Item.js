'use strict';

class Item {

    constructor(entry) {
        this.title = entry.title[0]._ == null ? entry.title[0] : entry.title[0]._;
        this.link = entry.link[0];
        this.content = entry.description[0];
    }
}

module.exports = Item;