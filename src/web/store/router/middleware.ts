import * as ConnectedReactRouter from 'connected-react-router';
import { History } from 'history';
import { Middleware } from 'redux';

const middleware: (history: History) => Middleware =
  ConnectedReactRouter.routerMiddleware;

export default middleware;
