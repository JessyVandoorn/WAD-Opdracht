import React from 'react';
import EssentialItem from './EssentialItem';
import PropTypes from 'prop-types';

const Essential = ({duiken}) => {
    return (
        <EssentialItem duiken={duiken}/>
    );
}

Essential.propTypes = {
    duiken: PropTypes.object.isRequired
}

export default Essential;
