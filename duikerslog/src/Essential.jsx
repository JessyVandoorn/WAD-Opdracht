import React from 'react';
import EssentialItem from './EssentialItem';
import PropTypes from 'prop-types';

const Essential = ({duiken}) => {
    return (
        <EssentialItem duiken={duiken}/>
    );
}

Essential.propTypes = {
    datum: PropTypes.string.isRequired,
    locatie: PropTypes.string.isRequired,
    diepte: PropTypes.number.isRequired,
    temperatuur: PropTypes.number.isRequired,
    buddy: PropTypes.string.isRequired,
    luchtStart: PropTypes.number.isRequired,
    luchtEind: PropTypes.number.isRequired
}

export default Essential;
