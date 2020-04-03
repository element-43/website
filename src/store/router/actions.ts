import * as ConnectedReactRouter from 'connected-react-router';
import { LocationState, Path } from 'history';
import { ActionCreator } from 'redux';

// Types.
import { PushAction, ReplaceAction } from './types';

export const push: ActionCreator<PushAction> = (
  path: Path,
  state?: LocationState
) => ConnectedReactRouter.push(path, state);

export const replace: ActionCreator<ReplaceAction> = (
  path: Path,
  state?: LocationState
) => ConnectedReactRouter.replace(path, state);
