import React from 'react';
import './Stylepages.css';

function Frontend(){

    return (
        <>
            <br/>
            <div className="titulofrontend">
                <h4>Front - End</h4>
                <h5>Desenvolvimento web front-end é a prática de converter dados em uma interface<br/> gráfica, através do uso de HTML, CSS e JavaScript, para que os usuários possam<br/> visualizar e interagir com esses dados. </h5>
            </div>
            <br/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/html-5.png" className="tamanhoimg"/><br/>HTML 5 (HyperText Markup Language)</h5>
                <p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/css3.png" className="tamanhoimg"/><br/>CSS 3 (Cascading Style Sheets)</h5>
                <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style . Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/javascript.png" className="tamanhoimg"/><br/>JavaScript</h5>
                <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/bootstrap.png" className="tamanhoimg"/><br/>Bootstrap</h5>
                <p>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/officel/150/000000/react.png" className="tamanhoimg"/><br/>React.js</h5>
                <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/vue-js.png" className="tamanhoimg"/><br/>Vue.js</h5>
                <p>Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/color/150/000000/angularjs.png"  className="tamanhoimg"/><br/>AngularJS</h5>
                <p>AngularJS é um framework JavaScript código aberto, mantido pelo Google, que auxilia na execução de single-page applications.</p>
            </div>
            <hr/>
            <br/>
        </>
    ); 

}

export default Frontend;