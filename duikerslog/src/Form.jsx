import React from 'react';
import PropTypes from 'prop-types';

const Form = ({value, name, onChange}) => {

    const handleChangeInput = e => {
        const {value} = e.currentTarget
        onChange(value);
    }

    return(
                <label className="label" htmlFor="text">{name}
                    <input id="text" type="text" name="locatie" onChange={handleChangeInput} value={value}/>
                </label>
    );
};


Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Form;