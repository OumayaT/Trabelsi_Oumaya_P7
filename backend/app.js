const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

//appel aux différentes fonctions implémentées 
const auth = require('./src/middleware/auth')
const userCtrl = require('./src/controllers/user')
const notificationsCtrl = require('./src/controllers/notifications')
const postsRoutes = require('./src/routes/posts')
const userRoutes = require('./src/routes/user')


// paramétrage des headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})
require('dotenv').config();
app.use(bodyParser.json())


app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/api/posts', postsRoutes)
app.use('/api/auth', userRoutes)

app.get('/api/users/:id', auth, userCtrl.getOneUser)
app.get('/api/users', auth, userCtrl.getAllUsers)
app.delete('/api/users/:id', auth, userCtrl.deleteUserAccount)

app.get('/api/notifications', auth, notificationsCtrl.getNotificationsOfOneUser)
app.delete('/api/notifications/:id', auth, notificationsCtrl.deleteNotification)


// Export de l'application express pour déclaration dans server.js
module.exports = app
