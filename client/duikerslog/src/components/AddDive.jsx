import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Mutation } from "react-apollo";
import ADD_DIVE from "../graphql/addDive";
import GET_DIVE from "../graphql/getDive";

const AddDive = ({ history }) => {

  let datum = null;
  let locatie = null;
  let diepte = null;
  let temperatuur = null;
  let buddy = null;
  let start = null;
  let eind = null;

  const redirect = () => {
    history.push(`/Duikerslog`);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    redirect();
  };

  return (
    <Mutation mutation={ADD_DIVE} update={(cache, {data:{addDive}}) => {
      const data = cache.readQuery({
        query: GET_DIVE
      });
      data.dives.push(addDive);
      cache.writeQuery({
        query: GET_DIVE,
        data
      })
      }}
    >
    {(addDive) => (
      <form onSubmit={
        (e) => {
          if(datum.value){
            addDive({variables: {datum: datum.input, locatie: locatie.input, diepte: diepte.input, temperatuur: temperatuur.input, buddy: buddy.input, luchtStart:start.input, luchtEind: eind.input}})
          }
        }
      }>
        <div>
          <label htmlFor="">Datum</label>
          <input className="input-content" autoFocus ref={field => datum = field} />
        </div>
        <div>
          <label htmlFor="">Locatie</label>
          <input className="input-content" autoFocus ref={field => locatie = field} />
        </div>
        <div>
          <label htmlFor="">Diepte</label>
          <input className="input-content" autoFocus ref={field => diepte = field} />
        </div>
        <div>
          <label htmlFor="">Temperatuur</label>
          <input className="input-content" autoFocus ref={field => temperatuur = field} />
        </div>
        <div>
          <label htmlFor="">Buddy</label>
          <input className="input-content" autoFocus ref={field => buddy = field} />
        </div>
        <div>
          <label htmlFor="">Lucht Start</label>
          <input className="input-content" autoFocus ref={field => start = field} />
        </div>
        <div>
          <label htmlFor="">Lucht Eind</label>
          <input className="input-content" autoFocus ref={field => eind = field} />
        </div>
          <input className="button" type="submit" value="Submit" />
        </form>
      )
    }
  </Mutation>
  )
}

AddDive.propTypes =  {
  history: PropTypes.object.isRequired
}

export default withRouter(AddDive);

