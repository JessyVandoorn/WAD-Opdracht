import React from 'react';
import PropTypes from 'prop-types';

const EssentialItem = ({duiken}) => {
    const renderDuik = (id, {Datum, Locatie,Diepte, Temperatuur, Buddy, luchtStart, luchtEind}) => {
        return(
            <tr key={id}>
                <td className="td">{Datum}</td>
                <td className="td">{Locatie}</td>
                <td className="td">{Diepte}</td>
                <td className="td">{Temperatuur}</td>
                <td className="td">{Buddy}</td>
                <td className="td">{luchtStart}</td>
                <td className="td">{luchtEind}</td>
            </tr>
        );
    }

    return (
        <tbody>
          {Object.keys(duiken).map(id =>
            renderDuik(id, duiken[id]))}
        </tbody>
      );

    
}

EssentialItem.propTypes = {
    datum: PropTypes.string.isRequired,
    locatie: PropTypes.string.isRequired,
    diepte: PropTypes.number.isRequired,
    temperatuur: PropTypes.number.isRequired,
    buddy: PropTypes.string.isRequired,
    luchtStart: PropTypes.number.isRequired,
    luchtEind: PropTypes.number.isRequired
}

export default EssentialItem;