import * as React from 'react';
import { connect } from 'react-redux';

// Store.
import { ApplicationState } from '../../store';
import { LayoutState } from '../../store/layout/types';

// Components.
import AsteroidsGame from '../AsteroidsGame';
import { GoogleAnalytics } from '../GoogleAnalytics';
import KonamiCode from '../KonamiCode';
import ScrollToTop from '../ScrollToTop';
import Terminal from '../Terminal';

interface Props {
  children: React.ReactNode;
  layout: LayoutState;
}

const PageShell: React.SFC<Props> = (props: Props) => (
  <>
    <GoogleAnalytics />
    <KonamiCode />
    <ScrollToTop />
    {props.layout.asteroids.isOpen && <AsteroidsGame />}
    <Terminal />
    {props.children}
  </>
);

const mapStateToProps = (state: ApplicationState) => {
  return {
    layout: state.layout,
  };
};

export default connect(mapStateToProps)(PageShell);
export { PageShell, Props };
