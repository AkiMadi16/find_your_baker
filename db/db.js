const pg = require('pg')
const localDbName = 'baker_collective'
let db;
if (process.env.DATABASE_URL) {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  if (process.env.DB_PASSWORD) {
    db = new pg.Pool({
      database: localDbName,
      password: 1111
    })
  } else {
    db = new pg.Pool({
      database: localDbName
    })
  }
}

module.exports = db 