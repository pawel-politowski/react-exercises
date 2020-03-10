import React, { Component } from 'react';

class LicznikPlus extends Component {
    state = { count: 0, };
    incrementCounter = () => this.setState({count: this.state.count + 1});
    decrementerCounter = () => this.setState({count: this.state.count - 1});
    reset = () => this.setState({count: 0});
    losuj = () => this.setState({count: Math.floor((Math.random()*100))});
    
    render() {
    const { count} = this.state;
    return (
    <div className="btncontainer">
        <div className="divBtn">Stan: {count}</div>
        <button className="button" onClick={this.incrementCounter}>+</button>
        <button className="button" onClick={this.decrementerCounter}>-</button>
        <button className="button" onClick={this.reset}>Reset</button>
        <button className="button" onClick={this.losuj}>Losuj</button>
    </div>
)}}

export default LicznikPlus;