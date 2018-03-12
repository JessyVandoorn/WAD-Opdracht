import React from "react";
import PropTypes from "prop-types";

const DiversTable = ({duiken}) => {
    const renderTable = (id, {Datum, Locatie,Diepte, Temperatuur, Buddy, luchtStart, luchtEind}) => {
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
        )
    }

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
                {Object.keys(duiken).map(id => renderTable(id, duiken[id]))}
                </tbody>
            </table>
    )
}

DiversTable.propTypes = {
    duiken: PropTypes.object.isRequired
}

export default DiversTable;