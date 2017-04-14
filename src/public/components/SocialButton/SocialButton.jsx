import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './SocialButton.css';

class SocialButton extends Component {
    /* eslint-disable max-len */
    render() {
        return (
            <a
                className="fa fa-4x fa-twitter"
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
    /* eslint-enable max-len */
}

SocialButton.propTypes = {
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default CSSModules(SocialButton, styles);
