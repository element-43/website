import React, { Component } from 'react';

// Config.
import { strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class NotFoundPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.notFound.title}`) }
            </main>
        );
    }
}

export default NotFoundPage;
