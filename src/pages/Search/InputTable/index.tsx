import React from 'react';
import Button from '../../../core/components/Button';
import './styles.scss';

const InputTable = () => {
    return (
        <nav className="base-position">
            <ul className="search-base-form">
                <h1>Encontre um perfil Github</h1>
                <div className="row">
                    <div className="col-7 position1-config">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <li className="position2-config">
                    <a href="/search/user">
                        <Button text="Encontrar"/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default InputTable;