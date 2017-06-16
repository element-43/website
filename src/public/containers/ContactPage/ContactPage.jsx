import React, { Component } from 'react';

// Config.
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class ContactPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.contact.title) }
            </main>
        );
    }
}

export default ContactPage;
