import React from 'react';
import ReactDom from 'react-dom';

// Load global/vendor styles.
import './stylesheets/vendor/index.scss';
// import './stylesheets/fonts/index.scss';
import './stylesheets/global/index.scss';

import App from './containers/App/App';

ReactDom.render(
    <App />,
    document.getElementById('root')
);
