import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';

// ActionCreators.
import { ApplicationActionCreators } from '../../action-creators/index';

const codeSequence = [
    38, // Up
    38, // Up
    40, // Down
    40, // Down
    37, // Left
    39, // Right
    37, // Left
    39, // Right
    66, // B
    65 // A
];

class KonamiCode extends Component {
    constructor() {
        super();

        this.codePosition = 0;
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        // Remove the keyup event.
        window.removeEventListener('keyup', this.onKeyUp);
    }

    activate() {
        // Open the terminal.
        this.props.dispatch(ApplicationActionCreators.openTerminal());

        // Reset the key sequence.
        this.codePosition = 0;
    }

    onKeyUp(event) {
        const keyCode = event.keyCode;

        if(keyCode === codeSequence[this.codePosition]) {
            // Increase code position.
            this.codePosition++;

            if(this.codePosition >= codeSequence.length) {
                this.activate();
            }
        }
        else {
            // Reset the key sequence.
            this.codePosition = 0;
        }
    }

    render() {
        return null;
    }
}

KonamiCode.propTypes = {
    application: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        application: state.application
    };
}

export default connect(mapStateToProps)(KonamiCode);
export { KonamiCode as KonamiCodeTest }; // Export for testing.
