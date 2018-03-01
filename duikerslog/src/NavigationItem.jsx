import React, { Component } from 'react'

class NavigationItem extends Component {

    constructor(props){
        super(props);
        this.state = {currentItem: false}
    }

    handleClickItem = (e) => {
        e.preventDefault();
        this.setState((prevState, props)=> ({ currentItem: !prevState.currentItem }));
    }

    render() {
        const {itemName} = this.props;
        const {currentItem} = this.state;
        return <li onClick={this.handleClickItem} className={currentItem?`currentItem`:``}> {itemName} </li>;
    }
}

export default NavigationItem;