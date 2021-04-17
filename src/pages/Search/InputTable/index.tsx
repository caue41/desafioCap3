import React, { useState } from 'react';
import Button from '../../../core/components/Button';
import './styles.scss';

type Props = {
    onSearch: (search: string) => void;
}

const InputTable = ({ onSearch }: Props) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(search);
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <nav className="base-position">
            <ul className="search-base-form">
                <h1>Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-7 position1-config">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuário Github"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <li className="position2-config">
                        <Button text="Encontrar" />
                    </li>
                </form>
            </ul>
        </nav>
    );
}

export default InputTable;