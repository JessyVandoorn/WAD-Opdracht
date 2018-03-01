import React from 'react';
import NavigationItem from './NavigationItem';
import PropTypes from 'prop-types';

// class Navigation extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <NavigationItem itemName="Materiaal" testZin="dit is het materiaal gedeelte"/>
//                     <NavigationItem itemName="Logboek" testZin="dit is het logboek gedeelte"/>
//                     <NavigationItem itemName="Duikplaatsen" testZin="dit is het overzicht van de duikplaatsen"/>
//                 </ul>
//             </div>
//         );
//     };
// }


const Navigation = ({itemName, onClick}) => {
    const handleChangeMenu = e => {
        console.log(e);
    }

    return(
        <li>
            <NavigationItem  itemName={itemName} onClick={handleChangeMenu} />
        </li>
    );
};

Navigation.propTypes = {
    onChange: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired
}

export default Navigation;