import React, { Component } from 'react';

// Config.
import { strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class ErrorPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.error.title}`) }
            </main>
        );
    }
}


export default ErrorPage;

