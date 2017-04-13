import React from 'react';
import ReactDom from 'react-dom';

// Load global/vendor styles.
// import './stylesheets/vendor/_index.scss';
// import './stylesheets/fonts/_index.scss';
// import './stylesheets/global/_index.scss';

import App from './containers/App/App';

ReactDom.render(
    <App />,
    document.getElementById('root')
);
