import React, { Component } from 'react';

class Menu extends Component{
    state = { isVisible: false, };
    visibleChange = () => this.setState({ isVisible: !this.state.isVisible });
    render(){
        //const { isVisible} = this.state;
        return(
        <div>
            <button onClick={this.visibleChange}>Menu Rozwijane</button>
            <div>   
                {this.state.isVisible ? <MenuRozwijane /> : null}                
            </div>               
                        
        </div>

        )
    }
}

class MenuRozwijane extends Component{
    render(){
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}}

export default Menu;