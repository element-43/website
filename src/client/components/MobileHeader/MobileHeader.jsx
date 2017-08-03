import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

// Styles.
import styles from './MobileHeader.css';

// Utilities.
import { primary500Colour, cssModulesOptions } from '../../utilities/StylesUtil';

// Components.
import Logo from '../../components/Logo/Logo';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

class MobileHeader extends Component {
    static propTypes = {
        menu: PropTypes.array.isRequired
    };

    openMenu() {

    }

    render() {
        return (
            <header styleName="header">
                <div
                    className="container"
                    styleName="inner">
                    <Link
                        styleName="brand"
                        to="/">
                        <Logo height={ 4 } />
                    </Link>
                    <MenuIcon
                        colour={ primary500Colour }
                        onClick={ () => this.openMenu() }
                        size={ 3 }
                        title="Menu icon" />
                </div>
            </header>
        );
    }
}

export default CSSModules(MobileHeader, styles, cssModulesOptions);
