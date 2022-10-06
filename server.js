const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')
const bakersController = require('./controllers/bakers_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
reviewsController = require('./controllers/reviews_controller')

app.listen(PORT, () => console.log(`server listening to port ${PORT}`))

app.use(logger)
app.use(express.static(`client`))
app.use(express.json())
app.use(sessions)
app.use('/api/bakers', bakersController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
app.use('/api/bakers/reviews', reviewsController)

const apiKey = process.env.BING_API_KEY
app.get('/bingMapsKey', (req, res) => {
  res.json(apiKey)
})
