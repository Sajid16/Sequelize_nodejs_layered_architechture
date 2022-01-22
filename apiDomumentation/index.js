const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const tutorials = require('./tutorials');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    // ...tags,
    ...tutorials
};