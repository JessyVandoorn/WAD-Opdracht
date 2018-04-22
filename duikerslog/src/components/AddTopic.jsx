import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Dive from "../models/Dive";

const AddTopic = ({ store, history }) => {

  // let input = [];
  // let datum = null;
  // let locatie = null;
  // let diepte = null;
  // let temperatuur = null;
  // let buddy = null;
  // let start = null;
  // let eind = null;


  const redirect = id => {
    history.push(`/Duikerslog`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // input.push(datum.value, locatie.value, diepte.value, temperatuur.value, buddy.value, start.value, eind.value);
    // if (datum.value && locatie.value && diepte.value && temperatuur.value && buddy.value && start.value && eind.value) {
      // onAddTopic(input, redirect);
    // }
    if(form.Datum.value){
      const dive = new Dive(form.Datum.value, form.Locatie.value, form.Buddy.value, form.Diepte.value, form.Temperatuur.value, form.luchtStart.value, form.luchtEind.value);
      store.addDive(dive);
    }
  }

  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="">Datum</label>
    <input name="Datum" className="input-content" autoFocus/>
  </div>
  <div>
    <label htmlFor="">Locatie</label>
    <input name="Locatie" className="input-content" autoFocus  />
  </div>
  <div>
    <label htmlFor="">Diepte</label>
    <input name="Diepte" className="input-content" autoFocus />
  </div>
  <div>
    <label htmlFor="">Temperatuur</label>
    <input name="Temperatuur" className="input-content" autoFocus />
  </div>
  <div>
    <label htmlFor="">Buddy</label>
    <input name="Buddy" className="input-content" autoFocus />
  </div>
  <div>
    <label htmlFor="">Lucht Start</label>
    <input name="luchtStart" className="input-content" autoFocus />
  </div>
  <div>
    <label htmlFor="">Lucht Eind</label>
    <input name="luchtEind" className="input-content" autoFocus />
  </div>
    <input className="button" type="submit" value="Submit" />
  </form>
}

AddTopic.propTypes =  {
  onAddTopic: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(AddTopic);

