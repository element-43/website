import * as ConnectedReactRouter from 'connected-react-router';

// ====================================================
// Actions.
// ====================================================

export type PushAction = ConnectedReactRouter.CallHistoryMethodAction;

export type LocationChangeAction = ConnectedReactRouter.LocationChangeAction;

export type ReplaceAction = ConnectedReactRouter.CallHistoryMethodAction;

// ====================================================
// States.
// ====================================================

export type RouterState = ConnectedReactRouter.RouterState;
