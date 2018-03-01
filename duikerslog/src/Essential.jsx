import React from 'react';
import EssentialItem from './EssentialItem';
import PropTypes from 'prop-types';

const Essential = ({datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind}) => {
    return (
        <EssentialItem datum={datum} locatie={locatie} diepte={diepte} temperatuur={temperatuur} buddy={buddy} luchtStart={luchtStart} luchtEind={luchtEind}/>
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
