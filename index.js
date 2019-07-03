const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config()

require('./db.js')

app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_messages'))
app.post('/api/channels', require('./controllers/post_channels'))
app.get('/api/channels', require('./controllers/post_channels'))








app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
