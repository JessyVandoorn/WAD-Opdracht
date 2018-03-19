import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const AddTopic = ({ onAddTopic, history }) => {

  let input = null;

  const redirect = id => {
    history.push(`/Duikerslog`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value) {
      onAddTopic(input.value, redirect);
    }
  }

  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="">Datum</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Locatie</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Diepte</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Temperatuur</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Buddy</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Lucht Start</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
  <div>
    <label htmlFor="">Lucht Eind</label>
    <input className="input-content" autoFocus ref={field => input = field} />
  </div>
    <input className="button" type="submit" value="Submit" />
  </form>
}

AddTopic.propTypes =  {
  onAddTopic: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(AddTopic);

