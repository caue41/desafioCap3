import Button from 'core/components/Button';
import SearchTable from 'core/components/SearchTable';
import React, { useEffect } from 'react';
import './styles.scss';
import { makeRequest } from 'core/utils/request';

const Search = () => {

    useEffect(() => {
        makeRequest({ url: '/caue41'})
        .then(response => console.log(response));
    }, []);

    return (
        <div>
            <div className="base-position">
                <div className="search-base-form">
                    <h1>Encontre um perfil Github</h1>
                    <div className="row">
                        <div className="col-7 position1-config">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="position2-config">
                            <Button text="Encontrar" />
                    </div>
                </div>
            </div>
            <div className="base-position">
                <SearchTable />
            </div>
        </div>
    );
}

export default Search;