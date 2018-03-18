import React from 'react';
// import Form from './Form';
import DiversTable from './DiversTable';
import Navigation from './Navigation';

const Duikerslog = ({duiken}) => {
  return (
    <section>
        <nav>
        <Navigation/> 
    </nav>
    <div className="overviewSection">
    <DiversTable duiken={duiken} onChangeDuik={this.handleChangeDuik} onClickDelete={this.handleDelete}/>
    {/* <Form onChange={this.handleInput} name="Locatie"/> */}
  </div>
    </section>
    
)  
}

export default Duikerslog;