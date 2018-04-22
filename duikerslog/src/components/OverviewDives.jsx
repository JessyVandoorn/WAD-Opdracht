import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";

const OverviewDives = ({ store }) => {
    return (
        // <div className="divesOverview">
            // {
                store.dives.map(item =>
                    <section key={item.id} className="paddingOverview">
                        <h3>{item.id} {item.Locatie}</h3>
                        <div className="dateBuddy">
                            <p>{item.Datum}</p>
                            <p>{item.Buddy}</p>
                        </div>
                        <br />
                    </section>
                )
            // }
        // </div>
    )
}

OverviewDives.propTypes = {
    duiken: PropTypes.object.isRequired
}

export default observer(OverviewDives);