import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Velocity from 'velocity-animate';

// Styles.
import styles from './MobileHeader.css';

// Utilities.
import { primary500Colour, cssModulesOptions, whiteColour } from '../../utilities/StylesUtil';

// Components.
import CrossIcon from '../CrossIcon/CrossIcon';
import Logo from '../../components/Logo/Logo';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

const defaultAnimationOptions = {
    duration: 250,
    queue: false
};

class MobileHeader extends Component {
    static propTypes = {
        application: PropTypes.object,
        dispatch: PropTypes.func,
        history: PropTypes.object,
        menu: PropTypes.array.isRequired
    };

    constructor() {
        super();

        this.menuOuterElement = null;
    }

    closeMenu() {
        let options;

        if(this.menuOuterElement && this.menuInnerElement) {
            options = _.assign(defaultAnimationOptions, { visibility: 'hidden' });

            return Velocity(this.menuInnerElement, { opacity: 0 }, options)
                .then(() => Velocity(this.menuOuterElement, { height: 0, left: '50%', top: '50%', width: 0 }, options));
        }
    }

    createMenuItem(item, index) {
        const onClick = path => {
            this.props.history.push(path);
            this.closeMenu();
        };

        return (
            <div
                key={ index }
                onClick={ () => onClick(item.path)  }
                styleName="item">
                { item.title }
            </div>
        );
    }

    openMenu() {
        let options;

        if(this.menuOuterElement && this.menuInnerElement) {
            options = _.assign(defaultAnimationOptions, { visibility: 'visible' });

            return Velocity(this.menuOuterElement, { height: '100%', left: 0, top: 0, width: '100%' }, options)
                .then(() => Velocity(this.menuInnerElement, { opacity: 1 }, options));
        }
    }

    render() {
        return (
            <header styleName="header">
                <div
                    className="container"
                    styleName="inner brand">
                    <Link
                        styleName="logo"
                        to="/">
                        <Logo height={ 4 } />
                    </Link>
                    <MenuIcon
                        colour={ primary500Colour }
                        onClick={ () => this.openMenu() }
                        size={ 3 }
                        title="Menu icon" />
                </div>
                <div
                    ref={ node => this.menuOuterElement = node }
                    styleName="overlay">
                    <div
                        className="container"
                        ref={ node => this.menuInnerElement = node }
                        styleName="inner">
                        <CrossIcon
                            colour={ whiteColour }
                            onClick={ () => this.closeMenu() }
                            size={ 3 }
                            title="Cross icon" />
                        <nav styleName="nav">
                            { _.map(this.props.menu, this.createMenuItem.bind(this)) }
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        application: state.application
    };
}

export default withRouter(connect(mapStateToProps)(CSSModules(MobileHeader, styles, cssModulesOptions)));
export { MobileHeader as MobileHeaderTest }; // Export for testing.
