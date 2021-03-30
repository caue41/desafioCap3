import axios from 'axios';

type RequestParams = {
    url: string;
}

const BASE_URL = 'https://api.github.com/users';

export const makeRequest = ({ url }:RequestParams) => {
    return axios ({
        url: `${BASE_URL}${url}`
    });
}