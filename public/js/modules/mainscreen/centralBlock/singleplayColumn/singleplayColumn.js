'use strict';

import * as Buttons from "../../../tools/buttons/buttons.js";

class SingleplayColumn {
    constructor(selector) {
        this._el = document.querySelector(selector);
    }

    render() {
        const container = this._el.querySelector('.js-play-buttons-container');

        this._playButton = new Buttons.PLayButton({
            text: 'Single play',
            wide: true
        });
        
        container.appendChild(this._playButton.element);
    }
}

export default SingleplayColumn;