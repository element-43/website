import { combineReducers, createStore, Reducer, Store } from 'redux';

// Types.
import { LayoutState } from './layout/types';

// Reducers.
import layoutReducer from './layout/reducer';

export interface ApplicationState {
  layout: LayoutState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  layout: layoutReducer,
});

export function configureStore(): Store<ApplicationState> {
  return createStore(reducers);
}
