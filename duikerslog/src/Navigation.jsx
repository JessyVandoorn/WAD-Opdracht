import React from 'react';
import NavigationItem from './NavigationItem';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <ul>
                <Link to='/DuikPlaatsen'> <NavigationItem itemName="Duikplaatsen"/> </Link>
                <Link to='/Duikerslog'> <NavigationItem itemName="Duikerslog"/> </Link>
                <Link to='/Materiaal'> <NavigationItem itemName="Materiaal"/> </Link>
            </ul>
        </nav>
    );
};


export default Navigation;