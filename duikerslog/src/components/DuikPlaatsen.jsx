import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DuikPlaatsen = ({ store }) => {

    return (
        <section>
            <article className="locationOverview">
                {store.places.map(item =>
                    <p className="plaatsen" key={item.id}>
                        <Link to={`DuikPlaatsen/${item.id}`}>
                            {item.name}
                        </Link>
                    </p>
                )}
            </article>
        </section>

    )



}

DuikPlaatsen.propTypes = {
    store: PropTypes.array.isRequired,
    store: PropTypes.object.isRequired
}

export default DuikPlaatsen;