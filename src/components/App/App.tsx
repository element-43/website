import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';

// Components.
import GlobalStyle from '../GlobalStyle';
import Shell from '../Shell';

// Enums.
import { Routes } from '../../enums';

// Pages.
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';

// Store.
import { configureStore, IApplicationState } from '../../store';

const history: History = createBrowserHistory();
const store: Store<IApplicationState> = configureStore(history);

export const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Shell>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path={Routes.About} component={About} />
            <Route exact={true} path={Routes.Contact} component={Contact} />
            <Route exact={true} path={Routes.Portfolio} component={Portfolio} />
            <Redirect from={Routes.Home} to="/" />
            <Redirect from="*" to="/" />
          </Switch>
        </Shell>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
