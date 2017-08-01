import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './SocialButton.css';

class SocialButton extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    };

    render() {
        return (
            <a
                className={ `fa fa-4x fa-${this.props.type}` }
                href={ this.props.href }
                styleName="link"
                target="_blank">
                <span />
                <span />
                <span />
                <span />
            </a>
        );
    }
}

export default CSSModules(SocialButton, styles);
