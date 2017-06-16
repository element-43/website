import React, { Component } from 'react';

// Config.
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class NotFoundPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.notFound.title) }
            </main>
        );
    }
}

export default NotFoundPage;
