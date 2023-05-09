const { API_KEY, EASY_BROKER_URL, MESSAGES } = require('../config/constants.js');

class EasyBrokerService {
    constructor() { }

    async getProperties() {
        return new Promise((resolve) => {
            fetch(EASY_BROKER_URL + '/v1/properties', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': API_KEY
                }
            })
                .then(async response => resolve({
                    error: false,
                    data: await response.json(),
                    message: MESSAGES.OK
                }))
                .catch(async error => resolve({
                    error: true,
                    data: await error.json(),
                    message: MESSAGES.ERROR
                }));
        });
    }
}

module.exports = EasyBrokerService;