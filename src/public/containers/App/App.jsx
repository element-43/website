import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/application.util';

//Components.
import Async from '../../components/Async/Async';
import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';
//import Header from '../../components/Header/Header';
import KonamiCode from '../../components/KonamiCode/KonamiCode';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';

const App = () => {
    /* eslint-disable max-len */
    return (
        <Router>
            <div className="app">
                { getHelmet(strings.document.title) }
                <GoogleAnalytics />
                <KonamiCode />
                <ScrollTop />
                {/*<Header />*/}
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={ props => <Async load={ System.import('../HomePage/HomePage') } { ...props } /> } />
                    <Route
                        path={ defaults.routes.about }
                        component={ props => <Async load={ System.import('../AboutPage/AboutPage') } { ...props } /> } />
                    <Route
                        path={ defaults.routes.blog }
                        component={ props => <Async load={ System.import('../BlogPage/BlogPage') } { ...props } /> } />
                    <Route
                        path={ defaults.routes.clients }
                        component={ props => <Async load={ System.import('../ClientsPage/ClientsPage') } { ...props } /> } />
                    <Route
                        path={ defaults.routes.error }
                        component={ props => <Async load={ System.import('../ErrorPage/ErrorPage') } { ...props } /> } />
                    <Route
                        path={ defaults.routes.notFound }
                        component={ props => <Async load={ System.import('../NotFoundPage/NotFoundPage') } { ...props } /> } />
                    <Redirect
                        from="*"
                        to={ defaults.routes.notFound } />
                </Switch>
            </div>
        </Router>
    );
    /* eslint-enable max-len */
};

export default App;
