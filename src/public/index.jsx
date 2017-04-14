import React from 'react';
import ReactDom from 'react-dom';

// Store.
import configureStore from './store';

// Load global/vendor styles.
import './stylesheets/vendor/index.scss';
import './stylesheets/fonts/index.scss';
import './stylesheets/global/index.scss';

// Containers.
import App from './containers/App/App';

const store = configureStore();

ReactDom.render(
    <App store={ store } />,
    document.getElementById('root')
);
