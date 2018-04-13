import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({itemName}) => {

    return(
        <li>
            {itemName}
        </li>
    )
}

NavigationItem.propTypes = {
    itemName: PropTypes.string.isRequired
}

export default NavigationItem;