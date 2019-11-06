import * as ConnectedReactRouter from 'connected-react-router';
import { History } from 'history';
import { Reducer } from 'redux';

// Types.
import { LocationChangeAction, RouterState } from './types';

const reducer: (
  history: History
) => Reducer<RouterState, LocationChangeAction> =
  ConnectedReactRouter.connectRouter;

export default reducer;
