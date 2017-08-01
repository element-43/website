import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Global styles.
import './stylesheets/vendor/index.scss';
import './stylesheets/fonts/index.scss';
import './stylesheets/global/index.scss';

// Store.
import configureStore from './store';

// Services.
import createServices from './services/index';

// Containers.
import App from './containers/App/App';

const store = configureStore();
const services = createServices();

render(
    <Provider
        services={ services }
        store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

