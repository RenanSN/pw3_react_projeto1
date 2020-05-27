import React from 'react';
import './Stylepages.css';

import Unity from '../img/img_unity.png';
import Construct from '../img/img_construct.png';
import Gamemaker from '../img/img_gamemaker.png';
import Godot from '../img/img_godot.png';

function Games(){

    return (
        <>
            <br/>
            <div className="titulogames">
                <h4>Games</h4>
                <h5>O desenvolvimento de jogos eletrônicos é o processo na qual um jogo eletrônico<br/> é produzido. A criação de jogos eletrônicos é de responsabilidade de uma<br/> desenvolvedora, a qual pode ser uma única pessoa ou uma grande empresa.</h5>
            </div>
            <br/>
            <div>
                <h5 className="titulocomimagem"><img src={Unity} className="tamanhoimg"/><br/>Unity</h5>
                <p>O que é Unity? Unity 3D ou simplesmente Unity é um motor de jogo 3D e uma IDE. Foi criado pela Unity Technologies e tem características parecidas com o Blender, Virtools e Torque Game Engine. O motor cresceu a partir de uma adição de um suporte para a plataforma Mac OS X e depois se tornou um motor multi-plataforma.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src="https://img.icons8.com/ios/150/000000/unreal-engine--v1.png" className="tamanhoimg"/><br/>Unreal Engine</h5>
                <p>Unreal Engine é um motor de jogo desenvolvido pela Epic Games, usado pela primeira vez em 1998 no jogo de tiro em primeira pessoa Unreal, ele tem sido a base de muitos jogos desde então.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Construct} className="tamanhoimg"/><br/>Construct 2</h5>
                <p>Construct é um editor de jogos 2D baseado em HTML5, desenvolvido pela Scirra Ltda. É destinado para não-programadores quanto para programadores experientes, permitindo a criação rápida de jogos, por meio do estilo Drag-and-Drop usando um editor visual e um sistema de lógica baseada em comportamento.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Gamemaker} className="tamanhoimg"/><br/>GameMaker Studio 2</h5>
                <p>GameMaker Studio(anteriormente conhecido como Animo até 1999, Game Maker até 2011, GameMaker até 2012, GameMaker: Studio até 2017) é um motor de jogo proprietário, desenvolvido pela YoYo Games. O motor tem suporte a uma linguagem de script, chamada GML.</p>
            </div>
            <hr/>
            <div>
                <h5 className="titulocomimagem"><img src={Godot} className="tamanhoimg"/><br/>Godot</h5>
                <p>Godot é um motor de jogo de código aberto publicado no âmbito da licença MIT desenvolvido pela comunidade do Godot Engine e usado internamente em várias empresas da América Latina antes de ter se tornado código aberto e lançado para o público.</p>
            </div>
            <hr/>
            <br/>
        </>
    ); 

}

export default Games;