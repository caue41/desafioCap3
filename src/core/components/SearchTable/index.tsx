import React from 'react';
import './styles.scss';
import { ReactComponent as UserImage } from '../../assets/images/profile_image.svg';
import Button from '../Button';

const SearchTable = () => (
    <div className="page search-board">
        <div className="item header">
            Header
        </div>
        <div className="item2 menu">
            <div className="padding_config2">
                <UserImage />
            </div>
            <div className="Buttom-text-config">
                <Button text="Ver perfil" />
            </div>
        </div>
        <div className="item main information-table">
            <h1>Main</h1>
        </div>
    </div>
    /*<div className="grid search-board padding-config">
        <div className="item item-1">
            <div className="padding_config2">
                <UserImage />
            </div>
            <div className="Buttom-text-config">
                <Button text="Ver perfil" />
            </div>
        </div>
        <div className="item item-2">
            <div className="information-table">
                <h1>table4</h1>
            </div>
        </div>
    </div>*/
);

export default SearchTable;