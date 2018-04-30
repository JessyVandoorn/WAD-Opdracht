import React from "react";
import PropTypes from "prop-types";
import '../css/App.css';
import { Link } from "react-router-dom";

const DiversTable = ({store, onClickDelete}) => {
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
                        store.dives.map(item => (
                            <tr key={item.id}>
                                <td className="td">{item.datum}</td>
                                <td className="td">{item.locatie}</td>
                                <td className="td">{item.diepte}</td>
                                <td className="td">{item.temperatuur}</td>
                                <td className="td">{item.buddy}</td>
                                <td className="td">{item.luchtStart}</td>
                                <td className="td">{item.luchtEind}</td>
                                {/* <td className="td">
                                    <button onClick={e => onClickDelete(e,id)}>Verwijderen</button>
                                </td> */}
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
    store: PropTypes.object.isRequired
}

export default DiversTable;