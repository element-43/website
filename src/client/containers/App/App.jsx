import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Config.
import { defaults, strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';
import { cssModulesOptions } from '../../utilities/StylesUtil';

// Styles.
import styles from './App.css';

//Components.
import Async from '../../components/Async/Async';
import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';
import Header from '../../components/Header/Header';
import KonamiCode from '../../components/KonamiCode/KonamiCode';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';
import Terminal from '../../components/Terminal/Terminal';

class App extends Component {
    /* eslint-disable max-len */
    render() {
        return (
            <BrowserRouter>
                <div styleName="app">
                    { getHelmet(strings.document.title) }
                    <GoogleAnalytics />
                    <KonamiCode />
                    <ScrollTop />
                    <Header />
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
                            path={ defaults.routes.contact }
                            component={ props => <Async load={ System.import('../ContactPage/ContactPage') } { ...props } /> } />
                        <Route
                            path={ defaults.routes.error }
                            component={ props => <Async load={ System.import('../ErrorPage/ErrorPage') } { ...props } /> } />
                        <Route
                            path={ defaults.routes.notFound }
                            component={ props => <Async load={ System.import('../NotFoundPage/NotFoundPage') } { ...props } /> } />
                        <Route
                            path={ defaults.routes.portfolio }
                            component={ props => <Async load={ System.import('../PortfolioPage/PortfolioPage') } { ...props } /> } />
                        <Redirect
                            from="*"
                            to={ defaults.routes.notFound } />
                    </Switch>
                    <Terminal />
                </div>
            </BrowserRouter>
        );
    }
    /* eslint-enable max-len */
}

export default CSSModules(App, styles, cssModulesOptions);
