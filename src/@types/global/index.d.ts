import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    ga: (action: string, type: string, location: string) => void;
  }
}
