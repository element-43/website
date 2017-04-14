import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './Button.css';

class Button extends Component {
    /* eslint-disable max-len */
    render() {
        return (
            <button
                onClick={ this.props.onClick }
                styleName="button"
                type="button">
                <div styleName="overlay">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                { this.props.label }
            </button>
        );
    }
    /* eslint-enable max-len */
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CSSModules(Button, styles);