import React, { Component } from 'react';
import EssentialItem from './EssentialItem';

class Essential extends Component {
    render() {
        return (
            <div>
                <ul>
                    <EssentialItem datum="15/10/2017" locatie="Todi" diepte="10m" temperatuur="24°" buddy="Jeroen, Nathalie" luchtStart="300 bar" luchtEind="100 bar"/>
                </ul>
            </div>
        );
    };
}

export default Essential;