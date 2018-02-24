import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <NavigationItem itemName="Materiaal" testZin="dit is het materiaal gedeelte"/>
                    <NavigationItem itemName="Logboek" testZin="dit is het logboek gedeelte"/>
                    <NavigationItem itemName="Duikplaatsen" testZin="dit is het overzicht van de duikplaatsen"/>
                </ul>
            </div>
        );
    };
}

export default Navigation;