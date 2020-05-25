import React from 'react';
import './Home.css';

function Home(){

    return (
        <>
            <div>
                <h3 className="titulo">Tecnologias</h3>
                {/* <br/> */}
                <h2 className="subtitulo">Este site tem o intuito de apresentar algumas tecnologias<br/> relacionadas a programação dividas por algumas áreas</h2>
            </div>
            <body>

                <div className="cardfrontend">
                    <h4>Front - End</h4>
                    <h5>Desenvolvimento web front-end é a prática de converter dados em uma interface<br/> gráfica, através do uso de HTML, CSS e JavaScript, para que os usuários possam<br/> visualizar e interagir com esses dados. </h5>
                </div>

                <div className="cardbackend">
                    <h4>Back - End</h4>
                    <h5>Como o nome sugere, o desenvolvedor back-end trabalha na<br/> parte de “trás” da aplicação. Ele é o responsável, em termos<br/> gerais, pela implementação da regra de negócio.</h5>
                </div>

                <div className="cardmobile">
                    <h4>Mobile</h4>
                    <h5>O Desenvolvedor Mobile é responsável, resumidamente, pelo desenvolvimento de softwares e recursos para dispositivos móveis, que podem englobar desde sistemas extranet, intranet até aplicativos, de acordo com as necessidades da empresa ou cliente para quem ele trabalha.</h5>
                </div>
                <div className="carddba">
                    <h4>DBA</h4>
                    <h5>Administrador de banco de dados, comumente chamado de DBA, é o profissional responsável por gerenciar, instalar, configurar, atualizar e monitorar um banco de dados ou sistemas de bancos de dados.</h5>
                </div>
                <div className="cardgames">
                    <h4>Games</h4>
                    <h5>O desenvolvimento de jogos eletrônicos é o processo na qual um jogo eletrônico<br/> é produzido. A criação de jogos eletrônicos é de responsabilidade de uma<br/> desenvolvedora, a qual pode ser uma única pessoa ou uma grande empresa.</h5>
                </div>
                <br/>
            </body>
        </>
    ); 

}

export default Home;