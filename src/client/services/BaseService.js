import _ from 'lodash';
import axios from 'axios';
import Promise from 'bluebird';

const initialRequestConfig = {
    headers: {},
    validateStatus: () => true // Return resolved for all requests.
};

class BaseService {
    constructor(store) {
        this.store = store;
    }

    static getRequestConfig() {
        return _.clone(initialRequestConfig);
    }

    static handleResponse(response) {
        if(response.status >= 400) {
            return Promise.reject(response.data);
        }

        return Promise.resolve(response.data);
    }

    httpGet(url) {
        return Promise
            .resolve(axios.get(url, BaseService.getRequestConfig())) // Covert to bluebird promise.
            .then(BaseService.handleResponse);
    }

    httpPost(url, body) {
        return Promise
            .resolve(axios.post(url, body, BaseService.getRequestConfig()))
            .then(BaseService.handleResponse);
    }
}

export default BaseService;
