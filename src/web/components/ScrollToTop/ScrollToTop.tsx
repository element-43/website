import { Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';

// Types.
import { ApplicationState } from '../../store';

export interface Props {
  location: Location;
}

class ScrollToTop extends React.PureComponent<Props> {
  public componentDidUpdate(prevProps: Props): void {
    // If it is a new location, scroll to the top.
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  public render(): null {
    return null;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  location: state.router.location,
});

export default connect(mapStateToProps)(ScrollToTop);
