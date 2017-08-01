import React, { Component } from 'react';

// Config.
import { strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class AboutPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.about.title}`) }
            </main>
        );
    }
}

export default AboutPage;
