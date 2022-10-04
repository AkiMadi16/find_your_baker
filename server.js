const express = require('express')
const app = express()
const PORT = 8080

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

<<<<<<< HEAD
const bakersController = require('./controllers/bakers_controller')
=======
// const bakersController = require('./controllers/bakers_controller')
>>>>>>> for fetch
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

app.listen(PORT, () => console.log`server listening to port ${PORT}`)

app.use(logger)
app.use(express.static(`client`))
app.use(express.json())
app.use(sessions)
<<<<<<< HEAD
// app.use('/api/baker', bakersController)
app.use('/api/users', usersController)
// app.use('/api/sessions', sessionsController)
=======
// app.use('/api/bakers', bakersController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
>>>>>>> for fetch
