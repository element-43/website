import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions.
import { closeAsteroidsAction, setBarrelRollingAction } from '../../actions';

// Components.
import AsteroidsGame from '../AsteroidsGame';
import BarrelRoll from '../BarrelRoll';
import GoogleAnalytics from '../GoogleAnalytics';
import KonamiCode from '../KonamiCode';
import ScrollToTop from '../ScrollToTop';
import Terminal from '../Terminal';

// Types.
import { ApplicationState } from '../../types';

export interface IProps {
  children: React.ReactNode;
}

export const Shell: React.FC<IProps> = ({ children }: IProps) => {
  const asteroidsOpen: boolean = useSelector(
    (state: ApplicationState) => state.layout.asteroids.open
  );
  const barrelRolling: boolean = useSelector(
    (state: ApplicationState) => state.layout.barrelRolling
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
      <BarrelRoll
        onComplete={() => dispatch(setBarrelRollingAction(false))}
        roll={barrelRolling}
      />
      <Terminal />
      {children}
    </>
  );
};

export default Shell;
