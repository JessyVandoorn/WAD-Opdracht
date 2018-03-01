import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            <form>
                <label>{name}
                    <input type="text" name="name" onChange={this.handleChangeName} value={name}/>
                </label>
            </form>
        )
    }
    
}

Form.propTypes = {
    name: PropTypes.string.isRequired
}

export default Form;