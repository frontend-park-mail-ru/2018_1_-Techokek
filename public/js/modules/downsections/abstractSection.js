'use strict';

class AbstractSection {
    constructor(selector) {
        this._el = document.querySelector(selector);
        this._el.hidden = true;
    }

    get hidden() {
        return this.el._hidden;
    }

    set hidden(val) {
        this._el.hidden = Boolean(val);
    }
}

export default AbstractSection;