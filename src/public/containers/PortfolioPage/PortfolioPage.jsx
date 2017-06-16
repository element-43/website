import React, { Component } from 'react';

// Config.
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class PortfolioPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.portfolio.title) }
            </main>
        );
    }
}

export default PortfolioPage;
