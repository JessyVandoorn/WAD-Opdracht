import React from 'react';
import DiversTable from './DiversTable';

const Duikerslog = ({duiken}) => {
  return (
    <section>
    <DiversTable duiken={duiken} onChangeDuik={this.handleChangeDuik} onClickDelete={this.handleDelete}/>
    </section>
    
)  
}

export default Duikerslog;