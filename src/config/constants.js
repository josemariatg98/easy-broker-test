require('dotenv').config()

const EASY_BROKER_URL = process.env.EASY_BROKER_URL;
const API_KEY = process.env.API_KEY;
const ENABLE_DUMMY_DATA = false;

const MESSAGES = Object.freeze({
    OK: 'Ok',
    ERROR: 'Unknown error',
});

module.exports = {
    EASY_BROKER_URL,
    API_KEY,
    ENABLE_DUMMY_DATA,
    MESSAGES,
};