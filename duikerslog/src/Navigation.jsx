import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <NavigationItem itemName="Materiaal" />
                    <NavigationItem itemName="Logboek" />
                    <NavigationItem itemName="Duikplaatsen" />
                </ul>
            </div>
        );
    };
}

export default Navigation;