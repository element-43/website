import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';

// Components.
import GlobalStyle from '../GlobalStyle';
import Shell from '../Shell';

// Enums.
import { Routes } from '../../enums';

// Types.
import { ApplicationState } from '../../types';

// Utils.
import { createStore } from '../../utils';

const history: History = createBrowserHistory();
const store: Store<ApplicationState> = createStore(history);

export const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Suspense fallback={null}>
        <Shell>
          <Switch>
            <Route
              exact={true}
              path="/"
              component={lazy(() => import('../../pages/Home'))}
            />
            <Route
              exact={true}
              path={Routes.About}
              component={lazy(() => import('../../pages/About'))}
            />
            <Route
              exact={true}
              path={Routes.Contact}
              component={lazy(() => import('../../pages/Contact'))}
            />
            <Route
              exact={true}
              path={Routes.Portfolio}
              component={lazy(() => import('../../pages/Portfolio'))}
            />
            <Redirect from={Routes.Home} to="/" />
            <Redirect from="*" to="/" />
          </Switch>
        </Shell>
      </Suspense>
    </ConnectedRouter>
  </Provider>
);

export default App;
