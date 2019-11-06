import { History } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
} from 'redux';

// Middlewares.
import routerMiddleware from './router/middleware';

// Reducers.
import layoutReducer from './layout/reducer';
import routerReducer from './router/reducer';

// Types.
import { ILayoutState } from './layout/types';
import { RouterState } from './router/types';

export interface IApplicationState {
  layout: ILayoutState;
  router: RouterState;
}

const createReducers: (history: History) => Reducer<IApplicationState> = (
  history: History
) =>
  combineReducers<IApplicationState>({
    layout: layoutReducer,
    router: routerReducer(history),
  });
// Use Redux Dev Tools in development only.
const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export function configureStore(history: History): Store<IApplicationState> {
  return createStore(
    createReducers(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
