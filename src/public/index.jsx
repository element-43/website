import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// Store.
import configureStore from './store';

// Services.
import createServices from './services/index';

// Load global/vendor styles.
import './stylesheets/vendor/index.scss';
import './stylesheets/fonts/index.scss';
import './stylesheets/global/index.scss';

// Containers.
import App from './containers/App/App';

const store = configureStore();
const services = createServices();

ReactDom.render(
    <Provider
        services={ services }
        store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
