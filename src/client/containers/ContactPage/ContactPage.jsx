import React, { Component } from 'react';

// Config.
import { strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class ContactPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.contact.title}`) }
            </main>
        );
    }
}

export default ContactPage;
