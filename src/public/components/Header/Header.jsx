import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

// Config.
import defaults from '../../../../config/defaults';

// Styles.
import styles from './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={ defaults.routes.about }>About</Link>
                    </li>
                    <li>
                        <Link to={ defaults.routes.blog }>Blog</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default CSSModules(Header, styles);
