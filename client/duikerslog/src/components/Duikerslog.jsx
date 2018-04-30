import React from 'react';
import DiversTable from './DiversTable';
import PropTypes from 'prop-types';

const Duikerslog = ({store}) => {

  return (
    <section>
    <DiversTable store={store} />
    </section>
    
)  
}

Duikerslog.propTypes = {
  store: PropTypes.object.isRequired
}


export default Duikerslog;