import React from 'react';
import PropTypes from 'prop-types';

const DivePlacesDetail = ({place, id}) => {
    return <section className="topic-detail">
    <h2 className="topic-header">{place.name}</h2>
    <div className="posts">
      <p>{place.distance}</p>
    </div>
  </section>

}

DivePlacesDetail.propTypes = {
    id: PropTypes.string.isRequired
  }

export default DivePlacesDetail;