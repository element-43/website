import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Components.
import { Page } from '../../components/Page';

class Landing extends React.Component<RouteComponentProps<{}>> {
  constructor(props: RouteComponentProps<{}>) {
    super(props);
  }

  render() {
    return (
      <Page>
        <h1>Hello human!</h1>
      </Page>
    );
  }
}

export default Landing;
export { Landing };
