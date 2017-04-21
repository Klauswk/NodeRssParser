'use strict';

class Entry {

    constructor(entry) {
        this.title = entry.title[0]._ == null ? entry.title[0] : entry.title[0]._;
        this.link = entry.link[0].$.href;
        this.content = entry.content[0]._;
    }
}

module.exports = Entry;