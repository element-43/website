import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';

// Load global/vendor styles.
// import './stylesheets/vendor/_index.scss';
// import './stylesheets/fonts/_index.scss';
// import './stylesheets/global/_index.scss';

import Routes from './routes';

ReactDom.render(
    <Routes history={ browserHistory } />,
    document.getElementById('root')
);
