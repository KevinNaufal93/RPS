const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 3307,
    password: 'password',
    database: 'RPS'
})

module.exports = { client };
