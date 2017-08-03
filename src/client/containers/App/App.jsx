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
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';
import Header from '../../components/Header/Header';
import KonamiCode from '../../components/KonamiCode/KonamiCode';
import MobileHeader from '../../components/MobileHeader/MobileHeader';
import MobileLayout from '../../components/MobileLayout/MobileLayout';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';
import Terminal from '../../components/Terminal/Terminal';

const menu = [
    {
        title: strings.pages.about.title,
        path: defaults.routes.about
    },
    {
        title: strings.pages.blog.title,
        path: defaults.routes.blog
    },
    {
        title: strings.pages.portfolio.title,
        path: defaults.routes.portfolio
    },
    {
        title: strings.pages.contact.title,
        path: defaults.routes.contact
    }
];

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
                    <MobileLayout>
                        <MobileHeader menu={ menu } />
                    </MobileLayout>
                    <DefaultLayout>
                        <Header menu={ menu } />
                    </DefaultLayout>
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
