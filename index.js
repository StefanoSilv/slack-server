const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


require('./db.js')

app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_messages'))
app.post('/api/channels', require('./controllers/post_channels'))
app.get('/api/channels', require('./controllers/get_channels'))

//Users authentication
app.post('/api/signup', require('./controllers/signup'))
app.post('/api/login', require('./controllers/login'))








app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
