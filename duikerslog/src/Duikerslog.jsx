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
    <DiversTable duiken={duiken} onChangeDuik={this.handleChangeDuik} onClickDelete={this.handleDelete}/>
    </section>
    
)  
}

export default Duikerslog;