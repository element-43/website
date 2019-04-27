import * as React from 'react';

// Config.
import { pages } from '../../../common/strings';

// Components.
import { Page } from '../../components/Page';

class About extends React.Component {
  render(): React.ReactNode {
    return (
      <Page title={pages.about.title}>
        <h1>About</h1>
      </Page>
    );
  }
}

export default About;
export { About };
