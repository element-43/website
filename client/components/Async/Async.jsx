import PropTypes from 'prop-types';
import React from 'react';

class Async extends React.Component {
    constructor() {
        super();

        this.component = null;
    }

    componentWillMount() {
        this.props.load
            .then(component => {
                this.component = component;

                // Force a render.
                this.forceUpdate();
            });
    }

    render() {
        return (this.component ? <this.component.default { ...this.props } /> : null);
    }
}

Async.propTypes = {
    load: PropTypes.object.isRequired
};

export default Async;
