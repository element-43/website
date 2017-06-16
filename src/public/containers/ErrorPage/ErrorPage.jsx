import React, { Component } from 'react';

// Config.
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class ErrorPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.error.title) }
            </main>
        );
    }
}


export default ErrorPage;

