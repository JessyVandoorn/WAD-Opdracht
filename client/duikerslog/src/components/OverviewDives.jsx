import React from 'react';
import PropTypes from 'prop-types';

const OverviewDives = ({ dives }) => {
    return (
        <div className="divesOverview">
            {
                dives.map((item, index) =>
                    <section key={index} className="paddingOverview">
                        <h3>{item.locatie}</h3>
                        <div className="dateBuddy">
                            <p>{item.datum}</p>
                            <p>{item.buddy}</p>
                        </div>
                        <br />
                    </section>
                )
            }
        </div>
    )
}

OverviewDives.propTypes = {
    dives: PropTypes.array.isRequired
}

export default OverviewDives;