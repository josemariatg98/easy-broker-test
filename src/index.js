const { ENABLE_DUMMY_DATA, MESSAGES } = require('./config/constants.js');
const EasyBrokerService = require('./models/easy-broker.service.js');
const dummy = require('../dummy.json');

const handler = async () => {
    const easyBrokerService = new EasyBrokerService();
    const response = (ENABLE_DUMMY_DATA)
        ? { error: false, data: dummy, message: MESSAGES.OK }
        : await easyBrokerService.getProperties()
    if (response.error) {
        console.log(response);
        return;
    }
    const properties = response.data || [];
    properties.content.forEach((property, index) => {
        console.log(`${index+1} - ${property.title}`);
    });
}
handler();

module.exports = handler;