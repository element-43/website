import { Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';

// Types.
import { IApplicationState } from '../../store';

export interface IProps {
  location: Location;
}

export class ScrollToTop extends React.PureComponent<IProps> {
  public componentDidUpdate(prevProps: IProps): void {
    // If it is a new location, scroll to the top.
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  public render(): null {
    return null;
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  location: state.router.location,
});

export default connect(mapStateToProps)(ScrollToTop);
