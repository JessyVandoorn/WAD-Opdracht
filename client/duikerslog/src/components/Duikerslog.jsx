import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Duikerslog = ({dives}) => {

  const handleClickRemove = (dive) => {
    dives.remove(dive);
}
    return(
        <div className="tableButton">
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
                    {
                        dives.map((dive, index) => (
                            <tr key={index}>
                                <td className="td">{dive.datum}</td>
                                <td className="td">{dive.locatie}</td>
                                <td className="td">{dive.diepte}</td>
                                <td className="td">{dive.temperatuur}</td>
                                <td className="td">{dive.buddy}</td>
                                <td className="td">{dive.luchtStart}</td>
                                <td className="td">{dive.luchtEind}</td>
                                <td className="td"> 
                                    <button onClick={() => handleClickRemove(dive)}>Verwijderen</button>
                                </td> 
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <Link to="/DiversTable/add" className="button">Duik Toevoegen</Link>
        </div>
    ) 
}

Duikerslog.propTypes = {
  dives: PropTypes.array.isRequired
}


export default Duikerslog;