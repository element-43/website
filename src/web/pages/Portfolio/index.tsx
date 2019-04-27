import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Config.
import { pages } from '../../../common/strings';

// Components.
import { Page } from '../../components/Page';

class Portfolio extends React.Component<RouteComponentProps<Portfolio>> {
  constructor(props: RouteComponentProps<Portfolio>) {
    super(props);
  }

  render() {
    return (
      <Page title={pages.portfolio.title}>
        <h1>Portfolio</h1>
      </Page>
    );
  }
}

export default Portfolio;
export { Portfolio };
