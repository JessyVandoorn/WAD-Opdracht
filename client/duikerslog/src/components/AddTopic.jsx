import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Dive from "../models/Dive";

const AddTopic = ({ store, history }) => {


  const redirect = id => {
    history.push(`/Duikerslog`);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if(form.Datum.value){
      const dive = new Dive(form.Datum.value, form.Locatie.value, form.Buddy.value, form.Diepte.value, form.Temperatuur.value, form.luchtStart.value, form.luchtEind.value);
      store.addDive(new Dive(form.Datum.value, form.Locatie.value, form.Buddy.value, form.Diepte.value, form.Temperatuur.value, form.luchtStart.value, form.luchtEind.value));
      console.log(dive);
      form.reset();
      redirect(dive.id);
    }
  }

  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="">Datum</label>
    <input name="Datum" className="input-content" />
  </div>
  <div>
    <label htmlFor="">Locatie</label>
    <input name="Locatie" className="input-content"   />
  </div>
  <div>
    <label htmlFor="">Diepte</label>
    <input name="Diepte" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Temperatuur</label>
    <input name="Temperatuur" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Buddy</label>
    <input name="Buddy" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Lucht Start</label>
    <input name="luchtStart" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Lucht Eind</label>
    <input name="luchtEind" className="input-content"  />
  </div>
    <input className="button" type="submit" value="Toevoegen" />
  </form>
}

AddTopic.propTypes =  {
  history: PropTypes.object.isRequired
}

export default withRouter(AddTopic);

