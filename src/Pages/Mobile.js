import React, { useState } from 'react';
import Geralmobile from '../components/Geralmobile';
import './Stylepages.css';

function Mobile(){

    const[android, setAndroid] = useState(false);
    const[ios, setIos] = useState(false);
    const[hibrido, setHibrido] = useState(false);

    return (
        <>
            <br/>
            <div className="titulomobile">
                <h4>Mobile</h4>
                <br/>
                <h5>O Desenvolvedor Mobile é responsável, resumidamente, pelo desenvolvimento de softwares e recursos para dispositivos móveis, que podem englobar desde sistemas extranet, intranet até aplicativos, de acordo com as necessidades da empresa ou cliente para quem ele trabalha.</h5>
            </div>
            <br/>
            <h1>Plataformas:</h1>
            <div>
                <h5 onClick={ ()=> { setAndroid(!android) }}>Android</h5>
                <h5 onClick={ ()=> { setIos(!ios) }}>IOS</h5>
                <h5 onClick={ ()=> { setHibrido(!hibrido) }}>Hibrido</h5>
            </div>
            <br/>
            <hr/>
            {android && <Geralmobile titulo="Android"/>}
            {ios && <Geralmobile titulo="IOS"/>}
            {hibrido && <Geralmobile titulo="Hibrido"/>}
        </>
    ); 

}

export default Mobile;