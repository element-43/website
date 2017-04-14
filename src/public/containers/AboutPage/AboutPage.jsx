import React, { Component } from 'react';

// Config.
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/application.util';

class AboutPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.about.title) }

            </main>
        );
    }
}

export default AboutPage;
