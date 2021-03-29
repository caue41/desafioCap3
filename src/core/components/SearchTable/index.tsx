import React from 'react';
import './styles.scss';
import { ReactComponent as UserImage } from '../../assets/images/profile_image.svg';
import Button from '../Button';
import OutputCard from '../OutputCard';
import OutputCardHeader from '../OutputCardHeader';

const SearchTable = () => (
    <div className="page search-board">
        <div className="item1 header row align-text">
            <OutputCardHeader 
                text1="Repositórios públicos: 62"
                text2="Seguidores: 127"
                text3="Seguindo: 416"
            />
        </div>
        <div className="item3 menu">
            <div className="padding_config2">
                <UserImage />
            </div>
            <div className="Buttom-text-config">
                <Button text="Ver perfil" />
            </div>
        </div>
        <div className="item2 main information-table">
            <div className="text-title">
                <h2>Informações</h2>
            </div>
            <div>
                <OutputCard text="Empresa: " />
                <OutputCard text="Website/Blog: " />
                <OutputCard text="Localidade: " />
                <OutputCard text="Membro desde: " />
            </div>
        </div>
    </div>
);

export default SearchTable;