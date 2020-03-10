import React, { Component } from 'react';

class AlertInfo extends Component {    
    handleClick = () => {alert('Brawo!')};    
    render() {
            return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>  
    )}}

export default AlertInfo;