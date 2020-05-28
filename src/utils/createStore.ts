import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
  Reducer,
  Store,
} from 'redux';

// Reducers.
import { layoutReducer } from '../reducers';

// Types.
import { ApplicationState } from '../types';

const createReducers: (history: History) => Reducer<ApplicationState> = (
  history: History
) =>
  combineReducers<ApplicationState>({
    layout: layoutReducer,
    router: connectRouter(history),
  });
// Use Redux Dev Tools in development only.
const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function createStore(history: History): Store<ApplicationState> {
  return createReduxStore(
    createReducers(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
