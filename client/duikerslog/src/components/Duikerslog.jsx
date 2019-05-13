import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import DELETE_DIVE from "../graphql/deleteDive";
import GET_ALLDIVES from "../graphql/getAllDives";
import { Mutation } from "react-apollo";

class Duikerslog extends Component {

  constructor(props) {
    super(props);
    const { dives } = props;
    this.state = { duiken: dives }
  }

  redirect = () => {
    this.props.history.push(`/Projecten`);
}

  componentDidMount() {
    console.log('1', this.props.dives);
    this.setState({ duiken: this.props.dives }, console.log('2', this.state.duiken));
  }



  componentDidUpdate(props) {
    console.log('update');
    if (this.props.dives !== props.dives) {
      this.setState({ duiken: props.dives }, console.log(this.state.duiken));
    }
  }

  render = () => {
    const { duiken } = this.state;
    return (
      <div className="tableButton">
        <Mutation
          mutation={DELETE_DIVE}
          update={(cache, { data: { deleteDive } }) => {
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
                  duiken.map((dive, index) => (
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
                          deleteDive({ variables: { id: dive._id } })
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
        <Link to="/Duikerslog/add" className="button">Duik Toevoegen</Link>
      </div>
    )
  }

}

Duikerslog.propTypes = {
  dives: PropTypes.array.isRequired
}


export default withRouter(Duikerslog);