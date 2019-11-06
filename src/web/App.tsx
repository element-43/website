import * as ConnectedReactRouter from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';

// Components.
import { GlobalStyle } from './components/GlobalStyle';
import { Shell } from './components/Shell';

// Enums.
import { RoutesEnum } from '../common/enums';

// Pages.
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

// Store.
import { ApplicationState, configureStore } from './store';

const history: History = createBrowserHistory();
const Router = ConnectedReactRouter.ConnectedRouter;
const store: Store<ApplicationState> = configureStore(history);

export const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router history={history}>
      <Shell>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path={RoutesEnum.About} component={About} />
          <Route exact={true} path={RoutesEnum.Contact} component={Contact} />
          <Route
            exact={true}
            path={RoutesEnum.Portfolio}
            component={Portfolio}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </Shell>
    </Router>
  </Provider>
);
