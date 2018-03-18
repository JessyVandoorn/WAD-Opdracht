import React from 'react';
import Navigation from './Navigation';

const DuikPlaatsen = ({plaatsen}) => {
    const renderTable = (id, plaats) => {
        return(
            <p className="plaatsen" key={id}>{plaats.name}
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