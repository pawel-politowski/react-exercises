import React, { useState } from 'react';

const MenuFunkcje = () => {
    const [isVisible, setisVisible] = useState(false)  
           
        return (
            <div>
                <button onClick={() => setisVisible(!isVisible)}>Menu Rozwijane Funkcjenuno</button>
                <div>
                    {isVisible ? <MenuRozwijane /> : null}
                </div>

            </div>

        )
    }


function MenuRozwijane() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}

export default MenuFunkcje;