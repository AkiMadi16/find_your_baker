const db = require('../db/db')

const Reviews = {
  create: (bakerId, review, userName) => {
    const sql = `
    INSERT INTO reviews(baker_id, review, user_name)
    VALUES ($1, $2, $3)
    RETURNING *
  `
return db
        .query(sql, [bakerId, review, userName])
        .then(dbRes => dbRes.rows[0])
  },
  findAllReviews: (bakerId) => {
    const sql = `
      SELECT * FROM reviews 
      WHERE baker_id = $1
    `
    return db
      .query(sql, [bakerId])
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Reviews