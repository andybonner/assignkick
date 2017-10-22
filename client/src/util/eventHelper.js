
import config from '../config/config.js';
const { API_URL } = config;


let eventHelpers = {
    getEvents : function () {
        return fetch(`${API_URL}/event/`, {
            method: 'GET'
        })
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log('fetch Error get Event : ' + error);
                error.errors = true;
                return error;
            });
    }
};
export default eventHelpers;