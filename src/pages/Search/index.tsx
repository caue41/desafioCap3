import Button from 'core/components/Button';
import SearchTable from 'core/components/SearchTable';
import React from 'react';
import './styles.scss';

const Search = () => (
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

export default Search;