import * as React from 'react';
import { connect } from 'react-redux';

// Store.
import { IApplicationState } from '../../store';

// Components.
import { AsteroidsGame } from '../AsteroidsGame';
import { GoogleAnalytics } from '../GoogleAnalytics';
import { KonamiCode } from '../KonamiCode';
import { ScrollToTop } from '../ScrollToTop';
import { Terminal } from '../Terminal';

export interface IProps {
  children: React.ReactNode;
  asteroidsOpen: boolean;
}

export const Shell: React.FC<IProps> = (props: IProps) => (
  <>
    <GoogleAnalytics />
    <KonamiCode />
    <ScrollToTop />
    {props.asteroidsOpen && <AsteroidsGame />}
    <Terminal />
    {props.children}
  </>
);

const mapStateToProps = (state: IApplicationState) => {
  return {
    asteroidsOpen: state.layout.asteroids.open,
  };
};

export default connect(mapStateToProps)(Shell);
