const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const apis = require('./APIs');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    // ...tags,
    ...apis,
};