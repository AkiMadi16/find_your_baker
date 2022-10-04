const db = require('../db/db')

const Baker = {
    findAll: () => {
        const sql = 'SELECT * FROM bakers ORDER BY id';
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
    },
    update: (id, img, name, address, contact, specialty) => {
      const sql =`
          UPDATE bakers SET img = $2, name = $3, address = $4, contact = $5, specialty = $6
          WHERE id = $1
          RETURNING *
      `
      return db
          .query(sql, [id, img, name, address, contact, specialty])
          .then(dbRes => dbRes.rows[0])
  }
  }

  module.exports = Baker