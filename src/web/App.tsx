import * as React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { Store } from 'redux';
import { injectGlobal } from 'styled-components';

// Config.
import { routes } from '../common/defaults';

// Components.
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import PageShell from './components/PageShell';
import Portfolio from './pages/Portfolio';

// Store.
import {
    ApplicationState,
    configureStore
} from './store';

// Styles.
import palette from './styles/palette';

injectGlobal`
  @font-face {
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    src: url("${require('./fonts/VT323/VT323-Regular.ttf')}") format("truetype"),
      url("${require('./fonts/VT323/VT323-Regular.woff')}") format("woff"),
      url("${require('./fonts/VT323/VT323-Regular.woff2')}") format("woff2");
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    width: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  p,
  a {
    color: ${palette.greyScale.black};
    font-weight: 400;
    margin: 0;
  }
    
  h1 {
    font-size: 3.2rem;
  }
    
  h2 {
    font-size: 2.5rem;
  }
    
  h3 {
    font-size: 1.8rem;
  }
    
  h4 {
    font-size: 1.3rem;
  }
    
  a,
  p {
    font-size: 1rem;
  }
    
  a {
    color: ${palette.brand.purple500};
    cursor: pointer;
    display: block;
    text-decoration: none;
    transition: all 300ms ease-in-out;
        
    &:hover {
      color: ${palette.brand.green500};
    }
  }
`;

const store: Store<ApplicationState> = configureStore();

const App: React.SFC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PageShell>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        component={ Landing } />
                    <Route
                        exact={true}
                        path={routes.about}
                        component={ About } />
                    <Route
                        exact={true}
                        path={routes.contact}
                        component={ Contact } />
                    <Route
                        exact={true}
                        path={routes.portfolio}
                        component={ Portfolio } />
                    <Redirect
                        from="*"
                        to="/" />
                </Switch>
            </PageShell>
        </BrowserRouter>
    </Provider>
);

export {
    App,
};
