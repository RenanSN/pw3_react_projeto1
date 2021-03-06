import React from 'react'

import Androidstudio from '../img/img_androidstudio.png';
import Java from '../img/img_java.png';
import Kotlin from '../img/img_kotlin.png';

import Xcode from '../img/img_xcode.png';
import Swift from '../img/img_swift.png';
import Objectivec from '../img/img_objectivec.png';

import Reactnative from '../img/img_reactnative.png';
import Ionic from '../img/img_ionic.png';
import Flutter from '../img/img_flutter.png';

function Geralmobile(props){

    if(props.titulo === "Android"){
        var titulo1 = <h5 className="titulocomimagem"><img src={Androidstudio} className="imgmobile"/><br/>Android Studio</h5>
        var informacao1 = <p>Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Foi anunciado em 16 de Maio de 2013 na conferência Google I/O. Android Studio é disponibilizado gratuitamente sob a Licença Apache 2.0.</p>

        var titulo2 = <h5 className="titulocomimagem"><img src={Java} className="imgmobile"/><br/>Java</h5>
        var informacao2 = <p>Java é o ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos. A plataforma permite desenvolver programas utilizando a linguagem de programação Java.</p>

        var titulo3 = <h5 className="titulocomimagem"><img src={Kotlin} className="imgmobile"/><br/>Kotlin</h5>
        var informacao3 = <p>Kotlin é uma Linguagem de programação multiplataforma, orientada a objetos e funcional, concisa e estaticamente tipada, desenvolvida pela JetBrains em 2016, que compila para a Máquina virtual Java e que também pode ser traduzida para a linguagem JavaScript e compilada para código nativo.</p>

    }else if(props.titulo === "IOS"){
        var titulo1 = <h5 className="titulocomimagem"><img src={Xcode} className="imgmobile"/><br/>Xcode</h5>
        var informacao1 = <p>Xcode é um ambiente de desenvolvimento integrado e software livre da Apple Inc. para gerenciamento de projetos relacionados com o sistema operacional Mac OS X. Xcode possui ferramentas para o usuário criar e melhorar seus aplicativos. </p>

        var titulo2 = <h5 className="titulocomimagem"><img src={Swift} className="imgmobile"/><br/>Swift</h5>
        var informacao2 = <p>Swift é uma linguagem de programação desenvolvida pela Apple para desenvolvimento no iOS, macOS, watchOS, tvOS e Linux. Swift foi desenvolvida para manter compatibilidade com a API Cocoa e com código existente em Objective-C. O compilador usa a infraestrutura do LLVM e é distribuído junto do Xcode desde a versão 6.</p>

        var titulo3 = <h5 className="titulocomimagem"><img src={Objectivec} className="imgmobile"/><br/>Objective-C</h5>
        var informacao3 = <p>Objective-C, denominado frequentemente de ObjC ou mais raramente de Objective C ou Obj-C, é uma linguagem de programação reflexiva orientada a objecto que adiciona transmissão de mensagens no estilo Smalltalk para o C.</p>
    } else {
        var titulo1 = <h5 className="titulocomimagem"><img src={Reactnative} className="imgmobile"/><br/>React Native</h5>
        var informacao1 = <p>React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa. </p>

        var titulo2 = <h5 className="titulocomimagem"><img src={Ionic} className="imgmobile"/><br/>Ionic</h5>
        var informacao2 = <p>O Ionic é um SDK de código aberto completo para o desenvolvimento de aplicativos móveis híbridos criado por Max Lynch, Ben Sperry e Adam Bradley, da Drifty Co. em 2013. A versão original foi lançada em 2013 e construída sobre AngularJS e Apache Cordova.</p>

        var titulo3 = <h5 className="titulocomimagem"><img src={Flutter} className="imgmobile"/><br/>Flutter</h5>
        var informacao3 = <p>Flutter é um kit de desenvolvimento de interface de usuário, de código aberto, criado pelo Google. E que possibilita a criação de belos aplicativos compilados nativamente. Atualmente pode compilar para Android, iOS, Windows, Mac, Linux, Google Fuchsia e Web.</p>
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
            <hr/>
            <br/>
        </>
    );

}

export default Geralmobile;