import { CallHistoryMethodAction, push, replace } from 'connected-react-router';
import { LocationState, Path } from 'history';
import { ActionCreator } from 'redux';

export const pushAction: ActionCreator<CallHistoryMethodAction> = (
  path: Path,
  state?: LocationState
) => push(path, state);

export const replaceAction: ActionCreator<CallHistoryMethodAction> = (
  path: Path,
  state?: LocationState
) => replace(path, state);
