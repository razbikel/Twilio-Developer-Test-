const {Pool} = require('pg')
const databaseConfiguration = require('./database_conf');

// for interacting with postgresSQL DB
const pool = new Pool(databaseConfiguration);

module.exports = pool;
