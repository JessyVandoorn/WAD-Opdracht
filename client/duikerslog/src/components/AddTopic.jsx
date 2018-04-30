import React from 'react';
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const AddTopic = ({ store, history }) => {
  const {add, dives} = store;


  const redirect = id => {
    history.push(`/Duikerslog`);
  }

  const handleSubmit = e => {
    e.preventDefault();
    //   redirect(dive.id);
    add(dives);
    console.log(dives);
  };

  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="">Datum</label>
    <input name="datum" className="input-content" />
  </div>
  <div>
    <label htmlFor="">Locatie</label>
    <input name="locatie" className="input-content"   />
  </div>
  <div>
    <label htmlFor="">Diepte</label>
    <input name="diepte" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Temperatuur</label>
    <input name="temperatuur" className="input-content"  />
  </div>
  <div>
    <label htmlFor="">Buddy</label>
    <input name="buddy" className="input-content"  />
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

export default observer(withRouter(AddTopic));

