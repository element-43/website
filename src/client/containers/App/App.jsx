import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
    render() {
        return this.props.children && React.cloneElement(this.props.children, { services: 'testy' });
    }
}

App.propTypes = {
    children: PropTypes.node
};

export default App;
