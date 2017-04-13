import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidMount() {
        this.trackPage();
    }

    componentDidUpdate() {
        this.trackPage();
    }

    trackPage() {
        // Send page tracking to the omnipotent Google, but only in production.
        if(process.env.NODE_ENV === 'production' && window.ga) {
            window.ga('send', 'pageview', location.pathname);
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);
