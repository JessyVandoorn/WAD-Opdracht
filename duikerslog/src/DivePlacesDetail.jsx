import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Link } from "react-router-dom";

const DivePlacesDetail = ({ place, id }) => {
  return <article className="topic-detail">
    <h2 className="topic-header">{place.name}</h2>
    <section className="posts">
      <div>
        <p>Omschrijving</p>
        <p>{place.description}</p>
      </div>

      <div className="plaatsen updatePlaats">

        <p>Afstand van Gent: {place.distance}km</p>
        <p>Onderwaterleven: {place.marinelife}</p>

        <p>Maximale diepte: {place.maxdepth}m</p>
        <p>Minimale diepte: {place.mindepth}m</p>
      </div>
    </section>
    <Link to="/DuikPlaatsen">Ga Terug</Link>
  </article>

}

DivePlacesDetail.propTypes = {
  id: PropTypes.string.isRequired
}

export default DivePlacesDetail;