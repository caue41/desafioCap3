import SearchTable from 'core/components/SearchTable';
import ImageLoader from 'core/components/SearchTable/Loader/ImageLoader';
import InfoLoader from 'core/components/SearchTable/Loader/InfoLoader';
import { SearchData } from 'core/types/SearchData';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import InputTable from './InputTable';
import './styles.scss';

const Search = () => {
    const [userInfo, setUserInfo] = useState<SearchData>();
    const [isLoading, setIsLoading] = useState(false);
    console.log(userInfo);

    const handleOnSearch = (search: string) => {
        setIsLoading(true);
        makeRequest({ url: `/${search}` })
            .then(response => {
                setUserInfo(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div>
            <InputTable onSearch={handleOnSearch} />
            <div className="search-position">
                {isLoading ? <div>
                                <ImageLoader />
                                <InfoLoader />
                            </div> : (
                    <div>
                        {
                            userInfo && (
                                <SearchTable user={userInfo} />
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;