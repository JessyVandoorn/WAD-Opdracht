import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <ul>
                <Link to='/DuikPlaatsen'> <li>Duikplaatsen </li></Link>
                <Link to='/Duikerslog'> <li>Logboek</li> </Link>
                <Link to='/DiveMaterial'><li> Materiaal </li> </Link>
                {/* <Link to='/Account'><li> Account </li> </Link> */}
            </ul>
        </nav>
    );
};


export default Navigation;