import PropTypes from 'prop-types';
import React from 'react';
import Responsive from 'react-responsive';

const DefaultLayout = props => <Responsive minWidth={ 1111 }>{ props.children }</Responsive>;

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;
