import React, { useState } from 'react';
import Geraldba from '../components/Geraldba';
import './Stylepages.css';

function Bancodedados(){

    const[relacional, setRelacional] = useState(false);
    const[nosql, setNosql] = useState(false);

    return (
        <>
            <br/>
            <div className="titulodba">
                <h4>DBA</h4>
                <h5>Administrador de banco de dados, comumente chamado de DBA, é o profissional<br/>responsável por gerenciar, instalar, configurar, atualizar e monitorar um banco<br/> de dados ou sistemas de bancos de dados.</h5>
            </div>
            <br/>
            <h1>Banco de Dados:</h1>
            <div>
                <h5 onClick={ ()=> { setRelacional(!relacional) }}>Relacional</h5>
                <h5 onClick={ ()=> { setNosql(!nosql) }}>NoSQL</h5>
            </div>
            <br/>
            <hr/>
            {relacional && <Geraldba titulo="Relacional"/>}
            {nosql && <Geraldba titulo="Nosql"/>}
        </>
    ); 

}

export default Bancodedados;