import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

// Config.
import { defaults } from '../../../common/index';

// Utilities.
import { cssModulesOptions } from '../../utilities/StylesUtil';

// Components.
import Logo from '../../components/Logo/Logo';
import SocialButton from '../../components/SocialButton/SocialButton';

// Styles.
import styles from './Header.css';

class Header extends Component {
    static propTypes = {
        menu: PropTypes.array.isRequired
    };

    createMenuItem(item, index) {
        return (
            <Link
                key={ index }
                styleName="item"
                to={ item.path }>
                { item.title }
            </Link>
        );
    }

    render() {
        return (
            <header styleName="header">
                <div styleName="inner">
                    <div styleName="brand">
                        <Link
                            styleName="logo"
                            to="/">
                            <Logo
                                colour="white"
                                height={ 4 } />
                        </Link>
                        <nav styleName="nav">
                            { _.map(this.props.menu, this.createMenuItem) }
                        </nav>
                    </div>
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
            </header>
        );
    }
}

export default CSSModules(Header, styles, cssModulesOptions);
