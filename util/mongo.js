var mongojs = require('mongojs');

var db = mongojs('mongodb://admin:password@ds031925.mlab.com:31925/recipesdb');

// Export collections
module.exports = db;
