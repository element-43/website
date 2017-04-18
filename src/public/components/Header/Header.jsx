import _ from 'lodash';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Components.

import SocialButton from '../../components/SocialButton/SocialButton';

// Styles.
import styles from './Header.css';

// Images.
import logoImageWhite from '../../images/logo-white.png';

class Header extends Component {
    constructor() {
        super();

        this.navigation = [
            {
                title: strings.page.about.title,
                path: defaults.routes.about
            },
            {
                title: strings.page.blog.title,
                path: defaults.routes.blog
            },
            {
                title: strings.page.portfolio.title,
                path: defaults.routes.portfolio
            },
            {
                title: strings.page.contact.title,
                path: defaults.routes.contact
            }
        ];
    }

    createMenuItem(item, index) {
        return (
            <li
                key={ index }
                styleName="item">
                <Link to={ item.path }>{ item.title }</Link>
            </li>
        );
    }

    render() {
        return (
            <header styleName="header">
                <div styleName="headerInner">
                    <div styleName="brand">
                        <Link
                            styleName="logo"
                            to="/">
                            <img src={ logoImageWhite } />
                        </Link>

                        <div styleName="social">
                            <SocialButton
                                href={ defaults.links.twitter }
                                type="twitter" />
                            <SocialButton
                                href={ defaults.links.linkedIn }
                                type="linkedin" />
                            <SocialButton
                                href={ defaults.links.gitHub }
                                type="github" />
                        </div>
                    </div>
                    <ul styleName="menu">
                        { _.map(this.navigation, this.createMenuItem) }
                    </ul>
                </div>
            </header>
        );
    }
}

export default CSSModules(Header, styles);
