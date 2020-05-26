import React from 'react';
import './Stylepages.css';

import Go from '../img/img_go.png';
import Scala from '../img/img_scala.png';
import Dotnet from '../img/img_dotnet.png';
import Node from '../img/img_node.png';

function Backend(){

    return (
        <>
            <br/>
            <div className="titulobackend">
                <h4>Back - End</h4>
                <h5>Como o nome sugere, o desenvolvedor back-end trabalha na<br/> parte de “trás” da aplicação. Ele é o responsável, em termos<br/> gerais, pela implementação da regra de negócio.</h5>
            </div>
            <br/>
            <div>
                <h5 className="titulocomimagem"> <img src="https://img.icons8.com/ios-filled/150/8E44AD/c-sharp-logo.png"></img> <br/> C# (C Sharp)</h5>
                <p>C# é uma linguagem de programação, multiparadigmas, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos e eventos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/officel/150/000000/php-logo.png"/><br/>PHP</h5>
                <p>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/python.png"/><br/>Python</h5>
                <p>Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/ruby-programming-language.png"/><br/>Ruby</h5>
                <p>Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Go} className="tamanhoimg"/><br/>Go</h5>
                <p>Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Scala} className="tamanhoimg"/><br/>Scala</h5>
                <p>Scala é uma linguagem de programação de propósito geral, diga-se multiparadigma, projetada para expressar padrões de programação comuns de uma forma concisa, elegante e type-safe. Ela incorpora recursos de linguagens orientadas a objetos e funcionais. Também é plenamente interoperável com Java.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Node} className="tamanhoimg"/><br/>Node.js</h5>
                <p>Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Dotnet} className="tamanhoimg"/><br/>.NET Framework</h5>
                <p>O .NET Framework é uma iniciativa da empresa Microsoft, que visa uma plataforma única para desenvolvimento e execução de sistemas e aplicações. Todo e qualquer código gerado para .NET pode ser executado em qualquer dispositivo que possua um framework de tal plataforma.</p>
            </div>
            <hr/>
            <br/>
        </>
    ); 

}

export default Backend;