import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DiversTable = ({duiken, onClickDelete}) => {
    const handleChange = (e, id) => {
        const {value, name} = e.currentTarget;
        const duik = {...duiken[id]};
        duik[name] = value;
    }

    return(
        <div>
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
                        duiken && Object.keys(duiken).map(id => (
                            <tr key={id}>
                                <td className="td">{duiken[id].Datum}</td>
                                <td className="td">{duiken[id].Locatie}</td>
                                <td className="td">{duiken[id].Diepte}</td>
                                <td className="td">{duiken[id].Temperatuur}</td>
                                <td className="td">{duiken[id].Buddy}</td>
                                <td className="td">{duiken[id].luchtStart}</td>
                                <td className="td">{duiken[id].luchtEind}</td>
                                <td className="td">
                                    <button onClick={e => onClickDelete(e,id)}>Verwijderen</button>
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

DiversTable.propTypes = {
    duiken: PropTypes.object.isRequired
}

export default DiversTable;