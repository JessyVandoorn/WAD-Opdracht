import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import DELETE_DIVE from "../graphql/addDive";
import GET_ALLDIVES from "../graphql/getAllDives";
import { Mutation } from "react-apollo";

import ProtectedComponent from "./ProtectedComponent";

const Duikerslog = ({dives}) => {

    return(
        <div className="tableButton">
        <Mutation
      mutation={DELETE_DIVE}
      update={(cache, {data: {deleteDive}}) => {
        const data = cache.readQuery({
          query: GET_ALLDIVES
        });
        data.allDives = data.allDives.filter(
            dive => dive._id !== deleteDive._id
          );
        cache.writeQuery({
          query: GET_ALLDIVES,
          data
        });
      }}
    >
    {(deleteDive) => (
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
                                    <button onClick={e => {
                                        console.log("verwijderen")
                                        console.log(dive._id)
                                        deleteDive({variables: {id: dive._id}})
                                    }}>Verwijderen</button>
                                </td> 
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            )
    }
  </Mutation>
  <ProtectedComponent protect={
                <Link to="/DiversTable/add" className="button">Duik Toevoegen</Link>
  } alternative={<p>Please sign in to create a new dive</p>}/>
        </div>
    ) 
}

Duikerslog.propTypes = {
  dives: PropTypes.array.isRequired
}


export default Duikerslog;