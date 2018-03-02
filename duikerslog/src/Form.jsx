import React from 'react';
import PropTypes from 'prop-types';

// class Form extends Component {
//     constructor(props){
//         super(props);
//         this.state = { name: "Todi" };
//     }

//     handleChangeName = e => {
//         this.setState({name: e.target.value});
//         console.log(e.target.value);
//     }

//     render = () => {
//         const name = this.state.name;
//         return(
//             <form>
//                 <label>Locatie
//                     <input type="text" name="name" onChange={this.handleChangeName} value={name}/>
//                 </label>
//             </form>
//         )
//     }
    
// }

const Form = ({value, onChange}) => {

    const handleChangeInput = e => {
        const {value} = e.currentTarget
        onChange(value);
    }

    return(
        <form className="form">
            <fieldset>
                <legend>Algemene informatie</legend>
                <label className="label">Locatie
                    <input type="text" name="name" onChange={handleChangeInput} value={value}/>
                </label>
            </fieldset>
        </form>
    );
};


Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Form;