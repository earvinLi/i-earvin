/* eslint-env node */
const path = require('path');
const formatCommand = 'prettier ./app --check';

module.exports = {
    './app': formatCommand,
};
