import * as React from 'react';
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';

class ScrollToTop extends React.PureComponent<RouteComponentProps<ScrollToTop>> {
    componentDidUpdate(prevProps: RouteComponentProps<ScrollToTop>): void {
        // If it is a new location, scroll to the top.
        if (prevProps.location.pathname !== this.props.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render(): null {
        return null;
    }
}

export default withRouter(ScrollToTop);
