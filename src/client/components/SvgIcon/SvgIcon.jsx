import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Utilities.
import { whiteColour, cssModulesOptions } from '../../utilities/StylesUtil';

// Styles.
import styles from './SvgIcon.css';

/**
 * A composite component that is wrapped around an SVG.
 */
class SvgIcon extends Component {
    static defaultProps = {
        colour: whiteColour,
        size: 2.5 // Size in REM.
    };
    static propTypes = {
        children: PropTypes.node.isRequired,
        colour: PropTypes.string,
        onClick: PropTypes.func,
        size: PropTypes.number,
        title: PropTypes.string.isRequired,
        viewBox: PropTypes.string.isRequired
    };

    render() {
        let svgStyles, svgStyleName = 'svg';

        if(this.props.onClick) {
            svgStyleName = svgStyleName + ' hoverable';
            svgStyles = {
                cursor: 'pointer'
            };
        }

        return(
            <svg
                height={ `${this.props.size}rem` }
                onClick={ this.props.onClick }
                style={ svgStyles }
                styleName={ svgStyleName }
                viewBox={ this.props.viewBox }
                width={ `${this.props.size}rem` }
                xmlns="http://www.w3.org/2000/svg">
                <title>{ this.props.title }</title>
                { this.props.children }
            </svg>
        );
    }
}

export default CSSModules(SvgIcon, styles, cssModulesOptions);
export { SvgIcon as SvgIconTest }; // Export for testing.
