import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1>Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>
        </div>
        <div className="body-text-config">
            <div className="line-spacement" >
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            </div>
            <div className="line-spacement" >
                Favor observar as instruções passadas no capítulo sobre a<br /> elaboração deste projeto.
            </div>
            <div className="line-spacement" >
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />Mateusz Wierzbicki: antforfigma@gmail.com
            </div>
        </div>
        <div className="bottom-config">
            <Link to="/search">
                <Button text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;