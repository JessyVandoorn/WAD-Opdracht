import React from 'react';
import DiversTable from './DiversTable';
import PropTypes from 'prop-types';

const Duikerslog = ({duiken}) => {
  return (
    <section>
    <DiversTable duiken={duiken} onChangeDuik={this.handleChangeDuik} onClickDelete={this.handleDelete}/>
    </section>
    
)  
}

Duikerslog.propTypes = {
  duiken: PropTypes.object.isRequired
}


export default Duikerslog;