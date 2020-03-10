import React, { Component } from 'react';

class ColorChanger extends Component{
    state = { className: false, };
    colorChange = () => this.setState({ className: !this.state.className });
    render(){        
        return(
        <div>
            <button className={this.state.className ? "green" : "blue"} onClick={this.colorChange}>Zmień kolor</button>                   
        </div>
        )
    }
}

export default ColorChanger;

