import React from 'react';
import PropTypes from 'prop-types';

const EssentialItem = ({duiken}) => {
    const renderDuik = (id, {datum, locatie,diepte, temperatuur, buddy, luchtStart, luchtEind}) => {
        return(
            <tr key={id}>
                <td className="td">{datum}</td>
                <td className="td">{locatie}</td>
                <td className="td">{diepte}</td>
                <td className="td">{temperatuur}</td>
                <td className="td">{buddy}</td>
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
    duiken: PropTypes.object.isRequired
}

export default EssentialItem;