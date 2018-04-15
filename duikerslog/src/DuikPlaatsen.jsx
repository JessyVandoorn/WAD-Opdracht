import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DuikPlaatsen = ({plaatsen}) => {
    const renderTable = (id, plaats) => {
        return(
            <p className="plaatsen" key={id}>
            <Link to={`DuikPlaatsen/${id}`}>
            {plaats.name}
            </Link>
            </p>
        )
    }

    return (
        <section>
             <article className="locationOverview">   {Object.keys(plaatsen).map(id => renderTable(id, plaatsen[id]))} </article>
        </section>
        
    )
    
    

}

DuikPlaatsen.propTypes = {
    plaatsen: PropTypes.object.isRequired,
    plaatsen: PropTypes.array.isRequired
}

export default DuikPlaatsen;