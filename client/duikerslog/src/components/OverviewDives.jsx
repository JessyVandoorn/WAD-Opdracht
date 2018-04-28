import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";

const OverviewDives = ({ store }) => {
    return (
        <div className="divesOverview">
            {
                store.duiken.map(item =>
                    <section key={item.id} className="paddingOverview">
                        <h3>{item.Locatie}</h3>
                        <div className="dateBuddy">
                            <p>{item.Datum}</p>
                            <p>{item.Buddy}</p>
                        </div>
                        <br />
                    </section>
                )
            }
        </div>
    )
}

OverviewDives.propTypes = {
    store: PropTypes.object.isRequired
}

export default observer(OverviewDives);