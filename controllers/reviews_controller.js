const express = require('express')
const router = express.Router()

const Reviews = require('../models/review')
const User = require('../models/user')
const Rating = require('../models/rating')

router.post('/', (req, res) => {
  const {rating, bakerId, review, email} = req.body
  User
    .findByEmail(email)
    .then(user => {
      const userName = user.name 
      Reviews
      .create(bakerId, review, userName)
      .then(review => res.json({message: `Thank you for reviewing this baker!`}))
  })
})

router.get('/:bakerId', (req, res) => {
  const bakerId = req.params.bakerId
  Reviews
    .findAllReviews(bakerId)
    .then(reviews => res.json(reviews))

})

module.exports = router