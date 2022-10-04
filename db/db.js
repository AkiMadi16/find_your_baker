const pg = require('pg')

const db = new pg.Pool({
    database: 'baker_collective',
    password: '1111'
})

module.exports = db 