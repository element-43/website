import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions.
import { closeAsteroidsAction } from '../../store/layout/actions';

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
  const dispatch = useDispatch();

  return (
    <>
      <GoogleAnalytics />
      <KonamiCode />
      <ScrollToTop />
      {asteroidsOpen && (
        <AsteroidsGame onClose={() => dispatch(closeAsteroidsAction())} />
      )}
      <Terminal />
      {props.children}
    </>
  );
};

export default Shell;
