import PropTypes from 'prop-types';
import React from 'react';
import { IndexRedirect, Redirect, Route, Router } from 'react-router';

// Config.
import defaults from '../../config/defaults';

// Containers.
import App from './containers/App/App';

//Components.
import Async from './components/Async/Async';

/**
 * Invoked when the URL changes.
 */
export function onRouteUpdate() {
    // Send page tracking to the omnipotent Google.
    if(process.env.NODE_ENV === 'production' && window.ga) {
        window.ga('send', 'pageview', location.pathname);
    }

    // Scroll to the top.
    window.scrollTo(0, 0);
}

/**
 * Packages up the <Route> components.
 */
/* eslint-disable max-len */
function Routes(props) {
    return (
        <Router
            { ...props }
            onUpdate={ onRouteUpdate }>
            <Route
                path="/"
                component={ App } >
                <IndexRedirect to={ defaults.routes.home } />
                <Route
                    path={ defaults.routes.about }
                    component={ props => <Async load={ System.import('./containers/AboutPage/AboutPage') } { ...props } /> } />
                <Route
                    path={ defaults.routes.blog }
                    component={ props => <Async load={ System.import('./containers/BlogPage/BlogPage') } { ...props } /> } />
                <Route
                    path={ defaults.routes.home }
                    component={ props => <Async load={ System.import('./containers/HomePage/HomePage') } { ...props } /> } />
            </Route>
            <Route
                path={ defaults.routes.error }
                component={ props => <Async load={ System.import('./containers/ErrorPage/ErrorPage') } { ...props } /> } />
            <Route
                path={ defaults.routes.notFound }
                component={ props => <Async load={ System.import('./containers/NotFoundPage/NotFoundPage') } { ...props } /> } />
            <Redirect
                from="*"
                to={ defaults.routes.notFound } />
        </Router>
    );
}
/* eslint-enable max-len */

Routes.propTypes = {
    services: PropTypes.object
};

export default Routes;
