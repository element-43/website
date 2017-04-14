import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

export default function configureStore() {
    const enhancers = [
        applyMiddleware(thunk)
    ];

    return createStore(reducers, compose.apply(null, enhancers));
}
