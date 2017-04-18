import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        // If it is a new location, scroll to the top.
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(ScrollToTop);
