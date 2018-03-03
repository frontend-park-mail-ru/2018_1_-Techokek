'use strict';

import AbstractSection from '../abstractSection.js';

class Profile extends AbstractSection {
    render({
        profileData = {},
        historyW
    } = {}) {
        this._el.innerHTML = window.profileTmplTemplate();
    }
}

export default Profile;