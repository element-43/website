import PropTypes from 'prop-types';
import React from 'react';
import Responsive from 'react-responsive';

const MobileLayout = props => <Responsive maxWidth={ 1110 }>{ props.children }</Responsive>;

MobileLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default MobileLayout;
