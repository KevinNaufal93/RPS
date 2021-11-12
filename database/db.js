const Pool = require('pg').Pool

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 3307,
    password: 'password',
    database: 'rps'
})

module.exports =  pool;
