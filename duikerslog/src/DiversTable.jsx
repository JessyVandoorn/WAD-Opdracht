import React from "react";
import PropTypes from "prop-types";

const DiversTable = ({duiken, onChangeDuik, onClickDelete}) => {
    const handleChange = (e, id) => {
        const {value, Locatie} = e.currentTarget;
        const duik = {...duiken[id]};
        duik[Locatie] = value;
        onChangeDuik(id, duik);
    }

    const renderTable = (id, duik) => {
        return(
            <tr key={id}>
                <td className="td">{duik.Datum}</td>
                <td className="td">
                <input type="text" name="locatie" defaultValue={duik.Locatie} onChange={e => handleChange(e, id)}/>
                </td>
                <td className="td">{duik.Diepte}</td>
                <td className="td">{duik.Temperatuur}</td>
                <td className="td">{duik.Buddy}</td>
                <td className="td">{duik.luchtStart}</td>
                <td className="td">{duik.luchtEind}</td>
                <td className="td">
                    <button onClick={e => onClickDelete(e,id)}>Verwijderen</button>
                </td>
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