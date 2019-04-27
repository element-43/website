import * as React from 'react';

type WindowWithGA = Window & {
  ga: (action: string, type: string, location: string) => void;
};

class GoogleAnalytics extends React.PureComponent {
  componentDidMount(): void {
    GoogleAnalytics.trackPage();
  }

  componentDidUpdate(): void {
    GoogleAnalytics.trackPage();
  }

  static trackPage() {
    // Send page tracking to the omnipotent Google, but only in production.
    if (process.env.NODE_ENV === 'production' && (window as WindowWithGA).ga) {
      (window as WindowWithGA).ga('send', 'pageview', window.location.pathname);
    }
  }

  render(): null {
    return null;
  }
}

export { GoogleAnalytics };
