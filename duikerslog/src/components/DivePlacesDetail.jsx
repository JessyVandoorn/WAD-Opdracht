import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
import { Link } from "react-router-dom";

const DivePlacesDetail = ({ store }) => {
  return <article className="topic-detail">
    <h2 className="topic-header">{store.name}</h2>
    <section className="posts">
      <div>
        <p>Omschrijving</p>
        <p>{store.description}</p>
      </div>

      <div className="plaatsen updatePlaats">

        <p>Afstand van Gent: {store.distance}km</p>
        <p>Onderwaterleven: {store.marinelife}</p>

        <p>Maximale diepte: {store.maxdepth}m</p>
        <p>Minimale diepte: {store.mindepth}m</p>
      </div>
    </section>
    <Link to="/DuikPlaatsen">Ga Terug</Link>
  </article>

}

DivePlacesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired
}

export default DivePlacesDetail;