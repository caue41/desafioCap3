import SearchTable from 'core/components/SearchTable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InputTable from './InputTable';
import './styles.scss';

const Search = () => {
    return (
        <div>
            <InputTable />
            <div className="search-position">
                <Switch>
                    <Route path="/search/user">
                        <SearchTable />
                    </Route>
                </Switch>
            </div>
        </div>
    );}

export default Search;