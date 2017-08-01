import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './Button.css';

class Button extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

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
}

export default CSSModules(Button, styles);
