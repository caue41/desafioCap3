import './styles.scss';
import Button from '../Button';
import OutputCard from '../OutputCard';
import OutputCardHeader from '../OutputCardHeader';
import { SearchData } from 'core/types/SearchData';
import { useState } from 'react';
import ImageLoader from './Loader/ImageLoader';

type Props = {
    user: SearchData
}

const SearchTable = ({ user }: Props) => {

    return (
        <div className="page search-board">
            <div className="item3 menu">
                <div className="padding_config2">
                        <img src={user.avatar_url} alt={user.blog} className="user-image" />
                </div>
                <li className="Buttom-text-config">
                    <a
                        href={`https://github.com/${user.login}`}
                        target="_new"
                    >
                        <Button text="Ver perfil" />
                    </a>
                </li>
            </div>
            <div className="item1 header row align-text">
                <OutputCardHeader
                    text1="Repositórios públicos: "
                    text4={user.public_repos}
                    text2="Seguidores: "
                    text5={user.followers}
                    text3="Seguindo: "
                    text6={user.following}
                />
            </div>
            <div className="item2 main information-table">
                <div className="text-title">
                    <h2>Informações</h2>
                </div>
                <div>
                    <OutputCard
                        text1="Empresa: "
                        text2={user.company}
                    />
                    <OutputCard
                        text1="Website/Blog: "
                        text2={user.blog}
                    />
                    <OutputCard
                        text1="Localidade: "
                        text2={user.location}
                    />
                    <OutputCard
                        text1="Membro desde: "
                        text2={user.created_at}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchTable;