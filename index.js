const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

require('./db.js')

app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_messages'))








app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
