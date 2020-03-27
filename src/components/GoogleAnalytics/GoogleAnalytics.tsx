import React, { useEffect } from 'react';

export const GoogleAnalytics: React.FunctionComponent = () => {
  const trackPage: () => void = () => {
    // Send page tracking to the omnipotent Google, but only in production.
    if (process.env.NODE_ENV === 'production' && window.ga) {
      window.ga('send', 'pageview', window.location.pathname);
    }
  };

  useEffect(trackPage);

  return null;
};

export default GoogleAnalytics;
