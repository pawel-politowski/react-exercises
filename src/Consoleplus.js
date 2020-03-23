import React from 'react';

function Consoleplus() {
    const klik = () => {console.log('klik')};
    return <button onClick={klik}>Klik</button>
}

export default Consoleplus;