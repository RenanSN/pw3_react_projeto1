import React from 'react'

import Mysql from '../img/img_mysql.png';
import Sqlserve from '../img/img_sqlserve.png';
import Postgresql from '../img/img_postgresql.png';
import Sqlite from '../img/img_sqlite.png';

import Mongodb from '../img/img_mongodb.png';
import Firebase from '../img/img_firebase.png';
import Dynamobd from '../img/img_dynamodb.png';
import Cassandra from '../img/img_cassandra.png';

function Geraldba(props){
    if(props.titulo === "Relacional"){
        var titulo1 = <h5 className="titulocomimagem"><img src={Mysql} className="imgdba"/><br/>MySQL</h5>
        var informacao1 = <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p>

        var titulo2 = <h5 className="titulocomimagem"><img src={Sqlserve} className="imgdba"/><br/>SQL Server</h5>
        var informacao2 = <p>O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional desenvolvido pela Sybase em parceria com a Microsoft. Esta parceria durou até 1994, com o lançamento da versão para Windows NT e desde então a Microsoft mantém a manutenção do produto.</p>

        var titulo3 = <h5 className="titulocomimagem"><img src={Postgresql} className="imgdba"/><br/>PostgreSQL</h5>
        var informacao3 = <p>PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto.</p>

        var titulo4 = <h5 className="titulocomimagem"><img src={Sqlite} className="imgdba"/><br/>SQLite</h5>
        var informacao4 = <p>SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido. Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado.</p>
    } else {
        var titulo1 = <h5 className="titulocomimagem"><img src={Mongodb} className="imgdba"/>MongoDB</h5>
        var informacao1 = <p>MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.</p>

        var titulo2 = <h5 className="titulocomimagem"><img src={Firebase} className="imgdba"/>Firebase</h5>
        var informacao2 = <p>O Firebase é uma plataforma de desenvolvimento de aplicativos para dispositivos móveis e web desenvolvida pela Firebase, Inc. em 2011 e adquirida pelo Google em 2014. Em março de 2020, a plataforma Firebase possui 19 produtos, usados ​​por mais de 1,5 milhão de aplicativos.</p>

        var titulo3 = <h5 className="titulocomimagem"><img src={Dynamobd} className="imgdba"/>Amazon DynamoDB</h5>
        var informacao3 = <p>O Amazon DynamoDB é um serviço de banco de dados NoSQL proprietário totalmente gerenciado que suporta estruturas de dados de valor-chave e documentos e é oferecido pela Amazon.com como parte do portfólio da Amazon Web Services.</p>

        var titulo4 = <h5 className="titulocomimagem"><img src={Cassandra} className="imgdba"/>Apache Cassandra</h5>
        var informacao4 = <p>Apache Cassandra é um projeto de sistema de banco de dados distribuído altamente escalável de segunda geração, que reúne a arquitetura do DynamoDB, da Amazon Web Services e modelo de dados baseado no BigTable, do Google.</p>
    }

    return(
        <>
            <h1>{props.titulo}</h1>
            <br/>
            {titulo1}
            {informacao1}
            <br/>
            {titulo2}
            {informacao2}
            <br/>
            {titulo3}
            {informacao3}
            <br/>
            {titulo4}
            {informacao4}
            <br/>
            <hr/>
            <br/>
        </>
    );
}

export default Geraldba;