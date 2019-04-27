import * as React from 'react';

// Config.
import { pages } from '../../../common/strings';

// Components.
import { Page } from '../../components/Page';

class Contact extends React.Component {
  render() {
    return (
      <Page title={pages.contact.title}>
        <h1>Contact</h1>
      </Page>
    );
  }
}

export default Contact;
export { Contact };
