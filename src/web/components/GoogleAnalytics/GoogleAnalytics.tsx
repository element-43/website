import * as React from 'react';

export class GoogleAnalytics extends React.PureComponent {
  public componentDidMount(): void {
    GoogleAnalytics.trackPage();
  }

  public componentDidUpdate(): void {
    GoogleAnalytics.trackPage();
  }

  static trackPage() {
    // Send page tracking to the omnipotent Google, but only in production.
    if (process.env.NODE_ENV === 'production' && window.ga) {
      window.ga('send', 'pageview', window.location.pathname);
    }
  }

  public render(): null {
    return null;
  }
}

export default GoogleAnalytics;
