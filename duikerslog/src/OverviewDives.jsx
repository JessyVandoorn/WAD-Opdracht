import React from 'react';
import PropTypes from 'prop-types';

const OverviewDives = ({duiken}) => {
    const renderOverview = (id, {Datum, Locatie, Buddy}) => {
        return(
                <section>
                    <h3>{id} {Locatie}</h3>
                    <div className="dateBuddy">
                        <p>{Datum}</p>
                        <p>{Buddy}</p>
                    </div>
                    <br/>
                </section>
        )
    }

    return(
        <div>
            {
               Object.keys(duiken).map(id => renderOverview(id, duiken[id])) 
            }
        </div>
    )
}

OverviewDives.propTypes = {
    duiken: PropTypes.object.isRequired
}

export default OverviewDives;