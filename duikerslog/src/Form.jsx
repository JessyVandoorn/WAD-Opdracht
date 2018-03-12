import React from 'react';
import PropTypes from 'prop-types';

const Form = ({onChange, name}) => {

    // const handleChangeInput = e => {
    //     const {value} = e.currentTarget
    //     onChange(value);
    // }

    return(
                <label className="label" htmlFor="text">{name}
                    <input id="text" type="text" name="locatie" onChange={onChange}/>
                </label>
    );
};


Form.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Form;