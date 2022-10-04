const db = require('../db/db')

const Baker = {
    findAll: () => {
        const sql = 'SELECT * FROM bakers';
        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },
    create: (img, name, address, contact, specialty) => {
        const sql = `
        INSERT INTO bakers(img, name, address, contact, specialty)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
       
    `
    return db
            .query(sql, [img, name, address, contact, specialty])
            .then(dbRes => dbRes.rows[0])
    },

    delete: bakerId => {
        const sql = `
            DELETE FROM bakers WHERE id = $1    
        `
        return db.query(sql, [bakerId])
    }
  }

  module.exports = Baker