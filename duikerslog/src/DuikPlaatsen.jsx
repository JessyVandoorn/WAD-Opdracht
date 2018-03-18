import React from 'react';
import Navigation from './Navigation';
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
            <nav>
            <Navigation/> 
        </nav>
  
             <article className="locationOverview">   {Object.keys(plaatsen).map(id => renderTable(id, plaatsen[id]))} </article>
        </section>
        
    )
    
    

}

export default DuikPlaatsen;