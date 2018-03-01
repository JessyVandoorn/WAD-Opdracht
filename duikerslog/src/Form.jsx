import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Essential from './Essential';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = { name: "kaas" };
    }

    handleChangeName = e => {
        this.setState({name: e.target.value});
        console.log(e.target.value);
    }

    render = () => {
        const {name} = this.state;
        return(
            <div>
            <form>
                <label>Locatie
                    <input type="text" name="name" onChange={this.handleChangeName} value={name}/>
                </label>
            </form>
            <div>
                <Essential locatie={name}/>
            </div>
            </div>
        )
    }
    
}

Form.propTypes = {
    name: PropTypes.string.isRequired
}

export default Form;