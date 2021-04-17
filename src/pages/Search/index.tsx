import SearchTable from 'core/components/SearchTable';
import { SearchData } from 'core/types/SearchData';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import InputTable from './InputTable';
import './styles.scss';

const Search = () => {
    const [userInfo, setUserInfo] = useState<SearchData>();
    console.log(userInfo);

    const handleOnSearch = (search: string) => {
        makeRequest({ url: `/${search}` })
            .then(response => {
                setUserInfo(response.data);
            })
    }

    return (
        <div>
            <InputTable onSearch={handleOnSearch} />
            <div className="search-position">
                {
                    userInfo && (
                        <SearchTable user={userInfo} />
                    )
                }
            </div>
        </div>
    );
}

export default Search;