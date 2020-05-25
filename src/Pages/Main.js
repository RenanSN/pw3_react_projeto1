/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Main.css';
import Footer from '../components/Footer';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Frontend from './Frontend';
import Backend from './Backend';
import Mobile from './Mobile';
import Bancodedados from './Bancodedados';
import Games from './Games';


function Main() {
    return (
        <>
            <BrowserRouter>
                <header>
                <a href="https://github.com/RenanSN/pw3_react_projeto1" target="_blank">
                    <img src="https://img.icons8.com/cotton/64/000000/web-design.png" className="logo"/>
                </a>
                    <nav>
                        <ul>
                            <li> <Link to="/"><img src="https://img.icons8.com/ios-filled/25/000000/dog-house.png"/> Home</Link> </li>
                            <li> <Link to="/Frontend"><img src="https://img.icons8.com/pastel-glyph/25/000000/monitor.png"/> Front-End</Link> </li>
                            <li> <Link to="/Backend"><img src="https://img.icons8.com/ios/25/000000/console.png"/> Back-End</Link> </li>
                            <li> <Link to="/Mobile"><img src="https://img.icons8.com/ios/25/000000/smartphone-tablet.png"/> Mobile</Link> </li>
                            <li> <Link to="/Bancodedados"><img src="https://img.icons8.com/ios/25/000000/database-restore.png"/> DBA</Link> </li>
                            <li> <Link to="/Games"><img src="https://img.icons8.com/ios/25/000000/controller.png"/> Games</Link> </li>
                        </ul>
                    </nav> 
                </header>
                <main>
                    <div className="content">
                        <Route path="/" exact component={Home} />
                        <Route path="/Frontend" component={Frontend} />
                        <Route path="/Backend" component={Backend} />
                        <Route path="/Mobile" component={Mobile} />
                        <Route path="/Bancodedados" component={Bancodedados} />
                        <Route path="/Games" component={Games} />
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export  default Main;