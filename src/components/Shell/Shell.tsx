import React from 'react';
import { useSelector } from 'react-redux';

// Store.
import { IApplicationState } from '../../store';

// Components.
import AsteroidsGame from '../AsteroidsGame';
import GoogleAnalytics from '../GoogleAnalytics';
import KonamiCode from '../KonamiCode';
import ScrollToTop from '../ScrollToTop';
import Terminal from '../Terminal';

export interface IProps {
  children: React.ReactNode;
}

export const Shell: React.FunctionComponent<IProps> = (props: IProps) => {
  const asteroidsOpen: boolean = useSelector(
    (state: IApplicationState) => state.layout.asteroids.open
  );

  return (
    <>
      <GoogleAnalytics />
      <KonamiCode />
      <ScrollToTop />
      {asteroidsOpen && <AsteroidsGame />}
      <Terminal />
      {props.children}
    </>
  );
};

export default Shell;
