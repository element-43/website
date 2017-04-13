import _ from 'lodash';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Styles.
import styles from './Header.css';

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
                title: strings.page.clients.title,
                path: defaults.routes.clients
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
            <header>
                <ul styleName="menu">
                    { _.map(this.navigation, this.createMenuItem) }
                </ul>
            </header>
        );
    }
}

export default CSSModules(Header, styles);
