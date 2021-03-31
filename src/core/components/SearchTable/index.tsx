import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ReactComponent as UserImage } from '../../assets/images/profile_image.svg';
import Button from '../Button';
import OutputCard from '../OutputCard';
import OutputCardHeader from '../OutputCardHeader';
import { makeRequest } from 'core/utils/request';
import { SearchData } from 'core/types/SearchData';

const SearchTable = () => {

    const [searchResponse, setSearchResponse] = useState<SearchData>();

    console.log(searchResponse);

    useEffect(() => {
        makeRequest({ url: '/acenelio'})
        .then(response => setSearchResponse(response.data));
    }, []);

    return (
    <div className="page search-board">
        <div className="item1 header row align-text">
            <OutputCardHeader 
                text1="Repositórios públicos: "  
                text4={searchResponse?.public_repos}
                text2="Seguidores: "
                text5={searchResponse?.followers}
                text3="Seguindo: "
                text6={searchResponse?.following}
            />
        </div>
        <div className="item3 menu">
            <div className="padding_config2">
                <img src={searchResponse?.avatar_url} alt={searchResponse?.blog} className="user-image"/>
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
                <OutputCard 
                    text1="Empresa: " 
                    text2={searchResponse?.company}
                />
                <OutputCard 
                    text1="Website/Blog: " 
                    text2={searchResponse?.blog}
                />
                <OutputCard 
                    text1="Localidade: " 
                    text2={searchResponse?.location}
                />
                <OutputCard 
                    text1="Membro desde: " 
                    text2={searchResponse?.created_at} 
                />
            </div>
        </div>
    </div>
);}

export default SearchTable;