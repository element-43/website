import { Component } from 'react';

class GoogleAnalytics extends Component {
    componentDidMount() {
        this.trackPage();
    }

    componentDidUpdate() {
        this.trackPage();
    }

    trackPage() {
        // Send page tracking to the omnipotent Google, but only in production.
        if(process.env.NODE_ENV === 'production' && window.ga) {
            window.ga('send', 'pageview', window.location.pathname);
        }
    }

    render() {
        return null;
    }
}

export default GoogleAnalytics;
