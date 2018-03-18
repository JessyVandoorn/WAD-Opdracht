import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const AddTopic = ({ onAddTopic, history }) => {

  let input = null;

  const redirect = id => {
    history.push(`/DiversTable`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value) {
      onAddTopic(input.value, redirect);
    }
  }

  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="">Locatie</label>
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

