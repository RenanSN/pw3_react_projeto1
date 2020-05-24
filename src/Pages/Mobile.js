import React, { useState } from 'react';
import Geralmobile from '../components/Geralmobile';

function Mobile(){

    const[android, setAndroid] = useState(false);
    const[ios, setIos] = useState(false);
    const[hibrido, setHibrido] = useState(false);

    return (
        <>
            <h1>Plataformas:</h1>
            <div>
                <h5 onClick={ ()=> { setAndroid(!android) }}>Android</h5>
                <h5 onClick={ ()=> { setIos(!ios) }}>IOS</h5>
                <h5 onClick={ ()=> { setHibrido(!hibrido) }}>Hibrido</h5>
            </div>
            <br/>
            <hr/>
            <br/>
            {android && <Geralmobile titulo="Android"/>}
            {ios && <Geralmobile titulo="IOS"/>}
            {hibrido && <Geralmobile titulo="Hibrido"/>}
        </>
    ); 

}

export default Mobile;