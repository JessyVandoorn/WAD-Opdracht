import React from 'react';
import PropTypes from 'prop-types';

const EssentialItem = ({datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind}) => {
    return(
                    <table>
                        <thead>
                            <tr>
                                <th className="tdHead">Datum</th>
                                <th className="thHead">Locatie</th>
                                <th className="tdHead">Diepte (m)</th>
                                <th className="tdHead">temperatuur (°C)</th>
                                <th className="tdHead">Buddy</th>
                                <th className="tdHead">Lucht Start (bar)</th>
                                <th className="tdHead">Lucht Eind (bar)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td">{datum}</td>
                                <td className="td">{locatie}</td>
                                <td className="td">{diepte}</td>
                                <td className="td">{temperatuur}</td>
                                <td className="td">{buddy}</td>
                                <td className="td">{luchtStart}</td>
                                <td className="td">{luchtEind}</td>
                            </tr>
                        </tbody>
                    </table>
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