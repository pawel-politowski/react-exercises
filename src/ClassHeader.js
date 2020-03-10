import React, { Component } from 'react';

const headerClass = "Header Classowy - stała wyniesiona poza klasę";

class Header1 extends Component{
    render(){
        return (
            <div class="tło">
                {headerClass}
            </div>
        )
    }
}

export default Header1; 