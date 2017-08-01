import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    };
    
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

export default withRouter(ScrollToTop);
